const express = require("express");
const router = express.Router();

const path = require("path");
const viewsPath = path.join(__dirname + "/../views");

router.post("/", (req, res) => {
  const data = req.body;
});
