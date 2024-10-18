import * as mongoose from 'mongoose';
export declare class Brand {
    brand_name: string;
    description: string;
    brand_banner: string;
    brand_picture: string;
    items_in_market: string;
    product_type: string[];
}
export type BrandDocument = mongoose.Document & Brand;
export declare const BrandSchema: mongoose.Schema<Brand, mongoose.Model<Brand, any, any, any, mongoose.Document<unknown, any, Brand> & Brand & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Brand, mongoose.Document<unknown, {}, mongoose.FlatRecord<Brand>> & mongoose.FlatRecord<Brand> & {
    _id: mongoose.Types.ObjectId;
}>;
