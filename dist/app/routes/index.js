"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("../modules/user/user.router");
const sales_router_1 = require("../modules/sales/sales.router");
const smartphone_router_1 = require("../modules/smartphone/smartphone.router");
exports.router = (0, express_1.Router)();
const allRouters = [
    { path: "/users", route: user_router_1.UserRouter },
    { path: "/smartphone", route: smartphone_router_1.smartphoneRouter },
    { path: "/sales", route: sales_router_1.salesRouter },
];
allRouters.forEach((route) => exports.router.use(route.path, route.route));
