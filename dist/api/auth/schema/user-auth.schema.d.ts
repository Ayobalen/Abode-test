import mongoose, { Document } from 'mongoose';
import { User } from 'src/api/user/schema';
export declare class UserAuth {
    user: User;
    email: string;
    phone_number: string;
    password: string;
    access_token: string;
    refresh_token: string;
    deleted: boolean;
}
export type UserAuthDocument = UserAuth & Document;
export declare const UserAuthSchema: mongoose.Schema<UserAuth, mongoose.Model<UserAuth, any, any, any, mongoose.Document<unknown, any, UserAuth> & UserAuth & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UserAuth, mongoose.Document<unknown, {}, mongoose.FlatRecord<UserAuth>> & mongoose.FlatRecord<UserAuth> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
