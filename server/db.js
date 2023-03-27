import mysql from "mysql"

// export const db = mysql.createConnection({
//     host:"localhost",
//     user:"drake",
//     password:"password",
//     database:"event_manager"
// });

export const db = mysql.createPool({
    connectionLimit: 10,
    host:"localhost",
    user:"drake",
    password:"password",
    database:"event_manager"
});