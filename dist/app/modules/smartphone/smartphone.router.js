"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartphoneRouter = void 0;
const express_1 = require("express");
const smartphone_controller_1 = require("./smartphone.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const smartphone_validation_1 = require("./smartphone.validation");
const router = (0, express_1.Router)();
router.post("/add-product", (0, validateRequest_1.default)(smartphone_validation_1.ProductValidation.createEyeglassesSchema), smartphone_controller_1.createSmartphone);
router.get("/get-all-products", smartphone_controller_1.getSmartphone);
router.get("/get-single-product/:id", smartphone_controller_1.getSingleProduct);
router.delete("/delete-product/:id", smartphone_controller_1.deleteSmartphone);
router.delete("/delete-products", smartphone_controller_1.deleteManyProduct);
router.put("/update-product/:id", smartphone_controller_1.patchSmartphone);
exports.smartphoneRouter = router;
