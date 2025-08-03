import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getMe, login, logout, signup } from "../controller/auth.controller.js";


const router = express.Router();

router.get("/me",protectRoute, getMe);

router.post("/signup",signup);

router.post("/login", login);

router.post("/logout", logout);



export default router;