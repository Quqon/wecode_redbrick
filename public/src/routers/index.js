const express = require("express");

const router = express.Router();

const newsRouter = require("./newsRouter");
const metroRouter = require("./metroRouter");
const busRouter = require("./busRouter");
const weatherRouters = require("./wetherRouters");
const dustRouter = require("./dustRouter");
const gitRouter = require("./gitRouter")

router.use("/news", newsRouter);
router.use("/metro", metroRouter);
router.use("/bus", busRouter);
router.use("/weather", weatherRouters);
router.use("/dust", dustRouter);
router.use("/git", gitRouter);

module.exports = router;
