const express = require('express');
const Movie = require('../models/Movie.model.js');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res,next)=>{
    Movie.find()
    .then(allMoviesFromDB =>{
        console.log('Retrieved movies from DB',allMoviesFromDB)
        res.render('movies',{allMovies:allMoviesFromDB})
    })
    .catch(err=>{
        console.log('Error while getting movies from DB',err);
        next(err);
    })
})
    
// })
module.exports = router;
