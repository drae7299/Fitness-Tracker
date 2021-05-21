const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "enter an exercise type please",
      },
      name: {
        type: String,
        required: "enter an exercise name",
      },
      duration: {
        type: Number,
        required: "Enter a duration in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
