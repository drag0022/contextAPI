import ThemeContext from './ThemeContext.js';
import { useContext } from 'react';
export default function Footer() {
	const [theme] = useContext(ThemeContext);
	return <footer style={theme}>This is the footer</footer>;
}
