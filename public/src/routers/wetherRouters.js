const express = require('express');
const { weatherControllers } = require('../controllers');
const router = express.Router();

router.get("/shortTerm", weatherControllers.shortTerm);
router.get("/airForecast", weatherControllers.airForecast);

module.exports = router;