"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const http_status_codes_1 = __importDefault(require("http-status"));
const notFound = () => {
  (req, res, next) => {
    res.status(http_status_codes_1.default.NOT_FOUND).json({
      success: false,
      statusCode: 404,
      message: "api not found",
      data: [],
    });
  };
};
exports.notFound = notFound;
