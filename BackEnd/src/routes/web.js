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
    router.get("/admin/deleteGatheringPoints/:id", adminController.deleteGatheringPoints)
    router.get("/admin/getTransactionPoints", adminController.getTransactionPoints)
    router.get("/admin/insertTransactionPoints/:name/:address/:gatheringPointId", adminController.insertTransactionPoints)
    router.get("/admin/deleteTransactionPoints/:id", adminController.deleteTransactionPoints)
    router.get("/admin/getAllUsers", adminController.getAllUsers)
    return app.use('/', router);
}

export default initWebRoutes;