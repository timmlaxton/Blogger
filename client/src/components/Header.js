import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ name, icon }) => {
	return (
		<div className="header bg-primary">
			<h1>
				<i className={icon} /> {name}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/form">Form</Link>
				</li>
			</ul>
		</div>
	);
};

Header.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string
};

Header.defaultProps = {
	name: ' Blogger ',
	icon: 'fas fa-blog'
};

export default Header;
