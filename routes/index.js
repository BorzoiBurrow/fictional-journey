const router = require('express').Router();
const Routes = require('./api');

router.use('/api', Routes);

router.get('/', (req,res) =>{
    try{ 
    res.render('index.hbs')
    }
    catch(error){
        console.log(`An error occured. ${error}`)
    }
  })


module.exports = router;