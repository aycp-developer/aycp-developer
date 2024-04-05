import React, { useReducer } from 'react';
import { ToggleNavbarContext, ThemeContext, Navbar, Start, WhoAmI, Formation, Technologies, Projects, ContactMe } from '../../exports/exports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Root = () => {

	// estado inicial del reductor toggle navbar
	const initialToggleNavbarState = { toggleNavbarState: false };

	// obtención del estado persistido
	const persistedThemeState = localStorage.getItem('themeState');

	// estado inicial del reductor theme
	const initialThemeState = { themeState: (persistedThemeState == 'dark') ? 'dark' : 'light' };

	// reductor toggle navbar
	const toggleNavbar = (state, action) => {
		switch (action.type) {
			case 'active':
				return {
					toggleNavbarState: action.payload.toggleNavbar
				};
			case 'inactive':
				return {
					toggleNavbarState: action.payload.toggleNavbar
				};
			default:
				return state;
		}
	};

	// reductor theme
	const theme = (state, action) => {
		switch (action.type) {
			case 'light':
				return {
					themeState: action.payload.theme
				};
			case 'dark':
				return {
					themeState: action.payload.theme
				};
			default:
				return state;
		}
	};

	// hook useReducer para el toggle navbar
	const [toggleNavbarState, toggleNavbarDispatch] = useReducer(toggleNavbar, initialToggleNavbarState);

	// hook useReducer para el theme
	const [themeState, themeDispatch] = useReducer(theme, initialThemeState);

	// persistencia del estado
	localStorage.setItem('themeState', themeState.themeState);

	return (
		<ToggleNavbarContext.Provider value={{ toggleNavbarState, toggleNavbarDispatch }}>
			<ThemeContext.Provider value={{ themeState, themeDispatch }}>
				<div>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path='/' element={<Start />} />
							<Route path='/quien-soy' element={<WhoAmI />} />
							<Route path='/formacion' element={<Formation />} />
							<Route path='/tecnologias' element={<Technologies />} />
							<Route path='/proyectos' element={<Projects />} />
							<Route path='/contactame' element={<ContactMe />} />
						</Routes>
					</BrowserRouter>
				</div>
			</ThemeContext.Provider>
		</ToggleNavbarContext.Provider>
	);

};

export default Root;