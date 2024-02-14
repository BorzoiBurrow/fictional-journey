const router = require('express').Router();
const Routes = require('./api');
const path = require('path')
router.use('/api', Routes);

router.get('/', (req,res) =>{
    try{ 
    res.render('index.hbs', {title: 'home', layout: 'main'})
    }
    catch(error){
        console.log(`An error occured. As follows: ${error}`)
    }
  })
router.get('/public/css/index.css', (req,res)=>{
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname + '../../public/css/index.css'))
})

module.exports = router;