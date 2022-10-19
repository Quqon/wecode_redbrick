const express = require("express");
const router = express.Router();

const metroRouter = require("./metroRouter");

router.use("/metro", metroRouter);

module.exports = router;
