import express from "express";
import {
  home,
  movieDetail,
  filterMovie,
  getUpload,
  postUpload,
} from "./movieController";

const movieRouter = express.Router();
movieRouter.get("/", home);
movieRouter.get("/filter", filterMovie);
movieRouter.route("/add").get(getUpload).post(postUpload);
movieRouter.get("/:id", movieDetail);

export default movieRouter;
