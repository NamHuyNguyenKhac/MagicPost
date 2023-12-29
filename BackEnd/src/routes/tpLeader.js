const express = require("express");
const router = express.Router();
const tpLeader = require("../controller/tpLeaderController");

//"http://localhost:8080/tpLeader/..."
router.get("/getAllEmployeeInThisTP/:id", tpLeader.getAllEmployeeInThisTP);

module.exports = router;