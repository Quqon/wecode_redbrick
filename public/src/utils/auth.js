const jwt = require("jsonwebtoken");
const key = process.env.JWT_KEY;


const validToken = async(req, res, next) =>{
    try{
        const userToken = req.header("authorization");
        if( !userToken ) return res.status(400).json({message : "KEY_ERROR" });
        const decoded = jwt.verify(userToken, key);
        const { id, platform } = decoded;

        req.id = id;
        req.platform = platform;

        return next();
        
    }
    catch(err){
        const error = new Error("INVALID_TOKEN");
        error.statusCode = 400;
        next;
    }
}

module.exports = {
    validToken
}