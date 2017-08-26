var express = require('express');
var router = express.Router();

/* GET workouts listing. */
router.get('/', function(req, res, next) {
  res.send('This is a list of workouts');
});

router.get('/:id', function(req,res,next){
    res.send('This is a specific workout');
});

module.exports = router;