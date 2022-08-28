import { Dispatch, SetStateAction } from 'react';
import { SortArray } from '../../context/ContextProvider';
import { arrayColors } from '../../data';
import { finishedAnimation, sleep } from '../../utils';

const heapify = async (
	arr: number[],
	length: number,
	index: number,
	animationSpeed: number
) => {
	let largest = index;
	const leftNode = index * 2 + 1;
	const rightNode = leftNode + 1;

	if (arr[leftNode] > arr[largest] && leftNode < length) largest = leftNode;
	if (arr[rightNode] > arr[largest] && rightNode < length) largest = rightNode;

	if (largest !== index) {
		const swapOne = arr[index];
		const swapTwo = arr[largest];
		arr[index] = swapTwo;
		arr[largest] = swapOne;

		const barOne = document.getElementById(index.toString())?.style;
		const barTwo = document.getElementById(largest.toString())?.style;
		if (barOne) barOne.backgroundColor = arrayColors.red;
		if (barTwo) barTwo.backgroundColor = arrayColors.blue;

		await sleep(animationSpeed);

		if (barOne) barOne.backgroundColor = arrayColors.orange;
		if (barTwo) barTwo.backgroundColor = arrayColors.orange;

		await heapify(arr, length, largest, animationSpeed);
	}
	return arr;
};

export const heapSort = async (
	array: number[],
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>,
	setSortDisableOptions: Dispatch<SetStateAction<boolean>>,
	setSortArraySorted: Dispatch<SetStateAction<boolean>>
) => {
	const arr = array;
	const length = arr.length;
	let index = Math.floor(length / 2 - 1);
	let lastChild = length - 1;

	while (index >= 0) {
		await heapify(arr, length, index, animationSpeed);
		index--;

		setSortArray([...array, arr] as number[]);

		if (index >= 0) {
			const barOne = document.getElementById(index.toString())?.style;
			const barTwo = document.getElementById((index + 1).toString())?.style;
			if (barOne) barOne.backgroundColor = arrayColors.red;
			if (barTwo) barTwo.backgroundColor = arrayColors.blue;
			arrayColors.red;

			await sleep(animationSpeed);

			if (barOne) barOne.backgroundColor = arrayColors.orange;
			if (barTwo) barTwo.backgroundColor = arrayColors.orange;
		} else {
			await sleep(animationSpeed);
		}
	}

	while (lastChild >= 0) {
		const swapOne = arr[0];
		const swapTwo = arr[lastChild];

		arr[0] = swapTwo;
		arr[lastChild] = swapOne;
		await heapify(arr, lastChild, 0, animationSpeed);
		lastChild--;

		setSortArray([...array, arr] as number[]);

		if (index >= 0) {
			const barOne = document.getElementById(lastChild.toString())?.style;
			const barTwo = document.getElementById('0')?.style;
			if (barOne) barOne.backgroundColor = arrayColors.red;
			if (barTwo) barTwo.backgroundColor = arrayColors.blue;

			if (barOne) barOne.backgroundColor = arrayColors.orange;
			if (barTwo) barTwo.backgroundColor = arrayColors.orange;
		} else {
			await sleep(animationSpeed);
		}
	}

	finishedAnimation(array, animationSpeed, setSortDisableOptions);
	setSortArraySorted(true);
};
