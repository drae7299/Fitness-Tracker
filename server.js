const express = require("express");
const mongoose = require("mongoose");
const seeder = require('mongoose-seeder');
data = require('./config/data.json');

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
//app.use(require("/api.js"));
app.use(require("./routes/htmlroutes"))
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});