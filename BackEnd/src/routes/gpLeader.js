const express = require("express");
const router = express.Router();
const gpLeader = require("../controller/gpLeaderController");

//"http://localhost:8080/gpLeader/..."
router.get("/getAllEmployeeInThisGP/:id", gpLeader.getAllEmployeeInThisGP);

module.exports = router;