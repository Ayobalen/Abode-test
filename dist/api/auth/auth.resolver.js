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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_auth_type_1 = require("./schema/user-auth.type");
const auth_service_1 = require("./auth.service");
const auth_provider_1 = require("./auth.provider");
const login_type_1 = require("./schema/login.type");
const common_1 = require("@nestjs/common");
const login_input_type_1 = require("./schema/login-input.type");
const services_1 = require("../../services");
const helpers_1 = require("../../helpers");
let UserAuthResolver = class UserAuthResolver {
    constructor(authService, authProvider, userService, utilService) {
        this.authService = authService;
        this.authProvider = authProvider;
        this.userService = userService;
        this.utilService = utilService;
    }
    async createUser(email, password, phone_number) {
        try {
            const checkExistedUser = await this.authService.getUserByEmail(email);
            if (checkExistedUser) {
                throw new common_1.BadRequestException('Email already registered. Please log in');
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
            await this.userService.updateUser(user._id, Object.assign(Object.assign({}, user), { userAuthId: userAuth._id.toString() }));
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
        }
        catch (error) {
            console.error('Create User Error:', error);
            throw error;
        }
    }
    async loginUser(input) {
        try {
            const userServiceUser = await this.userService.getUser({ email: input.email });
            if (!userServiceUser) {
                throw new common_1.NotFoundException('User does not exist in our database');
            }
            const auth = await this.authProvider.login(input);
            if (!auth || !auth.data || !auth.data.userAuth) {
                console.log('Unexpected authentication response');
                throw new common_1.InternalServerErrorException('Unexpected authentication response');
            }
            const { userAuth } = auth.data;
            if (!userAuth.access_token) {
                console.log('Access token is missing');
                throw new common_1.InternalServerErrorException('Access token is missing');
            }
            const userAuthResponse = {
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
        }
        catch (error) {
            console.error('Login Error:', error);
            if (error instanceof common_1.NotFoundException) {
                return {
                    status: 'error',
                    message: error.message,
                    data: null,
                    errors: [{ message: error.message }],
                };
            }
            else {
                return {
                    status: 'error',
                    message: 'An unexpected error occurred during login',
                    data: null,
                    errors: [{ message: 'An unexpected error occurred during login' }],
                };
            }
        }
    }
    hello() {
        return 'Hello, GraphQL!';
    }
};
exports.UserAuthResolver = UserAuthResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_auth_type_1.UserAuthType),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('password')),
    __param(2, (0, graphql_1.Args)('phone_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserAuthResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => login_type_1.LoginResponseType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_type_1.LoginPayloadInput]),
    __metadata("design:returntype", Promise)
], UserAuthResolver.prototype, "loginUser", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserAuthResolver.prototype, "hello", null);
exports.UserAuthResolver = UserAuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_auth_type_1.UserAuthType),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        auth_provider_1.AuthProvider,
        services_1.UserService,
        helpers_1.UtilService])
], UserAuthResolver);
//# sourceMappingURL=auth.resolver.js.map