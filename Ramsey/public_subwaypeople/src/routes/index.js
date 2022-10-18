const express = require('express');
const router = express.Router();
const subwayRouter = require('./subwayRouter');

router.use('/test', subwayRouter);

module.exports = router;