const express = require("express");
const router = express.Router();

const getUltraSrtNcstRouter = require("./getUltraSrtNcstRouter")

router.use('/api', getUltraSrtNcstRouter)


module.exports = router;