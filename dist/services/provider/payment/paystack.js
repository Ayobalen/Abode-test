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
exports.Paystack = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const sentry_exceptions_1 = require("../../../helpers/sentry.exceptions");
let Paystack = class Paystack {
    constructor(configService) {
        this.configService = configService;
        this.apiUrl = 'https://api.paystack.co';
        this._client = axios_1.default.create({
            baseURL: this.apiUrl,
            headers: {
                authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
            },
        });
    }
    async genPaymentLink(payload) {
        var _a, _b;
        if (!payload) {
            throw new Error('Payload cannot be undefined or null');
        }
        try {
            const data = Object.assign(Object.assign({}, payload), { amount: payload.amount, callback_url: 'https://localhost/api/v1/webhooks/payment-status' });
            if (payload.metadata && payload.metadata.user) {
                delete payload.metadata.user;
            }
            const response = await this._client.post('/transaction/initialize', data, this.options);
            return {
                data: { link: `${response.data.data.authorization_url}` },
            };
        }
        catch (error) {
            throw new sentry_exceptions_1.SentryException(error, (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        }
    }
    async createTransferRecipient(data) {
        var _a, _b;
        try {
            const response = await this._client.post('/transferrecipient', data, this.options);
            return response.data;
        }
        catch (error) {
            throw new sentry_exceptions_1.SentryException(error, (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        }
    }
    async initiateTransfer(data) {
        var _a, _b;
        try {
            const response = await this._client.post('/transfer', data, this.options);
            return response.data;
        }
        catch (error) {
            throw new sentry_exceptions_1.SentryException(error, (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
        }
    }
};
exports.Paystack = Paystack;
exports.Paystack = Paystack = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], Paystack);
//# sourceMappingURL=paystack.js.map