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
router.get("/deleteUser/:id", adminController.deleteUser)
router.get("/getAllPackageInfo", adminController.getAllPackageInfo)

module.exports = router;
