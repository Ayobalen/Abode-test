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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_auth_type_1 = require("./user-auth.type");
const user_token_type_1 = require("./user-token.type");
const login_data_type_1 = require("./login-data.type");
const login_error_type_1 = require("./login-error.type");
const login_output_type_1 = require("./login-output.type");
let LoginResponseType = class LoginResponseType {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginResponseType.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoginResponseType.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_auth_type_1.UserAuthType),
    __metadata("design:type", user_auth_type_1.UserAuthType)
], LoginResponseType.prototype, "userAuth", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_token_type_1.UserTokenType),
    __metadata("design:type", user_token_type_1.UserTokenType)
], LoginResponseType.prototype, "token", void 0);
__decorate([
    (0, graphql_1.Field)(() => login_output_type_1.User, { nullable: true }),
    __metadata("design:type", login_output_type_1.User)
], LoginResponseType.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [login_error_type_1.LoginError], { nullable: true }),
    __metadata("design:type", Array)
], LoginResponseType.prototype, "errors", void 0);
__decorate([
    (0, graphql_1.Field)(() => login_data_type_1.LoginDataType, { nullable: true }),
    __metadata("design:type", login_data_type_1.LoginDataType)
], LoginResponseType.prototype, "data", void 0);
LoginResponseType = __decorate([
    (0, graphql_1.ObjectType)()
], LoginResponseType);
exports.LoginResponseType = LoginResponseType;
//# sourceMappingURL=login.type.js.map