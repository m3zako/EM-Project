import Express from "express";
import { test } from "../controllers/EventController.js";

const router = Express.Router();

router.get("/test", test)

export default router;