const router = require('express').Router();
const Routes = require('./api');
const path = require('path')
const posts = require("../models/posts")
router.use('/api', Routes);



// home page 
router.get('/', async (req,res) =>{
    try{ 
      const blogPosts = await posts.findAll();
      res.render('home', { layout: 'main', title: 'Home Page', posts: blogPosts });
    }
    catch(error){
        console.log(`An error occured. As follows: ${error}`)
    }
  })

// DashBoard page
router.get('/dashboard', (req,res) =>{
  try{ 
  res.render('Dashboard.hbs', {title: 'Dashboard', layout: 'main'})
  }
  catch(error){
      console.log(`An error occured. As follows: ${error}`)
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
// css and scripts for pages
router.get('/public/css/index.css', (req,res)=>{
  res.sendFile(path.resolve(__dirname + '../../public/css/index.css'))
})
router.get('/public/js/index.js', (req,res)=>{
  res.sendFile(path.resolve(__dirname + '../../public/js/index.js'))
})

module.exports = router;