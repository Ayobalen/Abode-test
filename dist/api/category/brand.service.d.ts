import { FilterQuery, Model, QueryOptions, UpdateQuery } from 'mongoose';
import { PaginationQuery } from 'src/interfaces';
import { UtilService } from 'src/helpers';
import { BrandDto } from './dtos';
import { Brand, BrandDocument } from './schema/brand';
export declare class BrandService {
    private readonly brandModel;
    private readonly utilService;
    constructor(brandModel: Model<Brand>, utilService: UtilService);
    createBrand(data: BrandDto): Promise<import("mongoose").Document<unknown, {}, Brand> & Brand & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getBrand(filterQuery: FilterQuery<BrandDocument>): Promise<import("mongoose").Document<unknown, {}, Brand> & Brand & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAllBrand(filterQuery: FilterQuery<BrandDocument>, paginationQuery?: PaginationQuery): Promise<{
        data: (import("mongoose").Document<unknown, {}, Brand> & Brand & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        totalPages: number;
        count: number;
    }>;
    updateBrand(filterQuery: FilterQuery<BrandDocument>, updateQuery: UpdateQuery<BrandDocument>, options?: QueryOptions): Promise<import("mongoose").Document<unknown, {}, Brand> & Brand & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    deleteBrand(filterQuery: FilterQuery<BrandDocument>): Promise<import("mongoose").Document<unknown, {}, Brand> & Brand & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
