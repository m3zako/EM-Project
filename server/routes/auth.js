import express from "express";
import { test, login, register, logout } from "../controllers/AuthController.js";

const router = express.Router();

router.get("/test", test);
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;