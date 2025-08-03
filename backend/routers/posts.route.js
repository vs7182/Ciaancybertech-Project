import express  from "express";
import { commentOnPost, createPost, deletePost, getAllPosts, getFollowingPosts, getLikedPosts, getUserPosts, likeUnlikePost } from "../controller/post.controller.js";


const postRouter = express.Router();


// postRouter.get("/all",protectRoute,getAllPosts);
//postRouter.get("/following",protectRoute,getFollowingPosts);
// postRouter.get("/likes/:id",protectRoute,getLikedPosts);
// postRouter.get("/user/:username",protectRoute,getUserPosts);
// postRouter.post("/create",protectRoute,createPost);
// postRouter.post("/like/:id",protectRoute,likeUnlikePost);
// postRouter.post("/comment/:id",protectRoute,commentOnPost);
// postRouter.delete("/:id",protectRoute,deletePost);


postRouter.get("/all",getAllPosts);
postRouter.get("/following",getFollowingPosts);
postRouter.get("/likes/:id",getLikedPosts);
postRouter.get("/user/:username",getUserPosts);
postRouter.post("/create",createPost);
postRouter.post("/like/:id",likeUnlikePost);
postRouter.post("/comment/:id",commentOnPost);
postRouter.delete("/:id",deletePost);


export default postRouter;