const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

//"http://localhost:8080/admin/..."
router.get("/getGatheringPoints", adminController.getGatheringPoints)
router.get("/insertGatheringPoints/:name/:address", adminController.insertGatheringPoints)
router.get("/deleteGatheringPoints/:id", adminController.deleteGatheringPoints)
router.get("/getTransactionPoints", adminController.getTransactionPoints)
router.get("/insertTransactionPoints/:name/:address/:gatheringPointId", adminController.insertTransactionPoints)
router.get("/deleteTransactionPoints/:id", adminController.deleteTransactionPoints)
router.get("/getAllUsers", adminController.getAllUsers)
//router.get("/insertUser/:fullname/:sex/:email/:username/:password/:phoneNumber/:roleId/:dob", adminController.getAllUsers)
router.get("/deleteUser/:id", adminController.getAllUsers)

module.exports = router; 
