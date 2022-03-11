import express from "express";
import { deleteStory, edit, watch } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", watch);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", deleteStory);

export default storyRouter;
