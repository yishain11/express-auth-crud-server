const express = require("express");
const app = express();

const path = require("path");
const viewsPath = path.join(__dirname + "/../views");
const homeRouter = require("../routes/home.router");
const studentsRouter = require("../routes/students.router");
const signinRouter = require("../routes/signin.router");
app.use((req, res, next) => {
  const { url, method } = req;
  console.log(`got req to ${url} method: ${method}`);
  next();
});
app.use(express.json());
app.use("/students", studentsRouter);
app.use("/signin", signinRouter);
app.use("/", homeRouter);
app.listen(3434, () => {
  console.log("server listening on port 3434");
});
