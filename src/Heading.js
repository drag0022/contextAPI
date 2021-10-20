import { useContext } from 'react';
import ThemeContext from './ThemeContext';
export default function Heading(props) {
	const [theme, toggleTheme] = useContext(ThemeContext);
	//works like useState [prop, func]

	return (
		<>
			<h1 style={theme}>Some Title</h1>
			<button onClick={toggleTheme}>
				Switch theme to {theme.name === 'Space' ? 'Aqua' : 'Space'}
			</button>
		</>
	);
}
