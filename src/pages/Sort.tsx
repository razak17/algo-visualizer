import { useEffect, useState } from 'react';

import Dropdown from '../components/Dropdown';
import { SortName, useStateContext } from '../context/ContextProvider';
import { bubbleSort } from '../lib/sort/bubbleSort';
import { randomValues } from '../utils';
import { arrayColors, sortInfo } from '../data';
import Button from '../components/Button';
import { heapSort } from '../lib/sort/heapSort';
import { insertionSort } from '../lib/sort/insertionSort';
import { mergeSort } from '../lib/sort/mergeSort';
import { quickSort } from '../lib/sort/quickSort';
import { selectionSort } from '../lib/sort/selectionSort';

const ARRAYSIZE = 20;

const Sorting = () => {
	const [animationSpeed, setAnimationSpeed] = useState(50);
	const [arraySize, setArraySize] = useState(ARRAYSIZE);
	const [sliderValue, setSliderValue] = useState(5);

	const {
		sortArray,
		setSortArray,
		sortAlgorithm,
		setSortAlgorithm,
		sortDisableOptions,
		setSortDisableOptions,
		sortArraySorted,
		setSortArraySorted
	} = useStateContext();

	const randomizeArray = () => {
		for (let i = 0; i < sortArray.length; i++) {
			const bar = document.getElementById(i.toString())?.style;
			if (bar) bar.backgroundColor = arrayColors.orange;
		}
		const array = [];
		for (let i = 0; i < arraySize; i++) {
			array.push(randomValues(20, 400));
		}
		setSortArray(array);
		setSortArraySorted(false);
	};

	useEffect(() => {
		randomizeArray();
	}, [arraySize]);

	const sliderValues = [
		{ id: 5, val: 50 },
		{ id: 4, val: 150 },
		{ id: 3, val: 300 },
		{ id: 2, val: 400 },
		{ id: 1, val: 500 }
	];

	const handleSlider = (e: string) => {
		const valToInt = parseInt(e);
		setSliderValue(valToInt);
		const target = sliderValues.find((e) => e.id === valToInt);
		target && setAnimationSpeed(target.val);
	};

	const handleSorting = () => {
		setSortDisableOptions(true);
		const target = sortInfo.find((e) => e.name === sortAlgorithm.name);
		target && setSortAlgorithm(target);

		if (sortAlgorithm.title === 'Bubble Sort')
			bubbleSort(
				sortArray,
				animationSpeed,
				setSortArray,
				setSortDisableOptions,
				setSortArraySorted
			);

		if (sortAlgorithm.title === 'Heap Sort')
			heapSort(
				sortArray,
				animationSpeed,
				setSortArray,
				setSortDisableOptions,
				setSortArraySorted
			);
		if (sortAlgorithm.title === 'Insertion Sort')
			insertionSort(
				sortArray,
				animationSpeed,
				setSortArray,
				setSortDisableOptions,
				setSortArraySorted
			);
		if (sortAlgorithm.title === 'Merge Sort')
			mergeSort(
				sortArray,
				animationSpeed,
				setSortArray,
				setSortDisableOptions,
				setSortArraySorted
			);
		if (sortAlgorithm.title === 'Quick Sort')
			quickSort(
				sortArray,
				animationSpeed,
				setSortArray,
				setSortDisableOptions,
				setSortArraySorted
			);
		if (sortAlgorithm.title === 'Selection Sort')
			selectionSort(
				sortArray,
				animationSpeed,
				setSortArray,
				setSortDisableOptions,
				setSortArraySorted
			);
	};

	const handleAlgorithm = (algorithm: SortName) => {
		const target = sortInfo.find((e) => e.name === algorithm);
		if (target) setSortAlgorithm(target);
	};

	return (
		<div className='p-2 md:ml-6 md:mr-6'>
			<div className='m-2'>
				<div className='flex justify-between pt-2 pb-2 align-middle relative'>
					<Button
						name='New Array'
						onClick={randomizeArray}
						disabled={sortDisableOptions}
					/>
					<Dropdown
						onChange={(e) => handleAlgorithm(e.target.value as SortName)}
						disabled={sortDisableOptions}
					/>
					<div>
						<p>Animation Speed:</p>
						<input
							id='a_speed'
							type='range'
							min={1}
							max={5}
							step={1}
							value={sliderValue}
							disabled={sortDisableOptions}
							className='cursor-pointer'
							onChange={(e) => handleSlider(e.target.value)}
						></input>
					</div>
					<div>
						<p>Array Size:</p>
						<input
							id='arr_size'
							type='range'
							min={20}
							max={80}
							step={5}
							value={arraySize}
							disabled={sortDisableOptions}
							className='cursor-pointer'
              onChange={(e) => setArraySize(parseInt(e.target.value))}
						></input>
					</div>
					<Button
						name='Sort'
						onClick={handleSorting}
						disabled={sortDisableOptions || sortArraySorted}
					/>
				</div>
				<div className='mt-6 w-full items-center'>
					{sortArray &&
						sortArray.map((val, key) => {
							return (
								<div
									className='w-2 ml-1 inline-block rounded-lg bg-orange-400'
									id={key.toString()}
									key={key}
									style={{ height: val }}
								></div>
							);
						})}
				</div>
				{sortAlgorithm.name && (
					<div className='flex justify-center items-center rounded-lg h-12 border-2 border-orange-400 mt-2'>
						<div className='text-lg'>Algorithm: {sortAlgorithm.title}</div>
						<div className='ml-12 text-lg'>
							Time Complexity: {sortAlgorithm.timeComplexity}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Sorting;
