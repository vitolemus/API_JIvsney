const router = require('express').Router()

const apiMoviesRouter = require('./api/movies')

router.use('/movies', apiMoviesRouter)



module.exports = router