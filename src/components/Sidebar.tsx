import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../context/ContextProvider';
import { links } from '../data'

const Sidebar: React.FC = () => {
	const { activeMenu, setActiveMenu, screenSize } = useStateContext();

	const handleCloseSideBar = () => {
		const screenSizeExists = screenSize && screenSize <= 900;
		if (activeMenu !== undefined && screenSizeExists) {
			setActiveMenu(false);
		}
	};

	const link = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg';
	const activeLink = `${link} text-white  text-md m-2`;
	const normalLink = `${link} text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2`;

	return (
		<div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
			{activeMenu && (
				<>
					<div className='flex justify-between items-center'>
						<Link to='/' onClick={handleCloseSideBar}>
							<h1 className='pt-4 pl-4 text-xl text-white'>AlgoVisual</h1>
						</Link>
						<button
							type='button'
							onClick={() => setActiveMenu(!activeMenu)}
							style={{ color: '#03C9D7' }}
							className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
						>
							<MdOutlineCancel />
						</button>
					</div>
					<div className='mt-10 '>
						{links.map((item) => (
							<div key={item.title}>
								<p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>
									{item.title}
								</p>
								{item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={handleCloseSideBar}
										className={({ isActive }) => (isActive ? activeLink : normalLink)}
									>
										{link.icon}
										<span className='capitalize'>{link.name}</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Sidebar;
