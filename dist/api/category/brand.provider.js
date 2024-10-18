"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProvider = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
let BrandProvider = class BrandProvider {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async createBrand(brandDto) {
        const brandExist = await this.brandService.getBrand({
            brand_name: brandDto.brand_name,
        });
        if (brandExist) {
            throw new common_1.BadRequestException('Brand with this name already exist. Please change the name');
        }
        const brand = await this.brandService.createBrand(Object.assign({}, brandDto));
        return {
            status: 'success',
            message: 'Brand created successfully',
            data: brand,
        };
    }
    async getBrand(id) {
        const oneBrand = await this.brandService.getBrand({
            _id: id,
        });
        if (!oneBrand) {
            return {
                status: 'success',
                message: 'Brand Not Found',
                data: [],
            };
        }
        return {
            status: 'success',
            message: 'Brand fetched successfully',
            data: oneBrand,
        };
    }
    async getBrands(query) {
        let _query = Object.assign({}, query);
        const paginationQuery = {};
        if (_query.page) {
            paginationQuery.page = Number(_query.page);
            delete _query.page;
        }
        if (_query.limit) {
            paginationQuery.limit = Number(_query.limit);
            delete _query.limit;
        }
        if (_query.search) {
            _query = { brand_name: { $regex: _query.search, $options: 'i' } };
        }
        if (_query.start_date && _query.end_date) {
            _query = {
                createdAt: { $gte: new Date(_query.start_date), $lt: new Date(_query.end_date) },
            };
        }
        const { count, totalPages, data } = await this.brandService.getAllBrand(_query, paginationQuery);
        return {
            status: 'success',
            message: 'All Brands successfully retrieved',
            data: data,
            meta: {
                count,
                totalPages,
            },
        };
    }
    async updateBrand(id, data) {
        const response = await this.brandService.updateBrand({
            _id: id,
        }, data, {
            new: true,
        });
        if (!response) {
            throw new common_1.NotFoundException('Brand not found');
        }
        return {
            status: 'success',
            message: 'Brand updated successfully',
            data: response,
        };
    }
    async deleteBrand(id) {
        const deletedBrand = await this.brandService.deleteBrand({
            _id: id,
        });
        if (!deletedBrand) {
            return {
                status: 'success',
                message: 'Brand Not Found',
                data: [],
            };
        }
        return {
            status: 'success',
            message: 'Brand deleted successfully',
            data: [],
        };
    }
};
exports.BrandProvider = BrandProvider;
exports.BrandProvider = BrandProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandProvider);
//# sourceMappingURL=brand.provider.js.map