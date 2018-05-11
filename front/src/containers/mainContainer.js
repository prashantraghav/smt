import React from 'react';

import List from '../components/list';
import Form from '../components/form';


const MainContainer = (props) => {
	return (
		<div className="main-container">
			<List />
			<Form />
		</div>
	)
}

export default MainContainer;
