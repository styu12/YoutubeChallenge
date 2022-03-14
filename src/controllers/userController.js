export const join = (req, res) =>
  res.render("users/join", { pageTitle: "Join" });
export const login = (req, res) =>
  res.render("users/login", { pageTItle: "Login" });
export const seeUsers = (req, res) =>
  res.render("users/allUsers", { pageTitle: "All Users" });
export const seeUser = (req, res) =>
  res.render("users/profile", { pageTitle: "Profile" });
export const editProfile = (req, res) =>
  res.render("users/edit", { pageTitle: "Edit Profile" });
