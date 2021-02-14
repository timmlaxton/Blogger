import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import BlogContext from '../context/blog/blogContext';

const BlogItem = ({ blog }) => {
	const blogContext = useContext(BlogContext);
	const { deleteBlog } = blogContext;

	const { title, id, image, post } = blog;

	const onDelete = () => {
		deleteBlog(id);
	};
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/blog/${id}`}>
				<Card.Img src={image} variant="top" />
			</Link>

			<Card.Body>
				<Link to={`/blog/${id}`}>
					<Card.Title as="div">
						<strong>{title}</strong>
					</Card.Title>

					<Card.Text as="div">
						<strong>{post}</strong>
					</Card.Text>
				</Link>

				<button className="btn btn-dark btn-sm" onClick={onDelete}>
					Delete
				</button>
			</Card.Body>
		</Card>
	);
};

export default BlogItem;
