import mongoose from 'mongoose';
import { User } from 'src/api/user/schema';
import { NOTIFICATION_TYPE } from 'src/constants';
export declare class Notification {
    user: User;
    title: string;
    fcm_token: string;
    body: string;
    type: NOTIFICATION_TYPE;
}
export type NotificationDocument = mongoose.Document & Notification;
export declare const NotificationSchema: mongoose.Schema<Notification, mongoose.Model<Notification, any, any, any, mongoose.Document<unknown, any, Notification> & Notification & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Notification, mongoose.Document<unknown, {}, mongoose.FlatRecord<Notification>> & mongoose.FlatRecord<Notification> & {
    _id: mongoose.Types.ObjectId;
}>;
