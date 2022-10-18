const express = require('express');

const { subwayController } = require('../controllers');

const router = express.Router();

router.get('/:yyyymm/:line/:station', subwayController.getInformation);

module.exports = router;