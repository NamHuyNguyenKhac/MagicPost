import express from "express";
import homeController from "../controller/homeController";
import usersController from "../controller/usersController";
const router = express.Router()

const initWebRoutes = (app) => {
    // routes 
    router.get('/', homeController.handleHelloWorld);
    router.get("/getAllUsers", usersController.getAllUsers);
    return app.use('/', router);
}

export default initWebRoutes;