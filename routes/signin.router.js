const express = require("express");
const router = express.Router();

const path = require("path");
const viewsPath = path.join(__dirname + "/../views");
router.use("/", express.static(viewsPath + "/signin"));

router.get("/", (req, res) => {
  res.sendFile(viewsPath + "/signin/signin.html");
});

router.post("/", (req, res) => {
  const data = req.body;
  console.log("data", data);
});

module.exports = router;
