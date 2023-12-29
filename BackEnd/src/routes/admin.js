const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

//"http://localhost:8080/admin/..."

//Quản lý điểm tập kết
router.get("/getGatheringPoints", adminController.getGatheringPoints)
router.get("/insertGatheringPoints/:name/:address", adminController.insertGatheringPoints)
router.get("/deleteGatheringPoints/:id", adminController.deleteGatheringPoints)
//Quản lý điểm giao dịch
router.get("/getTransactionPoints", adminController.getTransactionPoints)
router.get("/insertTransactionPoints/:name/:address/:gatheringPointId", adminController.insertTransactionPoints)
router.get("/deleteTransactionPoints/:id", adminController.deleteTransactionPoints)
//Quản lý đơn hàng
router.get("/getAllPackageInfo", adminController.getAllPackageInfo)
router.get("/getAllPackage", adminController.getAllPackage)
router.get("/getAllLeader", adminController.getAllLeader)
//Quản lý nhân viên
router.get("/createNewLeader/:fullname/:phoneNumber/:email/:sex/:username/:roleId", adminController.createNewLeader);
router.get("/updateLeader/:id/:fullname/:phoneNumber/:email/:sex/:username/:roleId", adminController.updateLeader);
router.get("/getAllEmployee", adminController.getAllEmployee);
router.get("/deleteUser/:id", adminController.deleteUser);


module.exports = router;
