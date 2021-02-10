import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title, icon }) => {
	return (
		<div className="header bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</div>
	);
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string
};

Header.defaultProps = {
	title: ' Blogger ',
	icon: 'fas fa-blog'
};

export default Header;
