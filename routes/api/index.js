const sequelize = require('../../config/connection');
const posts = require("../../models/posts")
const router = require('express').Router();


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
  
module.exports = router;
