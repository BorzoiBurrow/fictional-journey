const router = require('express').Router();
const Routes = require('./api');
const path = require('path')
const { posts, Account } = require('../models/index');
const session = require('express-session');

router.use('/api', Routes);




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
  // dashboard page
  router.get('/dashboard', async (req, res) => {
    try {
      if (req.session.isLoggedIn) {
  
        const userId = req.session.userId;
  
        const userPosts = await posts.findAll({
          where: {
            ownerId: userId
          }
        });
  
        res.render('dashboard.hbs', {title: 'Dashboard', layout: 'main', isLoggedIn: req.session.isLoggedIn, posts: userPosts});
  
      } else {
        res.render('Login.hbs', { title: 'Login', layout: 'main' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

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
    res.render('Creation.hbs', {title: 'Create an account', layout: 'main'})
  }
  catch(error){
    console.log(`An error occured. As follows: ${error}`)
  }
})
router.get("/logout", (req,res) =>{
try {
  res.render('Logout.hbs', {title: 'Logout confirmation', layout: "main"})
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