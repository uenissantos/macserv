import { BrowserRouter, Routes, Route } from 'react-router-dom'; import { FirstPage } from '../FirstPage/FirstPage';
import { Home } from '../Home/Home';
import { Service } from '../Service/Service';
import { Orcamento } from '../Orcamento/Orcamento'
function App() {

	return (

		<BrowserRouter>
			<Routes>


				<Route element={<Home />} >

					<Route path='/' element={<FirstPage />} />
					<Route path='/servicos' element={<Service />} />
					<Route path='/orcamento' element={<Orcamento />} />


				</Route>






			</Routes>


		</BrowserRouter >

	);
}

export default App;
