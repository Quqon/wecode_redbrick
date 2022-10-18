const express = require("express");
const { apiController } = require("../controllers");
const apiRouter = express.Router();

apiRouter.get("", apiController.getApi);

module.exports = apiRouter;
