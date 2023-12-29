import pool from "../config/db";
import authService from "../services/authService";

class employeeController {
    createNewPackage = async (req, res) => {
        try {
            const fare = req.params.fare;
            const type = req.params.type;
            const weight = req.params.weight;
            const senderNo = req.params.sNo;
            const receiverNo = req.params.rNo;
            const senderAddress = req.params.sAddress;
            const receiverAddress = req.params.rAddress;
            const senderName = req.params.sName;
            const receiverName = req.params.rName;
            const createDate = req.params.cDate;
            const lastUpdate = req.params.lUpdate;

            const result = await pool.execute(`INSERT INTO package_info (fare, type, weight, senderNumber, receiverNumber, senderName, receiverName, senderAddress, receiverAddress) VALUES (?, ?, ?, ?)`, [fare, type, weight, senderNo, receiverNo, senderName, receiverName, senderAddress, receiverAddress]);

            const result2 = await pool.execute(`INSERT INTO package_status (id, createDate, lastUpdate) VALUES ((SELECT MAX(id) FROM package_info), ?, ?)`,
                [createDate, lastUpdate]);

            // Handle the result and send a response
            res.status(200).json({
                status: "success",
                message: "Package inserted successfully",
                data: [result, result2],
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


module.exports = new employeeController();