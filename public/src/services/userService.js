const { userDao } = require('../models')
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')

const githubSignIn = async (code) => {

    const clientId = process.env.GITHUB_CLIENT;
    const clientSecret = process.env.GITHUB_SECRET;
    const tokenUrl = 'https://github.com/login/oauth/access_token'
    const userUrl = 'https://api.github.com/user';

    const requestToken = await fetch(`${tokenUrl}?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,{
        method : 'POST',
        headers:{ 
            accept: 'application/json',
        }
    })
    .then((res) => res.json())
    .then((data) =>{
        return data
    })

    const token = requestToken.access_token;

    const userData = await fetch(userUrl,{
        method : 'GET',
        headers: { 
            Authorization: `token ${token}` 
        }
    })
    .then((res) => res.json())
    .then((data) =>{
        return data
    })

    const { login, html_url, avatar_url } = userData; 

	let user = await userDao.getUserByemail(html_url);
    
    if(!user){
        await userDao.gitSignUp(login, html_url, avatar_url, 4);
        user = await userDao.getUserByemail(html_url);
    }

	const accessToken = jwt.sign({ id : user.id, platform : user.platform }, process.env.JWT_KEY);

	return accessToken

}

module.exports = { 
    githubSignIn
}