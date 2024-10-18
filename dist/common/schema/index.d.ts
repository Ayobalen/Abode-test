/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
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
