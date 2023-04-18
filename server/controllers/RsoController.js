import { db } from "../db.js";
import jwt from "jsonwebtoken";


// INCOMING: [user_id];
export const getUsersRsos = (req, res) => {

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in.");

  jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      
      // get a list of the RSOs the user is in
      const rsoQuery = "SELECT rso_id FROM is_in_rso WHERE user_id = ?";
      db.query(rsoQuery, [req.params.user_id], (err, rsoRows) => {
          if (err) return res.status(500).json(err);

          // get user's list of RSOs
          return rsoRows.map(row => row.rso_id);     
      });
  });
}

// INCOMING: [user_id];
export const getAdminsRsos = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in.");
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        if (req.query.user_id < 1) return res.status(401).json("You need to be an Admin to own RSOs.");
        
        // get a list of the RSOs the admin owns
        const rsoQuery = "SELECT * FROM rsos WHERE admin_id = ?";

        db.query(rsoQuery, [req.query.user_id], (err, rsoRows) => {
            if (err) return res.status(500).json(err);
            const rsoIds = rsoRows.map(row => row.rso_id); 
            return res.json(rsoRows);
        });
    });
}

export const joinRso = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in.");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const joinRsoQuery = "INSERT INTO is_in_rso (user_id, rso_id) VALUES (?, ?)";
        db.query(joinRsoQuery, [userInfo.user_id, req.body.rso_id], (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Successfully joined the RSO.");
        });
    });
};

export const createRso = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in.");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const createRsoQuery = "INSERT INTO rsos (name, description, admin_id, university_id) VALUES (?, ?, ?, ?, ?)";
        db.query(createRsoQuery, [req.body.name, req.body.description, userInfo.user_id, req.body.university_id], (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Successfully created the RSO.");
        });
    });
};

export const updateRso = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in.");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const updateRsoQuery = "UPDATE rsos SET name = ?, description = ?, WHERE rso_id = ? AND admin_id = ?";
        // FIX THIS TO BE NULLABLE
        db.query(updateRsoQuery, [req.body.name, req.body.description, req.body.rso_id, userInfo.user_id], (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.affectedRows === 0) return res.status(400).json("You do not have permission to update this RSO.");
            return res.status(200).json("Successfully updated the RSO.");
        });
    });
};