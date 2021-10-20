import './App.css';
import Head from './Head';
import Footer from './Footer.js';
import { useState } from 'react';
import ThemeContext from './ThemeContext';
import themes from './themes.js';

export default function App() {
	const [theme, setTheme] = useState(themes.Aqua);
	//create a value to put into our context object

	//add a function to change the context object
	function toggleTheme() {
		//switch between light and dark
		console.log(
			'comparing',
			theme.backgroundColor,
			themes.Space.backgroundColor
		);
		const newTheme =
			theme.backgroundColor === themes.Space.backgroundColor
				? themes.Aqua
				: themes.Space;
		setTheme(newTheme);
	}

	return (
		<div className="App">
			<ThemeContext.Provider value={[theme, toggleTheme]}>
				<Head />
				<Footer />
			</ThemeContext.Provider>
		</div>
	);
}
