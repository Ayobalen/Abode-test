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
exports.OtpSchema = exports.Otp = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("../../api/auth/schema");
const schema_2 = require("../../api/user/schema");
const constants_1 = require("../../constants");
const helperfunctions_1 = require("../../utils/helperfunctions");
let Otp = class Otp {
};
exports.Otp = Otp;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Otp.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Otp.prototype, "from", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Otp.prototype, "to", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Otp.prototype, "message", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: schema_2.User.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", schema_2.User)
], Otp.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: schema_1.UserAuth.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", schema_1.UserAuth)
], Otp.prototype, "auth", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: Object.values(constants_1.OtpType),
    }),
    __metadata("design:type", String)
], Otp.prototype, "otp_type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: Object.values(constants_1.OtpReason),
    }),
    __metadata("design:type", String)
], Otp.prototype, "otp_reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Otp.prototype, "is_validated", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.Mixed,
    }),
    __metadata("design:type", Object)
], Otp.prototype, "meta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: (0, helperfunctions_1.getServerLocalTime)() }),
    __metadata("design:type", Date)
], Otp.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: (0, helperfunctions_1.getServerLocalTime)() }),
    __metadata("design:type", Date)
], Otp.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
    }),
    __metadata("design:type", Object)
], Otp.prototype, "expires_at", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", String)
], Otp.prototype, "unique_identifier", void 0);
exports.Otp = Otp = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    })
], Otp);
exports.OtpSchema = mongoose_1.SchemaFactory.createForClass(Otp);
//# sourceMappingURL=index.js.map