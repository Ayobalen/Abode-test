import { UserAuthType } from 'src/api/auth/schema/user-auth.type';
import { AuthService } from './auth.service';
import { AuthProvider } from './auth.provider';
import { LoginResponseType } from './schema/login.type';
import { LoginPayloadInput } from './schema/login-input.type';
import { UserService } from 'src/services';
import { User } from './schema/login-output.type';
import { UtilService } from 'src/helpers';
export declare class UserAuthResolver {
    private readonly authService;
    private readonly authProvider;
    private readonly userService;
    private readonly utilService;
    constructor(authService: AuthService, authProvider: AuthProvider, userService: UserService, utilService: UtilService);
    createUser(email: string, password: string, phone_number: string): Promise<UserAuthType & User>;
    loginUser(input: LoginPayloadInput): Promise<LoginResponseType>;
    hello(): string;
}
