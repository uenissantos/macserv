import { BrowserRouter, Routes, Route } from 'react-router-dom'; import { Home } from '../Home/Home';
function App() {

	return (

		<BrowserRouter>
			<Routes>


				<Route element={<Home />} />



			</Routes>

			<h2>app</h2>

		</BrowserRouter >

	);
}

export default App;
