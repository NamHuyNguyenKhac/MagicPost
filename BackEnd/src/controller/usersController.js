import pool from "../config/db";
import bcrypt, { genSaltSync } from 'bcryptjs';

const salt = genSaltSync(10);

const getAllUsers = (req, res) => {
    pool.query(
        "SELECT * FROM user_accounts",
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

const insertUserAccount = async (req, res) => {
    try {
        const userId = req.params.userId;
        const username = req.params.username;
        const password = req.params.password;
        const roleId = req.params.roleId;

        let hashPassword = bcrypt.hashSync(password, salt);
        let check = bcrypt.compareSync(password, hashPassword);

        // Example asynchronous operation:
        const result = await pool.execute("INSERT INTO user_accounts (userId, username, password, roleId) VALUES (?, ?, ?, ?)", [userId, username, hashPassword, roleId]);

        // Handle the result and send a response
        res.status(200).json({
            status: "success",
            message: "User inserted successfully",
            data: result,
        });
    } catch (error) {
        console.error(error);
        res.status(503).json({
            status: "error",
            message: "Service error. Please try again later",
        });
    }
};

const checkUserAccount = async (req, res) => {
    try {
        const username = req.params.username;
        const password = req.params.password;
        let hashPassword = bcrypt.hashSync(password, salt);
        // Example asynchronous operation:
        pool.query("SELECT users.fullname, users.dob, users.sex, users.email, users.phoneNumber, user_accounts.roleId FROM user_accounts JOIN users ON user_accounts.userId = users.id where user_accounts.username = ? and user_accounts.password = ?", [username, hashPassword],
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
            });
    } catch (error) {
        console.error(error);
        res.status(503).json({
            status: "error",
            message: "Service error. Please try again later",
        });
    }
}


export default {
    getAllUsers,
    insertUserAccount,
    checkUserAccount
}