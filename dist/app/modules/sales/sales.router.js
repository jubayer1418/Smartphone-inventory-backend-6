"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesRouter = void 0;
const express_1 = require("express");
const sales_controller_1 = require("./sales.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const sales_validation_1 = require("./sales.validation");
const router = (0, express_1.Router)();
router.post("/create-sales", (0, validateRequest_1.default)(sales_validation_1.SalesZodValidations.createSalesValidationSchema), sales_controller_1.createSales);
router.get("/get-all-sales", sales_controller_1.getSales);
exports.salesRouter = router;
