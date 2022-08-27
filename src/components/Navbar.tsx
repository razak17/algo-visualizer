import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useStateContext } from '../context/ContextProvider';
import { FC } from '../types';

const NavButton: FC<{
	title: string;
	customFunc: () => void;
	icon: JSX.Element;
	color?: string;
	dotColor?: string;
}> = ({ customFunc, icon, color, dotColor }) => (
	<button
		type='button'
		onClick={() => customFunc()}
		style={{ color }}
		className='relative text-xl rounded-full p-3'
	>
		<span
			style={{ background: dotColor }}
			className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
		/>
		{icon}
	</button>
);

const Navbar = () => {
	const { activeMenu, setActiveMenu, setScreenSize, screenSize } =
		useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, [screenSize, setScreenSize]);

	useEffect(() => {
		const screenSizeExists = screenSize && screenSize <= 900;
		if (screenSizeExists) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize, setActiveMenu]);

	const handleActiveMenu = () => setActiveMenu(!activeMenu);

	return (
		<div className='flex justify-between p-2 md:ml-6 md:mr-6 relative'>
			<NavButton
				title='Menu'
				customFunc={handleActiveMenu}
				icon={<AiOutlineMenu />}
			/>
			<ul className='flex justify-between p-2 relative'>
				{['Complexity', 'About', 'Contact'].map((item) => (
					<li key={`link-${item}`}>
						<a href='' className='pl-6'>
              {item}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
