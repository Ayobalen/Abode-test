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
exports.LoginDataType = void 0;
const graphql_1 = require("@nestjs/graphql");
const login_output_type_1 = require("./login-output.type");
const user_auth_type_1 = require("./user-auth.type");
let LoginDataType = class LoginDataType {
};
exports.LoginDataType = LoginDataType;
__decorate([
    (0, graphql_1.Field)(() => user_auth_type_1.UserAuthType),
    __metadata("design:type", user_auth_type_1.UserAuthType)
], LoginDataType.prototype, "userAuth", void 0);
__decorate([
    (0, graphql_1.Field)(() => login_output_type_1.User),
    __metadata("design:type", login_output_type_1.User)
], LoginDataType.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], LoginDataType.prototype, "token", void 0);
exports.LoginDataType = LoginDataType = __decorate([
    (0, graphql_1.ObjectType)()
], LoginDataType);
//# sourceMappingURL=login-data.type.js.map