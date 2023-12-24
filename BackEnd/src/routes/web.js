import express from "express";
import homeController from "../controller/homeController";
import usersController from "../controller/usersController";
import adminController from "../controller/adminController";
const router = express.Router()

const initWebRoutes = (app) => {
    // routes 
    router.get('/', homeController.handleHelloWorld);
    router.get("/getAllUsers", usersController.getAllUsers);
    router.get("/admin/getGatheringPoints", adminController.getGatheringPoints)
    router.get("/admin/insertGatheringPoints/:name/:address", adminController.insertGatheringPoints)
    return app.use('/', router);
}

export default initWebRoutes;