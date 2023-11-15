import pool from "../config/db";


const getAllUsers = (req, res) => {
    pool.query(
        "SELECT * FROM users",
        (err, results, fields) => {
            let data = results[0];
            return res.status(200).json({
                status: "success",
                data: data,
            });
        }
    )
}


export default {
    getAllUsers
}