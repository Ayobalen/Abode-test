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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("./dtos");
const notification_provider_1 = require("./notification.provider");
const helpers_1 = require("../../helpers");
const schema_validation_1 = require("./schema-validation");
let NotificationController = class NotificationController {
    constructor(notificationProvider) {
        this.notificationProvider = notificationProvider;
    }
    async createNotification(userAuth, data) {
        data.user = userAuth.user;
        const notification = await this.notificationProvider.createNotification(data);
        return notification;
    }
    async updateNotification(data, id) {
        return this.notificationProvider.updateNotification(id, data);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Post)('create-notification'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, helpers_1.UserAuth)()),
    __param(1, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validation_1.CreateNotificationSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.NotificationDto]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotification", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validation_1.UpdateNotificationSchema))),
    __param(1, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateNotificationDto, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "updateNotification", null);
exports.NotificationController = NotificationController = __decorate([
    (0, common_1.Controller)('notification'),
    __metadata("design:paramtypes", [notification_provider_1.NotificationProvider])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map