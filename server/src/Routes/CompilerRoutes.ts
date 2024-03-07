import express from "express";
import { codeSaved } from "../controllers/CompilerController";

export const CompilerRouter = express.Router();

CompilerRouter.post("/save",codeSaved)