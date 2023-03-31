import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const addLocation = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in.");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const values = [req.body.name, req.body.latitude, req.body.longitude];
        const insertQuery = "INSERT INTO locations (name, latitude, longitude) VALUES (?, ?, ?)";
        
        db.query(insertQuery, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Location added successfully"); 
        });
    });
}

export const getLocation = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const selectQuery = "SELECT * FROM locations WHERE location_id = ?";

        db.query(selectQuery, [req.params.locationId], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.length === 0) return res.status(404).json("Location not found");
            return res.status(200).json(data[0]);
        });
    });
};

// Get every location with a user_id == current users user_id
export const getAllLocations = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        // Assuming there's a relationship between user_id and locations in your database schema.
        const selectQuery = "SELECT * FROM locations WHERE user_id = ?";
        
        db.query(selectQuery, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });
  };

export const delLocation = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const locationId = req.params.locationId;
        const deleteQuery = "DELETE FROM locations WHERE location_id = ?";
        // const deleteQuery = "DELETE FROM locations WHERE location_id = ? AND user_id = ?"; if we wanna make sure that only the guy who created it can delete it.

        db.query(deleteQuery, [locationId], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.affectedRows === 0) return res.status(404).json("Location not found");
            return res.status(200).json("Location deleted successfully");
        });
    });
};