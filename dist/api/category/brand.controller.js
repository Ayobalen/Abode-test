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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("./dtos");
const helpers_1 = require("../../helpers");
const brand_provider_1 = require("./brand.provider");
const schema_validation_1 = require("./schema-validation");
let BrandController = class BrandController {
    constructor(brandProvider) {
        this.brandProvider = brandProvider;
    }
    async getBrands(query) {
        const data = await this.brandProvider.getBrands(query);
        return data;
    }
    async createBrands(brandDto) {
        const data = await this.brandProvider.createBrand(brandDto);
        return data;
    }
    async getBrand(id) {
        const data = await this.brandProvider.getBrand(id);
        return data;
    }
    async updateBrands(brandDto, id) {
        return this.brandProvider.updateBrand(id, brandDto);
    }
    async deleteBrand(id) {
        const response = await this.brandProvider.deleteBrand(id);
        return response;
    }
};
exports.BrandController = BrandController;
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getBrands", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validation_1.BrandSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.BrandDto]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "createBrands", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "getBrand", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Body)((0, helpers_1.injectJoiSchema)(schema_validation_1.updateBrandSchema))),
    __param(1, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.BrandDto, String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "updateBrands", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(helpers_1.JwtGuard),
    __param(0, (0, common_1.Param)('id', helpers_1.MongoIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "deleteBrand", null);
exports.BrandController = BrandController = __decorate([
    (0, common_1.Controller)('brand'),
    __metadata("design:paramtypes", [brand_provider_1.BrandProvider])
], BrandController);
//# sourceMappingURL=brand.controller.js.map