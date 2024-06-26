"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandle_1 = require("./app/middleware/globalErrorHandle");
const notFound_1 = require("./app/middleware/notFound");
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: ["https://smartphone-inventory-fronted-6.vercel.app"],
    credentials: true,
}));
app.use("/", routes_1.router);
app.get("/", (req, res) => {
    res.send("Assignment-6");
});
app.use(globalErrorHandle_1.globalErrorHandle);
app.use(notFound_1.notFound);
exports.default = app;
