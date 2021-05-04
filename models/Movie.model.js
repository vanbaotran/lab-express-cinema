const mongoose=require('mongoose')

const movieSchema= new mongoose.Schema({
    title:String,
    director:String,
    stars:[String],
    image:String,
    description:String,
    showtimes:[String]
},{timestamps:true})
const moviesModel= mongoose.model('movie',movieSchema)
module.exports=moviesModel