import React from 'react';

import Routes from './routes';

function App() {
	return (
		<div className="App">
			<a href="list">List</a>
			<a href="create">Create</a>
			<Routes/>
		</div>
	);
}

export default App;
