const { Workout } = require("../models");

const router = require("express").Router();
// const router = require('module').Router();

//route for workout tab
router.get('/api/workouts', (data, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration' }
      }
    }
  ])
    .limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//route for workout range tab
router.get('/api/workouts/range', (data, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration' },
        totalWeight: { $sum: '$exercises.weight' }
      }
    }
  ])
    .limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// add an exercise put into workouts
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { returnOriginal: false }
  )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// create a workout
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
