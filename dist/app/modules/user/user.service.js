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
exports.createLogin = exports.createRegister = void 0;
const http_status_codes_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("./user.model");
const AppError_1 = __importDefault(require("../../error/AppError"));
const user_utils_1 = require("./user.utils");
const createRegister = (payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.User.isUserExistsByEmail(payload.email)) {
      throw new AppError_1.default(
        http_status_codes_1.default.BAD_REQUEST,
        "This email already used"
      );
    }
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!payload.email.match(regex)) {
      throw new AppError_1.default(
        http_status_codes_1.default.BAD_REQUEST,
        "Please provide valid email"
      );
    }
    payload.role = "user";
    const result = yield user_model_1.User.create(payload);
    return result;
  });
exports.createRegister = createRegister;
const createLogin = (payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExistsByEmail(payload.email);
    if (!user) {
      throw new AppError_1.default(
        http_status_codes_1.default.NOT_FOUND,
        "This user is not found !"
      );
    }
    if (
      !(yield user_model_1.User.isPasswordMatched(
        payload === null || payload === void 0 ? void 0 : payload.password,
        user === null || user === void 0 ? void 0 : user.password
      ))
    )
      throw new AppError_1.default(
        http_status_codes_1.default.UNAUTHORIZED,
        "Password do not matched"
      );
    const jwtPayload = {
      name: user === null || user === void 0 ? void 0 : user.name,
      email: user === null || user === void 0 ? void 0 : user.email,
      role: user === null || user === void 0 ? void 0 : user.role,
    };
    const accessToken = (0, user_utils_1.createToken)(
      jwtPayload,
      config_1.default.secret,
      config_1.default.jwtexpire
    );
    // const refreshToken = createToken(
    //     jwtPayload,
    //     config.refreshsecret as string,
    //     config.jwtexpirerefresh as string
    //   );
    return accessToken;
  });
exports.createLogin = createLogin;
// export const refreshTokenIntoDb = async (accessToken: string) => {
//     const decoded = verifyToken(accessToken,config.refreshsecret as string)
//     const { email } = decoded
//     const user = await User.isUserExistsByEmail(email)
//     if (!user) {
//         throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
//       }
//     const jwtPayload = {
//         name: user?.name,
//         email: user?.email,
//         role: user?.role
//     }
//     const token = createToken(
//         jwtPayload,
//         config.refreshsecret as string,
//         config.jwtexpirerefresh as string
//       );
//     return {
//         user,
//         token
//     }
// }
