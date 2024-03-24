"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    port: process.env.PORT,
    bcrypt: process.env.BCRYPT,
    database: process.env.DATABASE,
    secret: process.env.SECRET,
    jwtexpire: process.env.JWTEXPIRE,
    jwtexpirerefresh: process.env.JWTEXPIREREFRESH,
    refreshsecret: process.env.REFRESHSECRET,
    node: process.env.NODE_ENV
};
