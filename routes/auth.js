const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const User = require('../models/User');

// GET api/auth
// Retrives logged in user
// Private
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// POST api/auth
// Authorize logged in user and retrieve tokej
// Private
router.post(
	'/',
	[check('email', 'Please provide a email').isEmail(), check('password', 'Pasword is required').exists()],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ msg: 'The details do not match anyone registered' });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({ msg: 'The details do not match anyone registered' });
			}

			const payload = {
				user: {
					id: user.id
				}
			};
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 3600000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send();
		}
	}
);

module.exports = router;
