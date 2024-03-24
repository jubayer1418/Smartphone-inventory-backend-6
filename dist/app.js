"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./app/routes");
const notFound_1 = require("./app/middleware/notFound");
const globalErrorHandle_1 = require("./app/middleware/globalErrorHandle");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ["https://vite-project-gamma-rose.vercel.app"], credentials: true }));
app.use("/", routes_1.router);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(globalErrorHandle_1.globalErrorHandle);
app.use(notFound_1.notFound);
exports.default = app;
