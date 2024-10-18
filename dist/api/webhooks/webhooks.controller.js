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
exports.WebhooksController = void 0;
const common_1 = require("@nestjs/common");
const order_provider_1 = require("../order/order.provider");
const constants_1 = require("../../constants");
const bank_provider_1 = require("../bank/bank.provider");
let WebhooksController = class WebhooksController {
    constructor(orderProvider, bankProvider) {
        this.orderProvider = orderProvider;
        this.bankProvider = bankProvider;
    }
    async handleWebhook(body) {
        try {
            const { event, data } = body;
            console.log('Webhook triggered with event:', event);
            if (!['charge.success', 'charge.failed'].includes(event)) {
                throw new common_1.BadRequestException('Invalid event type');
            }
            const { reference } = data;
            console.log('Reference received:', reference);
            const prefix = reference.substring(0, 2);
            console.log('Prefix received:', prefix);
            const originalReference = reference.substring(2);
            let mappedStatus = event === 'charge.success' ? constants_1.TRANSACTION_STATUS.SUCCESSFUL : constants_1.TRANSACTION_STATUS.FAILED;
            if (prefix === 'OR') {
                console.log('Updating Order payment status for reference:', originalReference);
                await this.orderProvider
                    .updateOrderStatus(originalReference, {
                    transaction_status: mappedStatus,
                })
                    .catch((error) => {
                    console.error(`Failed to update order status for reference ${originalReference}:`, error);
                    throw new common_1.BadRequestException('Failed to update order status');
                });
            }
            else if (prefix === 'WI') {
                console.log('Updating withdrawal status for reference:', originalReference);
                await this.bankProvider
                    .updateWithdrawalStatus(originalReference, {
                    transaction_status: mappedStatus,
                })
                    .catch((error) => {
                    console.error(`Failed to update withdrawal status for reference ${originalReference}:`, error);
                    throw new common_1.BadRequestException('Failed to update withdrawal status');
                });
            }
            else {
                throw new common_1.BadRequestException('Invalid reference prefix');
            }
            return {
                data: 'success',
            };
        }
        catch (err) {
            console.error('Error handling webhook:', err);
            throw err;
        }
    }
};
exports.WebhooksController = WebhooksController;
__decorate([
    (0, common_1.Post)('payment-status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WebhooksController.prototype, "handleWebhook", null);
exports.WebhooksController = WebhooksController = __decorate([
    (0, common_1.Controller)('webhooks'),
    __metadata("design:paramtypes", [order_provider_1.OrderProvider,
        bank_provider_1.BankProvider])
], WebhooksController);
//# sourceMappingURL=webhooks.controller.js.map