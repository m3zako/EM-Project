import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const test = (request, response) => {
    response.send("getUniversity()")
}