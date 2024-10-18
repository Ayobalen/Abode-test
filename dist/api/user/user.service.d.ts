import { Model, FilterQuery } from 'mongoose';
import { UtilService } from 'src/helpers/utils.service';
import { PaginationQuery } from 'src/interfaces';
import { User, UserDocument } from './schema';
export declare class UserService {
    private readonly userModel;
    private readonly utilService;
    constructor(userModel: Model<UserDocument>, utilService: UtilService);
    createNewUser(data: any): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: string;
    }> & {
        __v?: number;
    }>;
    getAllUsers(filterQuery: FilterQuery<UserDocument>, paginationQuery?: PaginationQuery): Promise<{
        data: (import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
            _id: string;
        }> & {
            __v?: number;
        })[];
        count: number;
        totalPages: number;
    }>;
    getUser(filterQuery: FilterQuery<UserDocument>): Promise<UserDocument>;
    updateUser(userId: string, updateData: Partial<UserDocument>): Promise<UserDocument>;
    deleteUser(filterQuery: FilterQuery<UserDocument>): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: string;
    }> & {
        __v?: number;
    }>;
}
