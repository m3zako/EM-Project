import { db } from "../db.js";
import bcrypt from "bcrypt";

export const test = (req, res) => {
    res.send("test");
}

export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ? OR name = ?";
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.status(500).json(err);
        let errorMsg = "";
        if (data.length) {
            for (const user of data) {
                if (user.email === req.body.email) errorMsg += "Email already in use. ";
                if (user.name === req.body.username) errorMsg += "Username already in use. ";
            }
            return res.status(409).json(errorMsg.trim());
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const insertQuery = "INSERT INTO users (name,email,password) VALUE (?, ?, ?)"
        db.query(insertQuery, [req.body.username, req.body.email, hash], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("User has been successfully created.")
        });
    });


}

export const login = (request, response) => {

}

export const logout = (request, response) => {

}