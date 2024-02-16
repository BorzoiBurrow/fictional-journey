const sequelize = require('../../config/connection');
const posts = require("../../models/posts")
const router = require('express').Router();
const Account = require("../../models/accounts")

// creating the session with express-sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db: sequelize });



// post for making a new blog post
router.post('/posts', async (req, res) => {
  try {
    const { title, text, time } = req.body;
    const newPost = await posts.create({ title, text, time});

    res.status(201).json({ message: 'success!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({error});
  }
});

// post req for logging in user 
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Find the user by username
    const user = await Account.findOne({ where: { username } });
    if (user && bcrypt.compareSync(password, user.password)) {

// express login
      req.session.userId = user.id;
      req.session.isLoggedIn = true;
      res.redirect('/');
    } else {
      res.send('Invalid username or password.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
  
module.exports = router;
