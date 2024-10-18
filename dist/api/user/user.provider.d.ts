import { UtilService } from 'src/helpers';
import { AuthService, UserService } from 'src/services';
export declare class UserProvider {
    private readonly userService;
    private readonly authService;
    private readonly utilService;
    constructor(userService: UserService, authService: AuthService, utilService: UtilService);
}
