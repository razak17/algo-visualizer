import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sort from './pages/Sort';
import { useStateContext } from './context/ContextProvider';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	const { activeMenu } = useStateContext();

	return (
		<div className='dark'>
			<BrowserRouter>
				<div className='flex relative bg-main-dark-bg'>
					{activeMenu ? (
						<div className='w-72 fixed sidebar bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					) : (
						<div className='w-0 bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}
					<div
						className={
							activeMenu
								? 'bg-main-dark-bg  min-h-screen md:ml-72 w-full'
								: 'bg-main-dark-bg  w-full min-h-screen flex-2'
						}
					>
						<div className='fixed md:static bg-main-dark-bg navbar w-full'>
							<Navbar />
						</div>
						<div>
							<Routes>
								<Route path='/' element={<Sort />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
