const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');

const Blogs = require('../models/Blogs');
const User = require('../models/User');

// GET api/blogs
// Get all blogs
// Private
router.get('/', auth, async (req, res) => {
	try {
		const blogs = await Blogs.find({ user: req.user.id }).sort({ date: -1 });
		res.json(blogs);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// POST api/blogs
// Add a new blog
// Private
router.post(
	'/',
	[auth, [check('title', 'Title is required').not().isEmpty()]],

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, image, post } = req.body;

		try {
			const newBlog = new Blogs({
				title,
				image,
				post,
				user: req.user.id
			});

			const blog = await newBlog.save();

			res.json(blog);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);
module.exports = router;

// PUT api/blogs/:id
// Update existing blog
// Private
router.put('/:id', auth, async (req, res) => {
	const { title, image, post } = req.body;

	const blogFields = {};
	if (title) blogFields.title = title;
	if (image) blogFields.image = image;
	if (post) blogFields.post = post;

	try {
		let blog = await Blogs.findById(req.params.id);

		if (!blog) return res.status(404).json({ msg: 'Blog not found' });

		if (blog.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'You do not have the correct permission' });
		}
		blog = await Blogs.findByIdAndUpdate(req.params.id, { $set: blogFields }, { new: true });

		res.json(blog);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;

// DELETE api/blogs/:id
// Delete a blog
// Private
router.delete('/:id', auth, async (req, res) => {
	try {
		let blog = await Blogs.findById(req.params.id);

		if (!blog) return res.status(404).json({ msg: 'Blog not found' });

		if (blog.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'You do not have the correct permission' });
		}

		await Blogs.findByIdAndRemove(req.params.id);
		res.json({ masg: 'Blog has been removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});
module.exports = router;
