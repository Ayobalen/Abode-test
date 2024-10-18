"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../constants");
const helpers_1 = require("../../helpers");
const auth_service_1 = require("./auth.service");
const user_service_1 = require("../user/user.service");
const moment_1 = __importDefault(require("moment"));
const jwt_service_1 = require("@nestjs/jwt/dist/jwt.service");
let AuthProvider = class AuthProvider {
    constructor(userService, utilService, authService, jwtService) {
        this.userService = userService;
        this.utilService = utilService;
        this.authService = authService;
        this.jwtService = jwtService;
    }
    async login(payload) {
        var _a, _b, _c;
        const auth = await this.authService.getUserByEmail(payload.email);
        if (!auth) {
            throw new common_1.BadRequestException('Email does not exist, please check and try again');
        }
        const userExist = await this.userService.getUser({ email: payload.email });
        if (!userExist) {
            throw new common_1.NotFoundException('User does not exist');
        }
        const checkPassword = await this.utilService.comparePassword(payload.password, auth.password);
        if (!checkPassword) {
            throw new common_1.BadRequestException('Invalid password');
        }
        const authData = {
            email: auth.user.email,
            phone_number: auth.user.phone_number,
            user: (_a = auth.user) === null || _a === void 0 ? void 0 : _a._id.toString(),
        };
        const dataResponse = Object.assign(Object.assign({}, auth.user), { is_account_verified: (_b = userExist === null || userExist === void 0 ? void 0 : userExist.is_account_verified) !== null && _b !== void 0 ? _b : false });
        const accessToken = await this.authService.getToken(Object.assign(Object.assign({}, authData), { is_refresh_token: false, exp: (0, moment_1.default)().utc().add({ seconds: constants_1.ACCESS_TOKEN_EXPIRES }).unix() }));
        const refreshToken = await this.authService.getToken(Object.assign(Object.assign({}, authData), { is_refresh_token: true, exp: (0, moment_1.default)().utc().add({ seconds: constants_1.REFRESH_TOKEN_EXPIRES }).unix() }));
        let userToken;
        userToken = await this.authService.updateUserToken({
            user: auth._id,
        }, {
            access_token: accessToken,
            refresh_token: refreshToken,
        }, {
            new: true,
        });
        if (!userToken) {
            userToken = await this.authService.createUserToken({
                user: auth._id.toString(),
                access_token: accessToken,
                refresh_token: refreshToken,
            });
        }
        const data = { userAuth: userToken, user: dataResponse };
        const user = await this.userService.getUser((_c = auth.user) === null || _c === void 0 ? void 0 : _c._id);
        return {
            status: 'success',
            message: 'Successfully logged in',
            data: data,
        };
    }
};
AuthProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        helpers_1.UtilService,
        auth_service_1.AuthService,
        jwt_service_1.JwtService])
], AuthProvider);
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=auth.provider.js.map