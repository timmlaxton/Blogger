const express = require('express');
const router = express.Router();

// POST api/users
// Register a user
// Public
router.post('/', (req, res) => {
	res.send('Register a user');
});

module.exports = router;