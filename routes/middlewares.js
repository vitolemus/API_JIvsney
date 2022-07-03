const jwt = require('jwt-simple')
const moment = require('moment')


const checkToken = (req, res, next)=>{

    if(!req.headers['auth-token']){
        return res.json({error:'the header auth-token is required'})
    }
    
    const authToken = req.headers['auth-token']
    let payload = {}

    //decodificando el token
    try {
        payload = jwt.decode(authToken, 'To infinity and beyond')
    } catch (error) {
        return res.json({error: 'Wrong Token'})
        
    }

    // Comprobando token expirado
    if(payload.expiredAt < moment().unix()){
        return res.json({error:'Expired Token'});
    }

    req.authId = payload.authId
    
    next();

}

module.exports = {
    checkToken: checkToken

}
    