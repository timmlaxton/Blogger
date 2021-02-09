const express = require('express');
const router = express.Router();

// GET api/blogs
// Get all blogs
// Private
router.get('/', (req, res) => {
	res.send('Retrieve all blogs');
});

// POST api/blogs
// Add a new blog
// Private
router.post('/', (req, res) => {
	res.send('Add a new blog');
});
module.exports = router;

// PUT api/blogs/:id
// Update existing blog
// Private
router.put('/:id', (req, res) => {
	res.send('Update current blog');
});
module.exports = router;

// DELETE api/blogs/:id
// Delete a blog
// Private
router.delete('/:id', (req, res) => {
	res.send('Delete blog');
});
module.exports = router;
