const express = require("express");
const router = express.Router();
const tpLeader = require("../controller/tpLeaderController");

//"http://localhost:8080/tpLeader/..."
router.get("/getAllEmployeeInThisTP/:id", tpLeader.getAllEmployeeInThisTP);
router.get("/createNewEmployee/:id/:fullname/:phoneNumber/:email/:sex/:username", tpLeader.createNewEmployee);

module.exports = router;