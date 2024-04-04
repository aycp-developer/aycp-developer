import React, { useReducer } from 'react';
import { Context, Navbar, Start, WhoAmI, Formation, Technologies, Projects, ContactMe } from '../../exports/exports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Root = () => {

	// obtención del estado persistido
	const persistedThemeState = localStorage.getItem('themeState');

	// estado inicial
	const initialState = { themeState: (persistedThemeState == 'dark') ? 'dark' : 'light' };

	// reductor
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

	// hook useReducer
	const [state, dispatch] = useReducer(theme, initialState);

	// persistencia del estado
	localStorage.setItem('themeState', state.themeState);

	return (
		<Context.Provider value={{ state, dispatch }}>
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
		</Context.Provider>
	);

};

export default Root;