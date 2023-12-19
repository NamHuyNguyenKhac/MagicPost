import pool from "../config/db";


const getAllUsers = (req, res) => {
    pool.query(
        "SELECT * FROM customer_account",
        (err, results, fields) => {
            if (err) {
                return res.status(503).json({
                    status: "error",
                    message: "Service error. Please try again later",
                });
            }
            let data = results;
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