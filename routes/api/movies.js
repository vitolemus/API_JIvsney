const router = require('express').Router()

const {Movie} = require('../../db')

router.get('/', async (req, res)=>{    
    const movies = await Movie.findAll()
    res.json(movies)
    console.log("User: " + req.authId) // Usuario que accedio a las movies

})

router.post('/', async (req, res)=>{
    const movie = await Movie.create(req.body)
    res.json(movie)

})

router.put('/:movieId', async (req, res)=>{
    await Movie.update(req.body, {
        where: { id: req.params.movieId }
    })
    res.json({ sucess: 'Modified' })

})

router.delete('/:movieId', async (req, res)=>{
    await Movie.destroy({
        where: { id: req.params.movieId }
    })
    res.json({ sucess: 'Erased' })

})


module.exports = router