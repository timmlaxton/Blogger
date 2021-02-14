import React, { Fragment, useContext } from 'react';
import BlogContext from '../context/blog/blogContext';
import BlogItem from './BlogItem';

const Blogs = () => {
	const blogContext = useContext(BlogContext);

	const { blogs } = blogContext;

	return (
		<Fragment>
			{blogs.map((blog) => (
				<BlogItem key={blog.id} blog={blog} />
			))}
		</Fragment>
	);
};

export default Blogs;
