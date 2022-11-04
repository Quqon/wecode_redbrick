const express = require("express");

const router = express.Router();

const newsRouter = require("./newsRouter");
const metroRouter = require("./metroRouter");
const busRouter = require("./busRouter");
const wetherRouters = require("./wetherRouters");
const dustRouter = require("./dustRouter");
const gitRouter = require("./gitRouter")
const userRouter = require("./userRouter")

router.use("/news", newsRouter);
router.use("/metro", metroRouter);
router.use("/bus", busRouter);
router.use("/wether", wetherRouters);
router.use("/dust", dustRouter);
router.use("/git", gitRouter);
router.use("/login", userRouter)

module.exports = router;
