import { Model, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import { NotificationDto } from './dtos';
import { Notification, NotificationDocument } from './schema/notification';
export declare class NotificationService {
    private readonly notificationModel;
    constructor(notificationModel: Model<Notification>);
    createNofication(notificationDto: NotificationDto): Promise<void>;
    getNotification(filterQuery: FilterQuery<NotificationDocument>): Promise<import("mongoose").Document<unknown, {}, Notification> & Notification & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateNotification(filterQuery: FilterQuery<NotificationDocument>, updateQuery: UpdateQuery<NotificationDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, Notification> & Notification & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
