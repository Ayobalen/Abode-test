"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const helpers_1 = require("../../helpers");
const brand_controller_1 = require("./brand.controller");
const brand_provider_1 = require("./brand.provider");
const brand_service_1 = require("./brand.service");
const schema_1 = require("./schema");
let BrandModule = class BrandModule {
};
exports.BrandModule = BrandModule;
exports.BrandModule = BrandModule = __decorate([
    (0, common_1.Module)({
        providers: [brand_provider_1.BrandProvider, brand_service_1.BrandService, helpers_1.UtilService],
        exports: [brand_service_1.BrandService],
        controllers: [brand_controller_1.BrandController],
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: schema_1.Brand.name,
                    schema: schema_1.BrandSchema,
                },
            ]),
        ],
    })
], BrandModule);
//# sourceMappingURL=brand.module.js.map