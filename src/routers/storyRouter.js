import express from "express";
import {
  deleteStory,
  editStory,
  seeStory,
} from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", seeStory);
storyRouter.get("/:id(\\d+)/edit", editStory);
storyRouter.get("/:id(\\d+)/delete", deleteStory);

export default storyRouter;
