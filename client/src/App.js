import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import './App.css';

const App = () => {
	return (
		<Router>
			<>
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
					</Switch>
				</div>
			</>
		</Router>
	);
};

export default App;
