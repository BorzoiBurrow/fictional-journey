const router = require('express').Router();
const Routes = require('./api');
const path = require('path')
const posts = require("../models/posts")
const session = require('express-session');
router.use('/api', Routes);


router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// home page 
router.get('/', async (req,res) =>{
    try{ 
        const blogPosts = await posts.findAll();
        res.render('home', { layout: 'main', title: 'Home Page', posts: blogPosts, isLoggedIn: req.session.isLoggedIn});
    }
    catch(error){
        console.log(`An error occured. As follows: ${error}`)
    }
  })


// DashBoard page
  router.get('/dashboard', (req,res) =>{
    if (req.session.isLoggedIn === true){

      try{ 
        res.render('Dashboard.hbs', {title: 'Dashboard', layout: 'main'})
        }
        catch(error){
            console.log(`An error occured. As follows: ${error}`)
    }}
    else {
        res.render('LogIn.hbs', {title: 'Log In', layout: 'main', message: "You must be logged in to visit the dashboard."})
    }
  })


// LogIn page
router.get('/Login', (req,res) =>{
  try{ 
      res.render('LogIn.hbs', {title: 'Log In', layout: 'main'})
  }
  catch(error){
      console.log(`An error occured. As follows: ${error}`)
  }
})

// account creation page
router.get("/creation", (req,res) =>{
  try{
    res.render('creation.hbs', {title: 'Create an account', layout: 'main'})
  }
  catch(error){
    console.log(`An error occured. As follows: ${error}`)
  }
})

// css and scripts for pages
router.get('/public/css/index.css', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '../../public/css/index.css'))
})
router.get('/public/js/index.js', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '../../public/js/index.js'))
})

module.exports = router;