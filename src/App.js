import { Routes, Route } from 'react-router-dom';
import FlavorList from './components/FlavorList';
import Flavor from './components/Flavor';
import Form from './components/Form';
import Nav from './components/Nav';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' exact element={<FlavorList />} />
				<Route path='/add-flavor' element={<Form />} />
				<Route path='/flavors/:id' element={<Flavor />} />
			</Routes>
		</>
	);
}

export default App;
