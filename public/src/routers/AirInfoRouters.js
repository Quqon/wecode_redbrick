const express = require('express');

const { AirInfoControllers } = require('../controllers');

const router = express.Router();

router.get("/airForecast", AirInfoControllers.getAPI);

module.exports = router;