const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		title: {
			type: String
		},
		image: {
			type: String
		},
		post: {
			type: String
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('blogs', BlogSchema);
