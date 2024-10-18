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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const randomatic = require("randomatic");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const axios_1 = __importDefault(require("axios"));
const schema_1 = require("../common/schema");
let OtpService = class OtpService {
    constructor(configService, otpModel) {
        this.configService = configService;
        this.otpModel = otpModel;
        this.axios_http = axios_1.default;
    }
    async sendSMS(to, message, otp_reason) {
        const response = await this.sendWithTermii(to, message);
        console.log(response);
        try {
        }
        catch (err) {
            console.log(err);
        }
    }
    async createOtp(data) {
        const createdOtp = await this.otpModel.create(data);
        return createdOtp;
    }
    async getCode() {
        return new Promise((resolve) => {
            const code = randomatic('0', 4);
            resolve(code);
        });
    }
    async updateOtp(filterQuery, updateQuery, options) {
        const sms = await this.otpModel.findOneAndUpdate(filterQuery, updateQuery, options);
        return sms;
    }
    async getOtp(filterQuery) {
        const code = await this.otpModel.findOne(filterQuery);
        return code;
    }
    async getOtps(filterQuery) {
        const otps = await this.otpModel.find(filterQuery);
        return otps;
    }
    async sendWithTermii(to, body) {
        let number = to;
        if (!to.startsWith('+')) {
            number = `+${to}`;
        }
        console.log(to);
        const data = {
            to: number,
            from: 'legum',
            sms: body,
            type: 'plain',
            api_key: 'TLVUMqChaTvRpJnZVxk5XRJ2GQclUj8croaftrXvRB2yKqo7Wx98grG3dhITZM',
            channel: 'dnd',
        };
        console.log(data);
        try {
            const response = await axios_1.default.post('https://api.ng.termii.com/api/sms/send', data, {
                headers: { 'Content-Type': 'application/json', 'cache-control': 'no-cache' },
            });
            console.log(response);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
};
exports.OtpService = OtpService;
exports.OtpService = OtpService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(schema_1.Otp.name)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        mongoose_2.Model])
], OtpService);
//# sourceMappingURL=otp.service.js.map