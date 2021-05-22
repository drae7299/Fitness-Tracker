const { Workout } = require('../models');

const router = require('express').Router();
// const router = require('module').Router();

//route for workout tab
router.get('/api/workouts' , (req, res) => {
    console.log('Its working');
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
    .catch(err => {
        res.json(err);
    })
}) ;
//route for workout range tab
router.get('/api/workouts/range' , (req, res) => {
    console.log('Its working')
    
}) ;


// add an exercise put into workouts
router.put("api/workouts/: id" ,({params, body } , res) => {
        console.log(body);
        Workout.findByIdAndUpdate(
            params.id,
            {
                $push: {
                    exercise: body,
                },
            },
            {
                new: true,
                runValidators: true
            }
        )
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
});



// create a workout 
router.put( "/workouts" , ({body} , res) => {
    console.log(body);
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
        
});




module.exports = router;
