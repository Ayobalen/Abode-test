import { Document } from 'mongoose';
export declare class User {
    email: string;
    phone_number: string;
    password: string;
    confirm_password: string;
    previousPasswords: string[];
    deleted: boolean;
    _id: string;
    userAuthId?: string;
}
export type UserDocument = User & Document;
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: string;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}> & {
    __v?: number;
}>;
