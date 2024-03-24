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
exports.userLogin = exports.userRegister = void 0;
const http_status_codes_1 = __importDefault(require("http-status"));
const user_service_1 = require("./user.service");
const AsyncFun_1 = require("../../../utils/AsyncFun");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
exports.userRegister = (0, AsyncFun_1.AsyncFun)((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, user_service_1.createRegister)(req.body);
    (0, sendResponse_1.default)(res, {
      success: true,
      statusCode: http_status_codes_1.default.OK,
      message: "User created successfully",
      data: result,
    });
  })
);
exports.userLogin = (0, AsyncFun_1.AsyncFun)((req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, user_service_1.createLogin)(req.body);
    // res.cookie("refreshToken", refreshToken, {
    //   secure: false,
    //   httpOnly: true,
    // });
    (0, sendResponse_1.default)(res, {
      success: true,
      statusCode: http_status_codes_1.default.OK,
      message: "User Login successfully",
      data: {
        accessToken: result,
      },
    });
  })
);
// export const refreshToken = AsyncFun(async (req, res) => {
//   const { refreshToken } = req.cookies;
//   const result = await refreshTokenIntoDb(refreshToken);
//   sendResponse(res, {
//     success: true,
//     statusCode: http.OK,
//     message: "Access token is retrieved succesfully!",
//     data: result,
//   });
// });
