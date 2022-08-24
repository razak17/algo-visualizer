import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';

export const links = [
	{
		title: 'Dashboard',
		links: [
			{
				name: 'home',
				to: 'home',
				icon: <FiShoppingBag />
			}
		]
	},
	{
		title: 'Pages',
		links: [
			{
				name: 'sort',
				to: 'sort',
				icon: <AiOutlineShoppingCart />
			},
			{
				name: 'Path Finder',
				to: 'path-finder',
				icon: <IoMdContacts />
			},
			{
				name: 'Prime Numbers',
				to: 'prime-numbers',
				icon: <RiContactsLine />
			}
		]
	}
];
