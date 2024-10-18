import { Schema as MongooseSchema, Document } from 'mongoose';
import { UserAuth } from 'src/api/auth/schema';
import { User } from 'src/api/user/schema';
export declare class Otp {
    code: string;
    from: string;
    to: string;
    message: string;
    user: User;
    auth: UserAuth;
    otp_type: string;
    otp_reason: string;
    is_validated: boolean;
    meta: any;
    createdAt: Date;
    updatedAt: Date;
    expires_at: any;
    unique_identifier: string;
}
export type OtpDocument = Otp & Document;
export declare const OtpSchema: MongooseSchema<Otp, import("mongoose").Model<Otp, any, any, any, Document<unknown, any, Otp> & Otp & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Otp, Document<unknown, {}, import("mongoose").FlatRecord<Otp>> & import("mongoose").FlatRecord<Otp> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
