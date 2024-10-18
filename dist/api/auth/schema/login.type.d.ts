import { UserAuthType } from './user-auth.type';
import { UserTokenType } from './user-token.type';
import { LoginDataType } from './login-data.type';
import { LoginError } from './login-error.type';
import { User } from './login-output.type';
export declare class LoginResponseType {
    status?: string;
    message?: string;
    userAuth?: UserAuthType;
    token?: UserTokenType;
    user?: User;
    errors?: LoginError[];
    data?: LoginDataType;
}
