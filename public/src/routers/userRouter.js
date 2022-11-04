
const router = require('express').Router();
const { userController } = require('../controllers');

router.get('/github', userController.getgitHubCode);
router.get('/github/callback', userController.githubSignIn);

module.exports = router;