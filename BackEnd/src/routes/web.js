import express from "express";
import homeController from "../controller/homeController";
import usersController from "../controller/usersController";
const userRouter = require("./users")
const adminRouter = require("./admin");
const tpLeaderRouter = require("./tpLeader")
const gpLeaderRouter = require("./gpLeader")
const router = express.Router()

const initWebRoutes = (app) => {
    // routes 
    app.use('/users', userRouter);
    app.use('/tpLeaderRouter', tpLeaderRouter);
    app.use('/gpLeaderRouter', gpLeaderRouter);
    app.use('/admin', adminRouter);
    return app.use('/', router);
}

export default initWebRoutes;