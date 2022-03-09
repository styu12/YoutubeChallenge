import express from "express";

const app = express();
const PORT = 4000;

const urlLogger = (req, res, next) => {
  const url = req.path;
  console.log(`Path: ${url}`);
  next();
};
const timeLogger = (req, res, next) => {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  console.log(`Time: ${year}.${month}.${date}`);
  next();
};
const securityLogger = (req, res, next) => {
  const security = req.protocol;
  if (security === "https") {
    console.log("Secure");
  } else if (security === "http") {
    console.log("Insecure");
  }
  next();
};
const protectorMiddleware = (req, res, next) => {
  const url = req.path;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed.</h1>");
  }
  next();
};

app.use(urlLogger, timeLogger, securityLogger, protectorMiddleware);
app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(PORT, () => `Listening!✅`);
