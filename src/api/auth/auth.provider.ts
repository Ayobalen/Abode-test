import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { ACCESS_TOKEN_EXPIRES, REFRESH_TOKEN_EXPIRES } from 'src/constants';
import { UtilService } from 'src/helpers';
import { AuthService } from './auth.service';
import { UserService } from 'src/api/user/user.service';
import { UserTokenDocument } from './schema';
import moment from 'moment';
import { LoginDto } from './dtos';
import { ITokenPayload } from 'src/interfaces';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
@Injectable()
export class AuthProvider {
  myCode: any;
  constructor(
    private readonly userService: UserService,
    private readonly utilService: UtilService,
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  async login(payload: LoginDto) {
    const auth = await this.authService.getUserByEmail(payload.email);
    if (!auth) {
      throw new BadRequestException('Email does not exist, please check and try again');
    }
    const userExist = await this.userService.getUser({ email: payload.email });
    if (!userExist) {
      throw new NotFoundException('User does not exist');
    }
    const checkPassword = await this.utilService.comparePassword(payload.password, auth.password);
    if (!checkPassword) {
      throw new BadRequestException('Invalid password');
    }
    const authData: Partial<ITokenPayload> = {
      email: auth.user.email,
      phone_number: auth.user.phone_number,
      user: (<any>auth).user?._id.toString(),
    };
    const dataResponse = {
      ...auth.user,
      is_account_verified:(userExist as any)?.is_account_verified ?? false,
    };

    const accessToken = await this.authService.getToken({
      ...authData,
      is_refresh_token: false,
      exp: moment().utc().add({ seconds: ACCESS_TOKEN_EXPIRES }).unix(),
    } as any);

    const refreshToken = await this.authService.getToken({
      ...authData,
      is_refresh_token: true,
      exp: moment().utc().add({ seconds: REFRESH_TOKEN_EXPIRES }).unix(),
    } as any);

    let userToken: UserTokenDocument;
    userToken = await this.authService.updateUserToken(
      {
        user: auth._id,
      },
      {
        access_token: accessToken,
        refresh_token: refreshToken,
      },
      {
        new: true,
      },
    );
    if (!userToken) {
      userToken = await this.authService.createUserToken({
        user: auth._id.toString(),
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    }
    const data: any = { userAuth: userToken, user: dataResponse };
    const user = await this.userService.getUser((<any>auth).user?._id);

    return {
      status: 'success',
      message: 'Successfully logged in',
      data: data,
    };
  }
}
