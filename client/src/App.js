import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import BlogForm from './screens/BlogFormScreen';

import BlogState from './context/blog/Blogstate';
import './App.css';

const App = () => {
	return (
		<BlogState>
			<Router>
				<BlogState>
					<Header />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/about" component={About} />
							<Route exact path="/form" component={BlogForm} />
						</Switch>
					</div>
				</BlogState>
			</Router>
		</BlogState>
	);
};

export default App;
