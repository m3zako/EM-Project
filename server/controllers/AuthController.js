import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
        if(err) return res.status(500).json(err);
        if (data.length === 0) return res.status(400).json("Email not found.");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if(!checkPassword) return res.status(400).json("Incorrect password.");

        const token = jwt.sign({id:data[0].user_id}, "secretkey")   // replace secret key with an env file
        const {password, ...others} = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);    // send all but the password
    });
}

export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite:"none",
    }).status(200).json("Successfully Logged out.");
}