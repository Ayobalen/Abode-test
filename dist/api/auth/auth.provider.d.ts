import { UtilService } from 'src/helpers';
import { AuthService } from './auth.service';
import { UserService } from 'src/api/user/user.service';
import { LoginDto } from './dtos';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
export declare class AuthProvider {
    private readonly userService;
    private readonly utilService;
    private readonly authService;
    private readonly jwtService;
    myCode: any;
    constructor(userService: UserService, utilService: UtilService, authService: AuthService, jwtService: JwtService);
    login(payload: LoginDto): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
}
