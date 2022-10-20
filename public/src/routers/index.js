const express = require('express')
const router = express.Router();

const AirInfoRouters = require("./AirInfoRouters")

router.use('/wether', AirInfoRouters)

module.exports = router;