import React, { Component } from 'react';
import logo from './logo.svg';


import Header from './components/header';
import List from './components/list';
import Sidebar from './components/sidebar';
import MainContainer from './containers/mainContainer';

class App extends Component {

	constructor(){
		super();
		this.state = {
			sidebar_collapsed: false,
		}
	}

	toggleSidebar = () => {
		let sidebar_collapsed = !this.state.sidebar_collapsed;
		this.setState({sidebar_collapsed: sidebar_collapsed});
	}

	render() {
		return (
			<div className="App">
				<Header toggleSidebar={this.toggleSidebar}/>
				<Sidebar collapsed={this.state.sidebar_collapsed}/>
				<MainContainer />
			</div>
		);
	}
}

export default App;
