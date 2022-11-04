
const router = require('express').Router();
const newsController = require('../controllers/newsController');
const { validToken } = require('../utils/auth')

router.get('/:category/:year', validToken, newsController.getNews);

module.exports = router;