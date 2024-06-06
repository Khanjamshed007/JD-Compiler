import { login, logout, signup } from "../controllers/userController";

const express = require("express");
export const UserRoutes = express.Router();

UserRoutes.post("/signup", signup);
UserRoutes.post("/login", login);
UserRoutes.post("/logout", logout);
