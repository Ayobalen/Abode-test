import { BrandDto } from './dtos';
import { BrandProvider } from './brand.provider';
export declare class BrandController {
    private readonly brandProvider;
    constructor(brandProvider: BrandProvider);
    getBrands(query: any): Promise<import("../../interfaces").IResponse>;
    createBrands(brandDto: BrandDto): Promise<import("../../interfaces").IResponse>;
    getBrand(id: string): Promise<import("../../interfaces").IResponse>;
    updateBrands(brandDto: BrandDto, id: string): Promise<import("../../interfaces").IResponse>;
    deleteBrand(id: string): Promise<import("../../interfaces").IResponse>;
}
