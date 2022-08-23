import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import PathFinder from './pages/PathFinder';
import PrimeNumbers from './pages/PrimeNumbers';
import Sorting from './pages/Sorting';
import { useStateContext } from './context/ContextProvider';

import './App.css';
import Sidebar from './components/Sidebar';

function App() {
	const { activeMenu } = useStateContext();

	return (
		<div className='dark'>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							<Sidebar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}
					<div
						className={
							activeMenu
								? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
								: 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
						}
					>
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
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
