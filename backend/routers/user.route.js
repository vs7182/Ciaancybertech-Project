import express from "express";
import { followUnfollowUser, getSuggestedUser, getUserProfile, updateUser } from "../controller/user.controller.js";

const userRouter = express.Router();



userRouter.get("/profile/:username", getUserProfile);
userRouter.get("/suggested",getSuggestedUser);
userRouter.post("/follow/:id",followUnfollowUser);
userRouter.post("/update",updateUser);

// userRouter.get("/profile/:username",protectRoute, getUserProfile);
// userRouter.get("/suggested",protectRoute,getSuggestedUser);
// userRouter.post("/follow/:id",protectRoute,followUnfollowUser);
// userRouter.post("/update",protectRoute,updateUser);

export default userRouter;