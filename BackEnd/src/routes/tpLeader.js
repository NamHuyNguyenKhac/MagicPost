const express = require("express");
const router = express.Router();
const tpLeader = require("../controller/tpLeaderController");

//"http://localhost:8080/tpLeader/..."
//Quản lý nhân viên điểm giao dịch
router.get("/getAllEmployeeInThisTP/:id", tpLeader.getAllEmployeeInThisTP);
router.get("/createNewEmployee/:id/:fullname/:phoneNumber/:email/:sex/:username", tpLeader.createNewEmployee);

module.exports = router;