const sequelize = require('../../config/connection');
const posts = require("../../models/posts")
const router = require('express').Router();
const Account = require("../../models/accounts")
const bcrypt = require('bcrypt')
// creating the session with express-sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db: sequelize });


// post for posts
router.post('/posts', async (req, res) => {
      try {
        const { title, text } = req.body;
        const ownerId = req.session.userId; 
    
        const newPost = await posts.create({ title, text, ownerId });
    
        res.redirect("/dashboard")
      } catch (error) {
        console.error(error);
        res.status(500).json({error});
      }
    });

// post req for logging in user 
router.post('/login', async (req, res) => {
      const { username, password } = req.body;

try {
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

router.post('/creation', async (req, res) => {
      const { username, password } = req.body;
    
      try {
        const existingUser = await Account.findOne({ where: { username } });
    
        if (existingUser) {
          return res.status(409).json({ message: 'Username is already taken. Please choose a different one.' });
        }
    
        const newAccount = await Account.create({ username, password });
        res.redirect("/")
      } catch (error) {
        console.error(error);
        res.status(500).json({error});
      }
    });
    
router.post('/logout', (req, res) => {
      req.session.destroy((error) => {
      if (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
      } else {
          res.redirect('/');
      }
      });
    });
// delete route for posts on the dashboard
    router.delete('/api/posts', async (req, res) => {
      try {
        const postId = req.params.id;
    
        const postToDelete = await posts.findByPk(postId);
    
        if (!postToDelete) {
          return res.status(404).json({ error: 'Post not found' });
        }

        await postToDelete.destroy();
    
          res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
          console.error('Error deleting post:', error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
    });


module.exports = router;
