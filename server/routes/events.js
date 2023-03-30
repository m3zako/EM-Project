import Express from "express";
import { getEvents, createEvent, deleteEvent } from "../controllers/EventController.js";

const router = Express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);


export default router;