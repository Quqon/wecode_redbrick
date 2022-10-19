const express = require('express');

const { getUltraSrtNcstController } = require('../controllers');

const router = express.Router();

router.get("/shortTerm", getUltraSrtNcstController.getAPI);

module.exports = router;