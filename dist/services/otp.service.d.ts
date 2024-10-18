import { ConfigService } from '@nestjs/config';
import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { OtpReason } from 'src/constants';
import { Otp, OtpDocument } from 'src/common/schema';
export declare class OtpService {
    private readonly configService;
    private readonly otpModel;
    private emailClient;
    private termii_sender_id;
    private termii_api_key;
    private termii_url;
    private axios_http;
    constructor(configService: ConfigService, otpModel: Model<OtpDocument>);
    sendSMS(to: string, message: string, otp_reason?: OtpReason): Promise<any>;
    createOtp(data: any): Promise<OtpDocument>;
    getCode(): Promise<string>;
    updateOtp(filterQuery: FilterQuery<OtpDocument>, updateQuery: UpdateQuery<OtpDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, OtpDocument> & Otp & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getOtp(filterQuery: FilterQuery<OtpDocument>): Promise<import("mongoose").Document<unknown, {}, OtpDocument> & Otp & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getOtps(filterQuery: FilterQuery<OtpDocument>): Promise<(import("mongoose").Document<unknown, {}, OtpDocument> & Otp & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    sendWithTermii(to: string, body: string): Promise<void>;
}
