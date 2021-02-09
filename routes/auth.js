const express = require('express');
const router = express.Router();

// GET api/auth
// Retrives logged in user
// Private
router.get('/', (req, res) => {
	res.send('Retreive logged in user');
});

// POST api/auth
// Authorize logged in user and retrieve tokej
// Private
router.post('/', (req, res) => {
	res.send(' Log in user');
});

module.exports = router;
