import { FC } from '../types';

const Dropdown: FC<{
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
	disabled: boolean;
}> = ({ onChange, disabled }) => {
  const styles = 'p-4 rounded-lg border-none text-md'

	return (
		<div className='rounded-sm text-gray-700'>
			<select
        className={(disabled ? `${styles} bg-gray-500 text-gray-300` : `${styles} bg-orange-300 cursor-pointer`)}
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
