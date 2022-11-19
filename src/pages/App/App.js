import { BrowserRouter, Routes, Route } from 'react-router-dom'; import { FirstPage } from '../FirstPage/FirstPage';
import { Home } from '../Home/Home';
function App() {

	return (

		<BrowserRouter>
			<Routes>


				<Route element={<Home />} >

					<Route path='/' element={<FirstPage />} />


				</Route>






			</Routes>


		</BrowserRouter >

	);
}

export default App;
