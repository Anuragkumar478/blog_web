const express=require('express')
const router=express.Router();
const blogModel=require('../model/blog');



// 1. Get all blogs
router.get('/', async (req, res) => {
    try {
      const blogs = await blogModel.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blogs', error });
    }
  });
  
  // 2. Get a single blog by title
  router.get('/title/:title', async (req, res) => {
    try {
      const blog = await blogModel.findOne({ title: req.params.title });
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blog', error });
    }
  });
  module.exports = router;