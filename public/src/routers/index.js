const express = require('express')
const router = express.Router();

const getUltraSrtNcstRouter = require("./getUltraSrtNcstRouter")

router.use('/wether', getUltraSrtNcstRouter)

module.exports = router;