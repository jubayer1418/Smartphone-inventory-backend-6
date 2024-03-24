"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = exports.createEyeglassesSchema = void 0;
const zod_1 = require("zod");
exports.createEyeglassesSchema = zod_1.z.object({
    name: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
    releaseDate: zod_1.z.string(),
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    operatingSystem: zod_1.z.string(),
    storageCapacity: zod_1.z.string(),
    screenSize: zod_1.z.string(),
    camera: zod_1.z.string(),
    battery: zod_1.z.string()
});
exports.ProductValidation = {
    createEyeglassesSchema: exports.createEyeglassesSchema,
};
