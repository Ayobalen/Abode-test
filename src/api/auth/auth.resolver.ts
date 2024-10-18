import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserAuthType } from 'src/api/auth/schema/user-auth.type';
import { AuthService } from './auth.service';
import { AuthProvider } from './auth.provider';
import { LoginResponseType } from './schema/login.type';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { LoginPayloadInput } from './schema/login-input.type';
import { UserService } from 'src/services';
import { User } from './schema/login-output.type';
import { UtilService } from 'src/helpers';

@Resolver(() => UserAuthType)
export class UserAuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly authProvider: AuthProvider,
    private readonly userService: UserService,
    private readonly utilService: UtilService,
  ) {}

  @Mutation(() => UserAuthType)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('phone_number') phone_number: string,
  ): Promise<UserAuthType & User> {
    try {
      const checkExistedUser = await this.authService.getUserByEmail(email);
      if (checkExistedUser) {
        throw new BadRequestException('Email already registered. Please log in');
      }
      const user = await this.userService.createNewUser({
        email,
        phone_number,
      });

      const hashedPass = await this.utilService.getHashedPwd(password);

      const userAuth = await this.authService.createAuth({
        email: user.email,
        phone_number: user.phone_number,
        password: hashedPass,
        user: user._id.toString(),
      });

      await this.userService.updateUser(user._id, {
        ...user,
        userAuthId: userAuth._id.toString(),
      });

      return {
        _id: user._id.toString(),
        email: user.email,
        phone_number: user.phone_number,
        password: hashedPass,
        confirm_password: user.confirm_password || null,
        previousPasswords: user.previousPasswords || [],
        deleted: user.deleted,
        userAuthId: userAuth._id.toString(),
        accessToken: userAuth.access_token,
        refreshToken: userAuth.refresh_token || null,
      };
    } catch (error) {
      console.error('Create User Error:', error);
      throw error;
    }
  }

  @Mutation(() => LoginResponseType)
  async loginUser(@Args('input') input: LoginPayloadInput): Promise<LoginResponseType> {
    try {
      const userServiceUser = await this.userService.getUser({ email: input.email });
      if (!userServiceUser) {
        throw new NotFoundException('User does not exist in our database');
      }

      const auth = await this.authProvider.login(input);

      if (!auth || !auth.data || !auth.data.userAuth) {
        console.log('Unexpected authentication response');
        throw new InternalServerErrorException('Unexpected authentication response');
      }

      const { userAuth } = auth.data;

      if (!userAuth.access_token) {
        console.log('Access token is missing');
        throw new InternalServerErrorException('Access token is missing');
      }

      const userAuthResponse: UserAuthType = {
        _id: userAuth._id.toString(),
        email: userAuth.email,
        phone_number: userAuth.phone_number,
        password: userAuth.password,
        confirm_password: userAuth.confirm_password,
        previousPasswords: userAuth.previousPasswords || [],
        deleted: userAuth.deleted,
        userAuthId: userAuth._id.toString(),
        accessToken: userAuth.access_token,
        refreshToken: userAuth.refresh_token || null,
      };

      return {
        status: 'success',
        message: 'Successfully logged in',
        data: {
          userAuth: userAuthResponse,
          user: {
            _id: userServiceUser._id.toString(),
            email: userServiceUser.email,
            phone_number: userServiceUser.phone_number,
          },
          token: userAuth.access_token,
        },
        errors: null,
      };
    } catch (error) {
      console.error('Login Error:', error);

      // Handle specific exceptions
      if (error instanceof NotFoundException) {
        return {
          status: 'error',
          message: error.message,
          data: null,
          errors: [{ message: error.message }],
        };
      } else {
        return {
          status: 'error',
          message: 'An unexpected error occurred during login',
          data: null,
          errors: [{ message: 'An unexpected error occurred during login' }],
        };
      }
    }
  }

  @Query(() => String)
  hello(): string {
    return 'Hello, GraphQL!';
  }
}
