//global consts
const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');
const PORT = process.env.PORT || 3000;
const compression = require('compression');
const app = express();
//calling express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//calling compression
app.use(compression());
app.use(logger("dev"));
app.use(express.static("public"));
//connecting mondo server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/apiroutes"));
app.use(require("./routes/htmlroutes"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
