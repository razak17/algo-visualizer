import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import PathFinder from './pages/PathFinder';
import PrimeNumbers from './pages/PrimeNumbers';
import Sorting from './pages/Sorting';

function App() {
	return (
		<div className='Dark'>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/home' element={<Home />} />
							<Route path='/sort' element={<Sorting />} />
							<Route path='/path-finder' element={<PathFinder />} />
							<Route path='/prime-numbers' element={<PrimeNumbers />} />
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
