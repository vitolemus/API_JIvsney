const router = require('express').Router()

const middlewares = require('./middlewares')
const apiMoviesRouter = require('./api/movies')
const apiAuthRouter = require('./api/auth')


//todas las rutas para las movies pasan primero por el middelware
router.use('/movies', middlewares.checkToken, apiMoviesRouter)
router.use('/auth', apiAuthRouter)



module.exports = router