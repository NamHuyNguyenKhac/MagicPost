import pool from "../config/db";
import authService from "../services/authService";

class tpLeaderController {
    getAllEmployeeInThisTP = async (req, res) => {
        try {
            const id = req.params.id

            pool.query(
                `SELECT u.userId, users.fullName, users.sex, users.email, users.phoneNumber, users.dob, t.name FROM user_employee u
                LEFT JOIN users ON users.id = u.userId
                JOIN transaction_points t ON u.type = 2 AND t.id = u.siteId
                WHERE t.id = ?`, [id],
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
        } catch (error) {
            console.error(error);
            res.status(503).json({
                status: "error",
                message: "Service error. Please try again later",
            });
        }
    }

    createNewEmployee = async (req, res) => {
        try {
            const id = req.params.id;
            const fullname = req.params.fullname;
            const phoneNumber = req.params.phoneNumber;
            const email = req.params.email;
            const sex = req.params.sex;
            const username = req.params.username;
            const password = authService.hashPassword('123456');

            const result = await pool.execute(`INSERT INTO users (fullname, phoneNumber, email, sex) VALUES (?, ?, ?, ?)`, [fullname, phoneNumber, email, sex]);

            const result2 = await pool.execute(`INSERT INTO user_accounts (userId, username, password, roleId) VALUES ((SELECT MAX(id) FROM users), ?, ?, 5)`,
                [username, password]);

            const result3 = await pool.execute(`INSERT INTO user_employee (userId, type, siteId) VALUES ((SELECT MAX(id) FROM users), 2, ?)`,
                [id]);


            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "New employee inserted successfully",
                data: [result, result2, result3],
            });
        } catch (error) {
            console.error(error);
            res.status(503).json({
                status: "error",
                message: "Service error. Please try again later",
            });
        }
    }
}

module.exports = new tpLeaderController();