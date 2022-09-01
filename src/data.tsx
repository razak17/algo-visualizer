import { FiShoppingBag } from 'react-icons/fi';
import { SortAlgorithm } from './context/ContextProvider';

export const links = [
	{
		title: 'Dashboard',
		links: [
			{
				name: 'home',
				to: '#',
				icon: <FiShoppingBag />
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

export const arrayColors = {
	red: '#DC143C',
	blue: '#6A5ACD',
	orange: '#FB923C'
};
