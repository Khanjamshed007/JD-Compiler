"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompilerRouter = void 0;
const express_1 = __importDefault(require("express"));
const CompilerController_1 = require("../controllers/CompilerController");
exports.CompilerRouter = express_1.default.Router();
exports.CompilerRouter.post("/save", CompilerController_1.codeSaved);
