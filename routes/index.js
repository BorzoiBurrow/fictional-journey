const router = require('express').Router();
const Routes = require('./api');
const path = require('path')
router.use('/api', Routes);

const blogPosts = [
  {
    title: 'First Post',
    text: 'This is the content of the first post. It can contain multiple paragraphs and other content.',
    time: '11:30 AM', 
  },
  {
    title: 'Second Post',
    text: 'Here is the second post with some more content. You can customize this content to fit your needs.',
    time: '12:45 PM',
  },
]



// home page 
router.get('/', (req,res) =>{
    try{ 
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

router.get('/public/css/index.css', (req,res)=>{
  res.sendFile(path.resolve(__dirname + '../../public/css/index.css'))
})
router.get('/public/js/index.js', (req,res)=>{
  res.sendFile(path.resolve(__dirname + '../../public/js/index.js'))
})

module.exports = router;