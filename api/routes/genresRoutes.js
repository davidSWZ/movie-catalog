var express = require("express"), 
    router  = express.Router(),
    genre = require("../models/genreModel");

/**
 * Return all genres from DB
 */ 
router.get("/", function(req,res){
    // genres.find({}, function(err, genres){
    //    if(err){
    //        console.log(err);
    //    } else{
    //        res.send("search genres")
    //    }
    // });

    res.send("search genres")
});

module.exports = router;