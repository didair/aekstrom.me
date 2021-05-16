import React, { Fragment } from 'react';

import {
	Switch,
	Route,
} from "react-router-dom";

import Header from './Header';

import Home from './Pages/Home';
import Renders from './Pages/Renders';

const App = (props) => {
	return (
		<Fragment>
			<Header />

			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/renders">
					<Renders />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default App;