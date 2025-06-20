const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const blogController = require('../controllers/blogController');

// @route   POST api/blog
// @desc    Create a new blog post
// @access  Private
router.post('/', auth, blogController.createPost);

// @route   GET api/blog
// @desc    Get all blog posts
// @access  Public
router.get('/', blogController.getPosts);

// @route   GET api/blog/:id
// @desc    Get blog post by ID
// @access  Public
router.get('/:id', blogController.getPostById);

// @route   PUT api/blog/:id
// @desc    Update blog post
// @access  Private
router.put('/:id', auth, blogController.updatePost);

// @route   DELETE api/blog/:id
// @desc    Delete blog post
// @access  Private
router.delete('/:id', auth, blogController.deletePost);

module.exports = router;