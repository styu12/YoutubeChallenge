export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const trending = (req, res) =>
  res.render("stories/trending", { pageTItle: "Trending" });
export const newStories = (req, res) =>
  res.render("stories/new", { pageTitle: "New Stories" });
export const seeStory = (req, res) =>
  res.render("stories/see", { pageTitle: "See Story" });
export const editStory = (req, res) =>
  res.render("stories/edit", { pageTitle: "Edit Story" });
export const deleteStory = (req, res) =>
  res.render("stories/delete", { pageTitle: "Delete Story" });
