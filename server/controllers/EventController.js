import { db } from "../db.js";
import jwt from "jsonwebtoken";
// import moment from "moment";

export const getEvents = (req, res) => {
    const userId = req.query.userId;
    const visibilityLevel = req.query.visibilityLevel;

    // TODO: pass in the userId and post visibility 
    // if vis = public, show all the public events
    // if vis = private, query the user's university and show private posts from that university
    // if vis = rso, query is_in_rso with userId and show all of those rso events.

    let q;
    if(visibilityLevel == 2 || visibilityLevel == 'rso')
    {
        // get rso events
    }
    else if(visibilityLevel == 1 || visibilityLevel == 'private')
    {
        // get private events
    }
    else
    {
        // get public events
        q = "";
    }
    
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    console.log(userId);

    const q = "";
    //   userId !== "undefined"
    //     ? `SELECT e.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
    //     : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
    // LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
    // ORDER BY p.createdAt DESC`;

    const values = null;
    //   userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];

    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
}


// ALL THIS IS FROM LAMA DEV, MAKE SURE TO CHANGE IT

// export const getPosts = (req, res) => {
//   const userId = req.query.userId;
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     console.log(userId);

//     const q =
//       userId !== "undefined"
//         ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
//         : `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
//     LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId= ? OR p.userId =?
//     ORDER BY p.createdAt DESC`;

//     const values =
//       userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];

//     db.query(q, values, (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json(data);
//     });
//   });
// };

// export const addPost = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q =
//       "INSERT INTO posts(`desc`, `img`, `createdAt`, `userId`) VALUES (?)";
//     const values = [
//       req.body.desc,
//       req.body.img,
//       moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
//       userInfo.id,
//     ];

//     db.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("Post has been created.");
//     });
//   });
// };
// export const deletePost = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q =
//       "DELETE FROM posts WHERE `id`=? AND `userId` = ?";

//     db.query(q, [req.params.id, userInfo.id], (err, data) => {
//       if (err) return res.status(500).json(err);
//       if(data.affectedRows>0) return res.status(200).json("Post has been deleted.");
//       return res.status(403).json("You can delete only your post")
//     });
//   });
// };