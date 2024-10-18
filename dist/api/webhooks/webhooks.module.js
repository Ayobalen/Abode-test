"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("../user/schema");
const order_1 = require("../order/schema/order");
const order_provider_1 = require("../order/order.provider");
const paystack_1 = require("../../services/provider/payment/paystack");
const order_service_1 = require("../order/order.service");
const product_service_1 = require("../products/product.service");
const user_service_1 = require("../user/user.service");
const schema_2 = require("../products/schema");
const schema_3 = require("../rating-and-review/schema");
const utils_service_1 = require("../../helpers/utils.service");
const general_helpers_1 = require("../../helpers/general.helpers");
const email_1 = require("../../services/emails/email");
const webhooks_controller_1 = require("./webhooks.controller");
const bank_service_1 = require("../bank/bank.service");
const schema_4 = require("../bank/schema");
const bank_provider_1 = require("../bank/bank.provider");
const notification_service_1 = require("../notification/notification.service");
const pushNotification_1 = require("../../services/provider/contents/pushNotification");
const notification_1 = require("../notification/schema/notification");
let WebhooksModule = class WebhooksModule {
};
exports.WebhooksModule = WebhooksModule;
exports.WebhooksModule = WebhooksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.User.name,
                    schema: schema_1.UserSchema,
                },
                {
                    name: schema_1.DeviceToken.name,
                    schema: schema_1.DeviceTokenSchema,
                },
                {
                    name: order_1.Order.name,
                    schema: order_1.OrderSchema,
                },
                {
                    name: schema_2.Product.name,
                    schema: schema_2.ProductSchema,
                },
                {
                    name: schema_3.ProductsRating.name,
                    schema: schema_3.ProductsRatingSchema,
                },
                {
                    name: schema_4.Bank.name,
                    schema: schema_4.BankSchema,
                },
                {
                    name: schema_4.Wallet.name,
                    schema: schema_4.WalletSchema,
                },
                {
                    name: schema_4.Withdrawal.name,
                    schema: schema_4.WithdrawalSchema,
                },
                {
                    name: notification_1.Notification.name,
                    schema: notification_1.NotificationSchema,
                },
            ]),
        ],
        providers: [
            paystack_1.Paystack,
            order_provider_1.OrderProvider,
            bank_provider_1.BankProvider,
            utils_service_1.UtilService,
            general_helpers_1.Helpers,
            product_service_1.ProductService,
            user_service_1.UserService,
            order_service_1.OrderService,
            email_1.MailService,
            bank_service_1.BankService,
            notification_service_1.NotificationService,
            pushNotification_1.PushNotificationService,
        ],
        controllers: [webhooks_controller_1.WebhooksController],
        exports: [order_provider_1.OrderProvider],
    })
], WebhooksModule);
//# sourceMappingURL=webhooks.module.js.map