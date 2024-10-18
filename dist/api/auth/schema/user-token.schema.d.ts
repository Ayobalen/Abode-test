import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/api/user/schema/user.schema';
export declare class UserToken {
    user: User;
    access_token: string;
    refresh_token: string;
}
export type UserTokenDocument = Document & UserToken;
export declare const UserTokenSchema: MongooseSchema<UserToken, import("mongoose").Model<UserToken, any, any, any, Document<unknown, any, UserToken> & UserToken & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserToken, Document<unknown, {}, import("mongoose").FlatRecord<UserToken>> & import("mongoose").FlatRecord<UserToken> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
