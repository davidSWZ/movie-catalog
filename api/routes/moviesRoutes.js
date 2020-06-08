var express = require("express"), 
    router  = express.Router(),
    movie = require("../models/movieModel");
    
/**
 * Return movies matching query from DB
 */  
router.get("/", function(req,res){
    // movie.find({}, function(err, movie){
    //    if(err){
    //        console.log(err);
    //    } else{
    //        res.send("search movies")
    //    }
    // });

    res.send("search movies")
});

module.exports = router;