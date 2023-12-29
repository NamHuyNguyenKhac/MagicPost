import pool from "../config/db";

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
}

module.exports = new tpLeaderController();