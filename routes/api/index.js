const sequelize = require('../../config/connection');
const posts = require("../../models/posts")
const router = require('express').Router();


router.post('/posts', async (req, res) => {
  try {
    const { title, text, time } = req.body;
    const newPost = await posts.create({ title, text, time});

    console.log('New blog post added:', newPost);
    res.status(201).json({ message: 'success!' });
  } catch (error) {
    console.error('Error inserting blog post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
  
module.exports = router;
