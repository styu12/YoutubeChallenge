import express from "express";
import { seeUsers, seeUser, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", seeUsers);
userRouter.get("/:id(\\d+)", seeUser);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
