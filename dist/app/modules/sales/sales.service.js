"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalesToDb = exports.createSalesToDb = void 0;
const AppError_1 = __importDefault(require("../../error/AppError"));
const smartphone_model_1 = require("../smartphone/smartphone.model");
const sales_model_1 = require("./sales.model");
const http_status_codes_1 = __importDefault(require("http-status"));
const createSalesToDb = (payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield smartphone_model_1.Smartphone.findOneAndUpdate(
      { _id: payload.productId, quantity: { $gte: payload.quantity } },
      {
        $inc: { quantity: -payload.quantity },
      },
      { new: true }
    );
    if (result) {
      if (result.quantity === 0) {
        yield smartphone_model_1.Smartphone.deleteOne({
          _id: payload.productId,
        });
      }
      const salesResult = yield sales_model_1.Sales.create(payload);
      return salesResult;
    } else {
      throw new AppError_1.default(
        http_status_codes_1.default.BAD_REQUEST,
        "Insufficient quantity or smartphone not found"
      );
    }
  });
exports.createSalesToDb = createSalesToDb;
const getSalesToDb = (query) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { filterBy } = query;
    console.log(filterBy);
    let dateFilter = {};
    if (filterBy) {
      const currentDate = new Date();
      switch (filterBy) {
        case "daily":
          dateFilter = {
            createdAt: {
              $gte: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate()
              ),
              $lt: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + 1
              ),
            },
          };
          break;
        case "weekly":
          dateFilter = {
            createdAt: {
              $gte: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() - currentDate.getDay()
              ),
              $lt: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + (6 - currentDate.getDay()) + 1
              ),
            },
          };
          break;
        case "monthly":
          dateFilter = {
            createdAt: {
              $gte: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                1
              ),
              $lt: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1
              ),
            },
          };
          break;
        case "yearly":
          dateFilter = {
            createdAt: {
              $gte: new Date(currentDate.getFullYear(), 0, 1),
              $lt: new Date(currentDate.getFullYear() + 1, 0, 1),
            },
          };
          break;
        default:
          // Handle invalid filterBy values or no filterBy parameter
          break;
      }
    }
    const result = yield sales_model_1.Sales.find(dateFilter).populate(
      "productId"
    );
    return result;
  });
exports.getSalesToDb = getSalesToDb;
