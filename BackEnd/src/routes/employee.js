const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");

//"http://localhost:8080/employee/..."
router.get('/createNewPackage/:fare/:type/:weight/:sNo/:rNo/:sAddress/:rAddress/:sName/:rName/:cDate/:lUpdate', employeeController.createNewPackage)

module.exports = router;