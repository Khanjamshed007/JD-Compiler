import express from "express";
import { codeSaved, loadCode } from "../controllers/CompilerController";

export const CompilerRouter = express.Router();

CompilerRouter.post("/save", codeSaved);
CompilerRouter.post("/load", loadCode);
