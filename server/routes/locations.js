import Express from "express";
import { addLocation, delLocation, getLocation } from "../controllers/LocationController.js";

const router = Express.Router();

router.post("/addLocation", addLocation);
router.delete("/:id", delLocation);
router.get("/getLocation", getLocation);


export default router;