import pool from "../config/db";

class adminController {
    getGatheringPoints = async (req, res) => {
        try {
            pool.query(
                "SELECT * FROM gathering_points",
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
                "SELECT transaction_points.id, transaction_points.name, transaction_points.address, gathering_points.id as gatheringPointId, gathering_points.name as gatheringPointName FROM transaction_points JOIN gathering_points ON transaction_points.gatheringPointId = gathering_points.id",
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

    getAllUsers = async (req, res) => {
        try {
            pool.query(
                "SELECT id, fullName, dob, phoneNumber, email, username, roles.name as role FROM users JOIN roles USING (id)",
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

    // insertUser = async (req, res) => {
    //     try {
    //         const fullname = req.params.fullname;
    //         const sex = req.params.sex;
    //         const email = req.params.email;
    //         const username = req.params.username;
    //         const password = req.params.password;
    //         const phoneNumber = req.params.phoneNumber
    //         const roleId = req.params.roleId;
    //         const dob = req.params.dob;

    //         // Example asynchronous operation:
    //         const result = await pool.execute("INSERT INTO users (fullname, sex, email, username, password, phoneNumber, roleId, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [fullname, sex, email, username, password, phoneNumber, roleId, dob]);

    //         // Handle the result and send a response
    //         res.status(200).json({
    //             status: "success",
    //             message: "User inserted successfully",
    //             data: result,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(503).json({
    //             status: "error",
    //             message: "Service error. Please try again later",
    //         });
    //     }
    // };

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
}

module.exports = new adminController();