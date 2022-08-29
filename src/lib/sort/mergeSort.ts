import { Dispatch, SetStateAction } from 'react';
import { SortArray } from '../../context/ContextProvider';
import { arrayColors } from '../../data';
import { finishedAnimation, sleep } from '../../utils';

export const mergeSort = async (
	array: number[],
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>,
	setSortDisableOptions: Dispatch<SetStateAction<boolean>>,
	setSortArraySorted: Dispatch<SetStateAction<boolean>>
) => {
	const currentArr = array;
	await sort(currentArr, 0, currentArr.length - 1, animationSpeed, setSortArray);
	finishedAnimation(array, animationSpeed, setSortDisableOptions);
	setSortArraySorted(true);
};

const sort = async (
	arr: number[],
	low: number,
	high: number,
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>
) => {
	if (low < high) {
		const mid = Math.floor((low + high) / 2);
		await sort(arr, low, mid, animationSpeed, setSortArray);
		await sort(arr, mid + 1, high, animationSpeed, setSortArray);
		await merge(arr, low, mid, high, animationSpeed, setSortArray);
	}
};

const merge = async (
	arr: number[],
	low: number,
	mid: number,
	high: number,
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>
) => {
	let i = low;
	let j = mid + 1;
	let k = 0;
	const tempArr = [];
	const primaryArray = arr;

	while (i <= mid && j <= high) {
		if (arr[i] < arr[j]) {
			tempArr[k] = arr[i];
			i++;
			k++;
		} else {
			tempArr[k] = arr[j];
			j++;
			k++;
		}
		setSortArray([...primaryArray, tempArr] as number[]);

		const barOne = document.getElementById(i.toString())?.style;
		const barTwo = document.getElementById(j.toString())?.style;
		if (barOne) barOne.backgroundColor = arrayColors.red;
		if (barTwo) barTwo.backgroundColor = arrayColors.blue;

		await sleep(animationSpeed);

		if (barOne) barOne.backgroundColor = arrayColors.orange;
		if (barTwo) barTwo.backgroundColor = arrayColors.orange;
	}

	while (i <= mid) {
		tempArr[k] = arr[i];

		setSortArray([...primaryArray, tempArr] as number[]);

		const barOne = document.getElementById(i.toString())?.style;
		const barTwo = document.getElementById(j.toString())?.style;
		if (barOne) barOne.backgroundColor = arrayColors.red;
		if (barTwo) barTwo.backgroundColor = arrayColors.blue;

		await sleep(animationSpeed);

		if (barOne) barOne.backgroundColor = arrayColors.orange;
		if (barTwo) barTwo.backgroundColor = arrayColors.orange;

		i++;
		k++;
	}

	while (j <= high) {
		tempArr[k] = arr[j];

		setSortArray([...primaryArray, tempArr] as number[]);

		const barOne = document.getElementById(i.toString())?.style;
		const barTwo = document.getElementById(j.toString())?.style;
		if (barOne) barOne.backgroundColor = arrayColors.red;
		if (barTwo) barTwo.backgroundColor = arrayColors.blue;

		await sleep(animationSpeed);

		if (barOne) barOne.backgroundColor = arrayColors.orange;
		if (barTwo) barTwo.backgroundColor = arrayColors.orange;

		j++;
		k++;
	}

	for (let i = low; i <= high; i++) {
		arr[i] = tempArr[i - low];
		setSortArray([...primaryArray, tempArr] as number[]);
	}
};
