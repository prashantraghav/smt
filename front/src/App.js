import React, { Component } from 'react';
import logo from './logo.svg';


import Header from './components/header';
import List from './components/list';
import Sidebar from './components/sidebar';
import MainContainer from './containers/mainContainer';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<Sidebar />
				<MainContainer />
			</div>
		);
	}
}

export default App;
