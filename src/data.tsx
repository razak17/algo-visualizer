import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { SortAlgorithm } from './context/ContextProvider';

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

export const sortInfo: SortAlgorithm[] = [
	{ name: 'bubbleSort', title: 'Bubble Sort', timeComplexity: 'O(n^2)' },
	{ name: 'insertionSort', title: 'Insertion Sort', timeComplexity: 'O(n^2)' },
	{ name: 'heapSort', title: 'Heap Sort', timeComplexity: 'O(n log(n))' },
	{ name: 'mergeSort', title: 'Merge Sort', timeComplexity: 'O(n log(n))' },
	{ name: 'quickSort', title: 'Quick Sort', timeComplexity: 'O(n log(n))' },
	{ name: 'selectionSort', title: 'Selection Sort', timeComplexity: 'O(n^2)' }
];
