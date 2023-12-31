import pool from "../config/db";
import authService from "../services/authService";

class adminController {
    getGatheringPoints = async (req, res) => {
        try {
            pool.query(
                `SELECT g.id, g.name, g.address, users.fullName as employeeId FROM gathering_points g
                LEFT JOIN users ON g.employeeId = users.id`,
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

    insertGatheringPoints = async (req, res) => {
        try {
            const name = req.params.name;
            const address = req.params.address;

            // Example asynchronous operation:
            const result = await pool.execute("INSERT INTO gathering_points (name, address) VALUES (?, ?)", [name, address]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "Gathering point inserted successfully",
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

    deleteGatheringPoints = async (req, res) => {
        try {
            const id = req.params.id;

            // Example asynchronous operation:
            const result = await pool.execute("DELETE FROM gathering_points WHERE id = ?", [id]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "Gathering point deleted successfully",
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

    getTransactionPoints = async (req, res) => {
        try {
            pool.query(
                `SELECT t.id, t.name, t.address, g.name as gatheringPointName, users.fullName as employeeId
                FROM transaction_points t
                LEFT JOIN gathering_points g ON t.gatheringPointId = g.id
                LEFT JOIN users ON t.employeeId = users.id`,
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

    insertTransactionPoints = async (req, res) => {
        try {
            const name = req.params.name;
            const address = req.params.address;
            const gatheringPointId = req.params.gatheringPointId

            // Example asynchronous operation:
            const result = await pool.execute("INSERT INTO transaction_points (name, address, gatheringPointId) VALUES (?, ?, ?)", [name, address, gatheringPointId]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "Transaction point inserted successfully",
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

    deleteTransactionPoints = async (req, res) => {
        try {
            const id = req.params.id;

            // Example asynchronous operation:
            const result = await pool.execute("DELETE FROM transaction_points WHERE id = ?", [id]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "Transaction point deleted successfully",
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

    deleteUser = async (req, res) => {
        try {
            const id = req.params.id;

            // Example asynchronous operation:
            const result = await pool.execute("DELETE FROM transaction_points WHERE id = ?", [id]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "User deleted successfully",
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


    getAllPackageInfo = async (req, res) => {
        try {
            pool.query(
                "SELECT * FROM package_info JOIN package_status USING (id)",
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

    getAllLeader = async (req, res) => {
        try {
            pool.query(
                `SELECT users.id, users.fullName, users.sex, users.phoneNumber, users.email, users.dob, g.name as workName, user_accounts.roleId, user_accounts.username, g.id as workId 
                FROM users
                LEFT JOIN gathering_points g ON g.employeeId = users.id
                JOIN user_accounts ON user_accounts.userId = users.id
                WHERE user_accounts.roleId = 2
                UNION 
                SELECT users.id, users.fullName, users.sex, users.phoneNumber, users.email, users.dob, t.name as workName, user_accounts.roleId, user_accounts.username, t.id as workId 
                FROM users
                LEFT JOIN transaction_points t  ON t.employeeId = users.id
                JOIN user_accounts ON user_accounts.userId = users.id
                WHERE user_accounts.roleId = 4`,
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

    createNewLeader = async (req, res) => {
        try {
            if (req.params) {
                const fullname = req.params.fullname;
                const phoneNumber = req.params.phoneNumber;
                const email = req.params.email;
                const sex = req.params.sex;
                const username = req.params.username;
                const password = authService.hashPassword('123456');
                const roleId = req.params.roleId;


                // Example asynchronous operation:
                const result = await pool.execute(`INSERT INTO users (fullname, phoneNumber, email, sex) VALUES (?, ?, ?, ?)`, [fullname, phoneNumber, email, sex]);

                const result2 = await pool.execute(`INSERT INTO user_accounts (userId, username, password, roleId) VALUES ((SELECT MAX(id) FROM users), ?, ?, ?)`,
                    [username, password, roleId]);

                // Handle the result and send a response
                res.status(200).json({
                    status: "success",
                    message: "New leader inserted successfully",
                    data: [result, result2],
                });
            }
        } catch (error) {
            console.error(error);
            res.status(503).json({
                status: "error",
                message: "Service error. Please try again later",
            });
        }
    }

    updateLeader = async (req, res) => {
        try {
            const id = req.params.id
            const fullname = req.params.fullname;
            const phoneNumber = req.params.phoneNumber;
            const email = req.params.email;
            const sex = req.params.sex;
            const workId = req.params.workId;
            const roleId = req.params.roleId;

            const result = await pool.execute(`UPDATE users SET fullname = ?, phoneNumber = ?, email = ?, sex = ? WHERE id = ?`, [fullname, phoneNumber, email, sex, id]);


            // if (roleId == 2) {
            //     const result3 = await pool.execute(`UPDATE gathering_points SET employeeId = ? WHERE employeeId = ?`, [null, id]);
            //     const result4 = await pool.execute(`UPDATE gathering_points SET employeeId = ? WHERE id = ?`, [id, workId]);
            // }
            // if (roleId == 4) {
            //     const result3 = await pool.execute(`UPDATE transaction_points SET employeeId = ? WHERE employeeId = ?`, [null, id]);
            //     const result4 = await pool.execute(`UPDATE transaction_points SET employeeId = ? WHERE id = ?`, [id, workId]);
            // }

            res.status(200).json({
                status: "success",
                message: "Leader updated successfully",
                data: result,
            });
        }
        catch (error) {
            console.error(error);
            res.status(503).json({
                status: "error",
                message: "Service error. Please try again later",
            });
        }
    }

    getAllPackage = async (req, res) => {
        try {
            pool.query(
                "SELECT * FROM package_info JOIN package_status USING (id)",
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

    getAllEmployee = async (req, res) => {
        try {
            pool.query(
                `SELECT u.userId, users.fullName, users.sex, users.email, users.phoneNumber, users.dob, g.name FROM user_employee u
                LEFT JOIN users ON users.id = u.userId
                JOIN gathering_points g ON u.type = 1 AND g.id = u.siteId
                UNION
                SELECT u.userId, users.fullName, users.sex, users.email, users.phoneNumber, users.dob, t.name FROM user_employee u
                LEFT JOIN users ON users.id = u.userId
                JOIN transaction_points t ON u.type = 2 AND t.id = u.siteId
                `,
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

module.exports = new adminController();