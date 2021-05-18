
const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
    console.log('Route Matched')

});


router.get('/stats',(req, res) => {
      console.log('Route matched')
      res.sendFile(path.join(__dirname,"../public/stats.html"))
});



