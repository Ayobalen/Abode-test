import { IResponse } from 'src/interfaces';
import { BrandService } from './brand.service';
import { BrandDto } from './dtos';
export declare class BrandProvider {
    private readonly brandService;
    constructor(brandService: BrandService);
    createBrand(brandDto: BrandDto): Promise<IResponse>;
    getBrand(id: string): Promise<IResponse>;
    getBrands(query: any): Promise<IResponse>;
    updateBrand(id: string, data: BrandDto): Promise<IResponse>;
    deleteBrand(id: string): Promise<IResponse>;
}
