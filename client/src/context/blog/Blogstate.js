import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BlogContext from './blogContext';
import blogReducer from './blogReducer';
import { ADD_BLOG, DELETE_BLOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_BLOG, FILTER_BLOGS, CLEAR_FILTER } from '../types';
import blogContext from './blogContext';

const BlogState = (props) => {
	const initialState = {
		blogs: [
			{
				id: 1,
				title: 'Blog 1',
				image: '../images/cricket.jpg',
				post: 'I love cricket'
			},
			{
				id: 2,
				title: 'Blog 2',
				image: '../images/crowds.jpg',
				post: 'When can i go to a gig'
			},
			{
				id: 3,
				title: 'Blog 3',
				image: '../images/sheep.jpg',
				post: 'Sheep smell better than my dog'
			}
		]
	};

	const [state, dispatch] = useReducer(blogReducer, initialState);

	// add blog
	const addBlog = (blog) => {
		blogContext.id = uuidv4();
		dispatch({ type: ADD_BLOG, payload: blog });
	};
	// delete blog
	const deleteBlog = (id) => {
		dispatch({ type: DELETE_BLOG, payload: id });
	};
	// set current blog

	// clear current blog

	// update blog

	// filter blogs

	// clear filter

	return (
		<BlogContext.Provider
			value={{
				blogs: state.blogs,
				addBlog,
				deleteBlog
			}}
		>
			{props.children}
		</BlogContext.Provider>
	);
};

export default BlogState;
