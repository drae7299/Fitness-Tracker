const router = require('express').Router();
// const router = require('module').Router();

//route for workout tab
router.get('/api/workouts' , (req, res) => {
    console.log('Its working')
    
}) ;
//route for workout range tab
router.get('/api/workouts/range' , (req, res) => {
    console.log('Its working')
    
}) ;



module.exports = router
