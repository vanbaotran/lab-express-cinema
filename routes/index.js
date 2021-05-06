const express = require('express');
const Movie = require('../models/Movie.model.js');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res,next)=>{
    Movie.find({})
    .then(allMoviesFromDB =>{
        console.log('Retrieved movies from DB',allMoviesFromDB);
        res.render('movies',{allMovies:allMoviesFromDB});
    })
    .catch(err=>{
        console.log('Error while getting movies from DB',err);
        next(err);
    })
})
router.get('/movies/:id',(req,res,next) => {
    // Movie.find({})
    // .then(allMoviesFromDB =>{
    //     // console.log('id',req.params.id);  
    //     let theMovie;
    //     theMovie = allMoviesFromDB.find(function (el) {return req.params.id===el.id})
    //     res.render('details', {data:theMovie})
    Movie.findById(req.params.id)
        .then(theMovie=>{
            console.log('id',req.params.id);
            res.render('details',{data:theMovie});
        })
        .catch(err=>{
            console.log('Error while retrieving movie details: ', error);
            next(err);
        });
})
// })
module.exports = router;
