import express from "express";
import { allUser, profile, edit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", allUser);
userRouter.get("/:id(\\d+)", profile);
userRouter.get("/edit-profile", edit);

export default userRouter;
