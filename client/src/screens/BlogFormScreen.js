import React, { useState, useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import { useFileUpload } from 'use-file-upload';

const BlogForm = () => {
	const [file, selectFile] = useFileUpload();
	const blogContext = useContext(BlogContext);
	const [blog, setBlog] = useState({
		title: '',
		post: '',
		image: ''
	});

	const { title, image, post } = blog;

	const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		blogContext.addBlog(blog);
		setBlog({
			title: '',
			image: '',
			post: ''
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<h2>erferferg</h2>
			<input type="text" placeholder="title" name="title" value={title} onChange={onChange} />

			<textarea type="text" placeholder="post" name="post" rows="5" cols="40" value={post} onChange={onChange} />

			<div>
				<button
					onClick={() => {
						// Single File Upload
						selectFile();
					}}
				>
					Click to Upload
				</button>

				{file ? (
					<div>
						<img src={file.source} alt="preview" placeholder="image" name="image" value={image} onChange={onChange} />
						<span> Name: {file.name} </span>
						<span> Size: {file.size} </span>
					</div>
				) : (
					<span>No file selected</span>
				)}
			</div>
			<div>
				<input type="submit" value="Submit Blog" className="btn btn-dark" />
			</div>
		</form>
	);
};

export default BlogForm;
