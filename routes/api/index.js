const sequelize = require('../../config/connection');
const posts = require("../../models/posts")
const router = require('express').Router();

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

// post for logging in
router.post('/login', (req, res) => {
  const { username, password } = req.body;


  res.send('Login successful!');
});
  
module.exports = router;
