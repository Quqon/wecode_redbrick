const  { userService }  = require('../services');
const { catchAsync } = require('../utils/error');

const getgitHubCode = catchAsync(async (req, res) => {

    const clientId = process.env.GITHUB_CLIENT;
    const baseUrl = "https://github.com/login/oauth/authorize";

    const config = {
      client_id: clientId
    };

    const params = new URLSearchParams(config).toString();

    const finalUrl = `${baseUrl}?${params}`;
  
    return res.redirect(finalUrl); 

})

const githubSignIn = catchAsync(async (req, res) => {

    const code = req.query.code;

    const token = await userService.githubSignIn(code);

    return res.status(200).json({ token :  token });

})

module.exports = {
    getgitHubCode,
    githubSignIn
}