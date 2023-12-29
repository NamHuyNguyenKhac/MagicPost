const express = require("express");
const router = express.Router();
const gpLeader = require("../controller/gpLeaderController");

//"http://localhost:8080/gpLeader/..."
router.get("/getAllEmployeeInThisGP/:id", gpLeader.getAllEmployeeInThisGP);
router.get("/createNewEmployee/:id/:fullname/:phoneNumber/:email/:sex/:username", gpLeader.createNewEmployee);

module.exports = router;