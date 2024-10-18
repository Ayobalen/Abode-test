import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { UserToken, UserTokenDocument, UserAuth, UserAuthDocument } from 'src/api/auth/schema';
import { ITokenPayload, IUserAuth, IUserToken } from 'src/interfaces';
export declare class AuthService {
    private readonly userAuthModel;
    private readonly userTokenModel;
    private readonly jwtService;
    constructor(userAuthModel: Model<UserAuthDocument>, userTokenModel: Model<UserTokenDocument>, jwtService: JwtService);
    createAuth(userAuthData: IUserAuth): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getUserByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    updateUserAuth(filterQuery: FilterQuery<UserAuthDocument>, updateQuery: UpdateQuery<UserAuthDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    deleteUserAuth(filterQuery: FilterQuery<UserAuthDocument>): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    createUserToken(tokenData: IUserToken): Promise<Omit<import("mongoose").Document<unknown, {}, UserTokenDocument> & import("mongoose").Document<unknown, any, any> & UserToken & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, never>>;
    updateUserToken(filterQuery: FilterQuery<UserTokenDocument>, updateQuery: UpdateQuery<UserTokenDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, UserTokenDocument> & import("mongoose").Document<unknown, any, any> & UserToken & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getToken(data: ITokenPayload, options?: JwtSignOptions): Promise<string>;
    decode(token: string): ITokenPayload;
    deleteUserByEmail(email: string): Promise<import("mongoose").Document<unknown, {}, UserAuthDocument> & UserAuth & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
