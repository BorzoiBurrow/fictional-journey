const router = require('express').Router();
const Routes = require('./api');
const path = require('path')
router.use('/api', Routes);
// home page 
router.get('/', (req,res) =>{
    try{ 
    res.render('index.hbs', {title: 'Home', layout: 'main'})
    }
    catch(error){
        console.log(`An error occured. As follows: ${error}`)
    }
  })

// DashBoard page
router.get('/dashboard', (req,res) =>{
  try{ 
  res.render('home.hbs', {title: 'Dashboard', layout: 'main'})
  }
  catch(error){
      console.log(`An error occured. As follows: ${error}`)
  }
})

// LogIn page
router.get('/Log in', (req,res) =>{
  try{ 
  res.render('Login.hbs', {title: 'Log In', layout: 'main'})
  }
  catch(error){
      console.log(`An error occured. As follows: ${error}`)
  }
})

router.get('/public/css/index.css', (req,res)=>{
  res.sendFile(path.resolve(__dirname + '../../public/css/index.css'))
})

module.exports = router;