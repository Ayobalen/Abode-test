import { NotificationDto, UpdateNotificationDto } from './dtos';
import { NotificationProvider } from './notification.provider';
export declare class NotificationController {
    private readonly notificationProvider;
    constructor(notificationProvider: NotificationProvider);
    createNotification(userAuth: any, data: NotificationDto): Promise<import("../../interfaces").IResponse>;
    updateNotification(data: UpdateNotificationDto, id: string): Promise<import("../../interfaces").IResponse>;
}
