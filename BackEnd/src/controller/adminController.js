import pool from "../config/db";


const getGatheringPoints = (req, res) => {
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

export default {
    getGatheringPoints,
    insertGatheringPoints,
    deleteGatheringPoints
}