const { Workout } = require("../models");

const router = require("express").Router();
// const router = require('module').Router();

//route for workout tab
router.get("/api/workouts", (params, res) => {
  console.log("Its working");
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
//route for workout range tab
router.get("/api/workouts/range", (req, res) => {
  console.log("Its working");
  Workout.find({})
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
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
router.post("/api/workouts", ({ body }, res) => {
  console.log(body);
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
