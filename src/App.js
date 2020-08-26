import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
	return (
		<Router>
			<div className="app">
				
				<Switch>
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>	

					<Route path='/'>
						<Header />
						<Home />
					</Route>	

				</Switch>	
			</div>
		</Router>
	);
}

export default App;
