import * as mongoose from 'mongoose';
import { User } from './user.schema';
export declare class DeviceToken {
    device_meta: mongoose.Schema.Types.Mixed;
    user: User;
    device_tokens: string[];
}
export type DeviceTokenDocument = mongoose.Document & DeviceToken;
export declare const DeviceTokenSchema: mongoose.Schema<DeviceToken, mongoose.Model<DeviceToken, any, any, any, mongoose.Document<unknown, any, DeviceToken> & DeviceToken & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, DeviceToken, mongoose.Document<unknown, {}, mongoose.FlatRecord<DeviceToken>> & mongoose.FlatRecord<DeviceToken> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
