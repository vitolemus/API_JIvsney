const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { Auth } = require('../../db')
const { check, validationResult } = require('express-validator')
const moment=require('moment')
const jwt=require('jwt-simple')


// Comprobar si los datos para registrarse estan correctos
router.post('/register', [
    check('username', 'User required').not().isEmpty(),
    check('password', 'Password required').not().isEmpty(),
    check('email', 'Email required' ).isEmail()
], async ( req, res )=>{

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(422).json({ errorres: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10 )
    const auth = await Auth.create(req.body)
    res.json(auth)
    
})

router.post('/login', async( req,res )=>{
    const auth = await Auth.findOne({ where:{ email:req.body.email }})
    if( auth ){
        const same = bcrypt.compareSync( req.body.password,auth.password)
        if( same ){
            res.json({ sucess: createToken(auth) })
        } else{
            res.json({ error:'Useraname/Password Error' });
        }
        
    } else{
        res.json({error:'Useraname/Password Error'});
    }

})


//creacion de token e encriptacion
const createToken = ( auth )=>{
    const payload = {  
        authId: auth.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5,'minutes').unix()
    }

    return jwt.encode( payload, 'To infinity and beyond')

}
        
    





module.exports = router