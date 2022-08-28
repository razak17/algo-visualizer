import { FC } from '../types';

const Dropdown: FC<{
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
	disabled: boolean;
}> = ({ onChange, disabled }) => {
	return (
		<div className='rounded-sm text-gray-700'>
			<select
				className='bg-orange-300 p-4 rounded-lg cursor-pointer border-none text-md'
				onChange={onChange}
				disabled={disabled}
			>
				<option value='bubbleSort'>Bubble Sort</option>
				<option value='heapSort'>Heap Sort</option>
				<option value='insertionSort'>Insertion Sort</option>
				<option value='mergeSort'>Merge Sort</option>
				<option value='quickSort'>Quick Sort</option>
				<option value='selectionSort'>Selection Sort</option>
			</select>
		</div>
	);
};

export default Dropdown;
