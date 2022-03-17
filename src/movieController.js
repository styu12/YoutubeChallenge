import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
  addMovie,
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("home", { pageTitle: "Movies!", movies });
};

export const movieDetail = async (req, res) => {
  const { id } = req.params;
  const movie = await getMovieById(id);
  return res.render("detail", {
    pageTitle: "Detail",
    movie,
  });
};

export const filterMovie = (req, res) => {
  const { year, rating } = req.query;
  let movies = [];
  let pageTitle = "";
  if (year !== "") {
    movies = getMovieByMinimumYear(year);
    pageTitle = `Searching by year: ${year}`;
  } else if (rating !== "") {
    movies = getMovieByMinimumRating(rating);
    pageTitle = `Searching by rating: ${rating}`;
  } else {
    movies = getMovies();
    pageTitle = "Movies!";
  }
  return res.render("filter", { pageTitle, movies });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Movie" });
};

export const postUpload = (req, res) => {
  const { title, synopsis, genre } = req.body;
  const genres = genre.split(",");
  console.log(title, synopsis, genres);
  const data = { title, synopsis, genres };
  console.log(data);
  addMovie(data);
  return res.redirect("/");
};
