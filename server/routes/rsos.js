import Express from "express";
import { getUsersRsos, getAdminsRsos, joinRso, createRso, updateRso } from "../controllers/RsoController.js";

const router = Express.Router();

// INCOMING: user_id;
router.get("/getUsersRsos", getUsersRsos);

// INCOMING: user_id;
router.get("/getAdminsRsos", getAdminsRsos);

// INCOMING: rso_id
router.post("/join", joinRso)

// INCOMING: name, description, university_id
router.post("/create", createRso)

// INCOMING: name, description, rso_id, user_id, NEED TO MAKE NULLABLE
router.put("/update", updateRso)


export default router;