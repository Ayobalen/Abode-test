import { NotificationDto, UpdateNotificationDto } from './dtos';
import { NotificationService } from './notification.service';
import { IResponse } from 'src/interfaces';
export declare class NotificationProvider {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    createNotification(data: NotificationDto): Promise<IResponse>;
    updateNotification(id: string, data: UpdateNotificationDto): Promise<IResponse>;
}
