import React from 'react';

import Routes from './routes';

function App() {
	return (
		<div className="App">
			<a href="/coffee/list">List</a>
			<br/>
			<a href="/coffee/create">Create</a>
			<Routes/>
		</div>
	);
}

export default App;
