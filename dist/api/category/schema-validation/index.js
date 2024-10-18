"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBrandSchema = exports.BrandSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const mongoID = joi_1.default.string().regex(/^[a-fA-F0-9]{24}$/);
const joiStr = joi_1.default.string();
const joiNum = joi_1.default.number();
const requiredString = joi_1.default.string().required();
exports.BrandSchema = joi_1.default.object({
    brand_name: joiStr.required(),
    description: joiStr.required(),
    brand_banner: joiStr.required(),
    brand_picture: joiStr.required(),
    items_in_market: joiStr.required(),
    product_type: joi_1.default.array().items(joiStr).required(),
});
exports.updateBrandSchema = joi_1.default.object({
    brand_name: joiStr,
    description: joiStr,
    brand_banner: joiStr,
    brand_picture: joiStr,
    items_in_market: joiStr,
    product_type: joi_1.default.array().items(joiStr),
});
//# sourceMappingURL=index.js.map