import pool from "../config/db";


const getGatheringPoints = async (req, res) => {
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

const insertGatheringPoints = async (req, res) => {
    try {
        const name = req.params.name;
        const address = req.params.address;

        // Asynchronous operations here (e.g., interacting with a database)

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

const deleteGatheringPoints = async (req, res) => {
    try {
        const id = req.params.id;

        // Asynchronous operations here (e.g., interacting with a database)

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

const getTransactionPoints = async (req, res) => {
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

const insertTransactionPoints = async (req, res) => {
    try {
        const name = req.params.name;
        const address = req.params.address;
        const gatheringPointId = req.params.gatheringPointId

        // Asynchronous operations here (e.g., interacting with a database)

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

const deleteTransactionPoints = async (req, res) => {
    try {
        const id = req.params.id;

        // Asynchronous operations here (e.g., interacting with a database)

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

const getAllUsers = async (req, res) => {
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

export default {
    getGatheringPoints,
    insertGatheringPoints,
    deleteGatheringPoints,
    getTransactionPoints,
    insertTransactionPoints,
    deleteTransactionPoints,
    getAllUsers
}