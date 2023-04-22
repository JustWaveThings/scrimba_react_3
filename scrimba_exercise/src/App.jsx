import Main from './components/Main';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
	const [darkMode, setDarkMode] = React.useState(false);

	function handleDarkMode() {
		setDarkMode(prevState => !prevState);
	}

	return (
		<div className="container">
			<Navbar
				toggleDarkMode={handleDarkMode}
				darkMode={darkMode}
			/>
			<Main darkMode={darkMode} />
		</div>
	);
}

export default App;
