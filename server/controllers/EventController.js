import { db } from "../db.js";
import jwt from "jsonwebtoken";
// import moment from "moment";


/* INCOMING: userId, visibilityLevel.
// OUTGOING: List of appropriate events to display
*/ 
export const getEvents = (req, res) => {
    const userId = req.query.userId;
    const visibilityLevel = req.query.visibilityLevel;
  
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        let query;
        let values;

        if (visibilityLevel == 2 || visibilityLevel == "rso") {
        // get a list of the RSOs the user is in
        const rsoQuery = "SELECT rso_id FROM is_in_rso WHERE user_id = ?";
        db.query(rsoQuery, [userId], (err, rsoRows) => {
            if (err) return res.status(500).json(err);

            // get user's list of RSOs
            const rsoIds = rsoRows.map(row => row.rso_id);

            // get RSO events
            query = "SELECT * FROM events WHERE visibility = 2 AND rso_id IN (?) ORDER BY time ASC";
            values = [rsoIds];

            db.query(query, values, (err, data) => {
                if (err) return res.status(500).json(err);
                return res.status(200).json(data);
            });
        });
        } else if (visibilityLevel == 1 || visibilityLevel == "private") {
            // get private events
            query = `
                SELECT e.*
                FROM events AS e
                JOIN users AS u ON e.university_id = u.university_id
                WHERE e.visibility = 1 AND u.user_id = ?
                ORDER BY e.time ASC`;
            values = [userId];

            db.query(query, values, (err, data) => {
                if (err) return res.status(500).json(err);
                return res.status(200).json(data);
            });
        } else {
            // get public events
            query = "SELECT * FROM events WHERE visibility = 0 ORDER BY time ASC";

            db.query(query, [], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.status(200).json(data);
            });
        }
    });
};




// INCOMING: [`name`, `visibility`, `category`, `description`, `time`, `contact_phone`, `contact_email`, `rso_id`, `university_id`, `location_id`];
export const createEvent = (req, res) =>  {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in.");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q = "INSERT INTO posts(`name`, `visibility`, `category`, `description`, `time`, `contact_phone`, `contact_email`, `rso_id`, `university_id`, `location_id`) VALUES (?)";

        // TODO: Probably keep the user's RSOs on the front end in some kind of array or id's. pass the proper id for rso_id.
        const values = [
            req.body.name,
            req.body.visibility,
            req.body.category,
            req.body.description,
            req.body.time,
            req.body.contact_phone,
            req.body.contact_email,
            req.body.rso_id,
            req.body.university_id,
            req.body.location_id,
        ];

        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });
};

export const deleteEvent = (req, res) =>  {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q = "DELETE FROM events WHERE `event_id`=?";

        db.query(q, [req.params.event_id], (err, data) => {
            if (err) return res.status(500).json(err);
            if(data.affectedRows>0) return res.status(200).json("Post has been deleted.");
            return res.status(403).json("Deletion failed.")
        });
    });
};