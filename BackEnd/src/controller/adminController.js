import pool from "../config/db";

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
                `SELECT users.fullName, users.sex, users.phoneNumber, users.email, users.dob, g.name as workName FROM gathering_points g 
                LEFT JOIN users ON g.employeeId = users.id
                UNION 
                SELECT users.fullName, users.sex, users.phoneNumber, users.email, users.dob, t.name as workName FROM transaction_points t 
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
}

module.exports = new adminController();