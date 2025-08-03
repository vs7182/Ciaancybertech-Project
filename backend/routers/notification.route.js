import express from "express";
import { deleteNotification, getNotification } from "../controller/notification.controller.js";






const notificationRouter = express.Router();
notificationRouter.get("/",getNotification);
notificationRouter.delete("/",deleteNotification);
// router.delete("/",protectRoute,deleteNotification);

// notificationRouter.get("/",protectRoute,getNotification);
// notificationRouter.delete("/",protectRoute,deleteNotification);
// router.delete("/",protectRoute,deleteNotification);

export default notificationRouter;