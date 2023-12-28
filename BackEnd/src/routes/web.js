import express from "express";
import homeController from "../controller/homeController";
import usersController from "../controller/usersController";
const adminRouter = require("./admin");
const tpLeaderRouter = require("./tpLeader")
const gpLeaderRouter = require("./gpLeader")
const router = express.Router()

const initWebRoutes = (app) => {
    // routes 
    // router.get('/', homeController.handleHelloWorld);
    router.get("/checkUserAccount/:username/:password/", usersController.checkUserAccount);
    router.get("/insertUserAccount/:userId/:username/:password/:roleId", usersController.insertUserAccount);
    app.use('/tpLeaderRouter', tpLeaderRouter);
    app.use('/gpLeaderRouter', gpLeaderRouter);
    app.use('/admin', adminRouter);
    return app.use('/', router);
}

export default initWebRoutes;