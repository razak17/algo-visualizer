import { Dispatch, SetStateAction } from 'react';
import { SortArray } from '../../context/ContextProvider';
import { arrayColors } from '../../data';
import { finishedAnimation, sleep } from '../../utils';

// Quick Sort
export const quickSort = async (
	array: number[],
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>,
	setSortDisableOptions: Dispatch<SetStateAction<boolean>>,
	setSortArraySorted: Dispatch<SetStateAction<boolean>>
) => {
	const currentArr = array;
	await sorts(
		currentArr,
		0,
		currentArr.length - 1,
		animationSpeed,
		setSortArray
	);
	finishedAnimation(array, animationSpeed, setSortDisableOptions);
	setSortArraySorted(true);
};

const sorts = async (
	arr: number[],
	left: number,
	right: number,
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>
) => {
	const primaryArray = arr;
	if (left < right) {
		const partitionIndex = partition(arr, left, right, setSortArray);

		setSortArray([...primaryArray, arr] as number[]);
		await sleep(animationSpeed);
		await sorts(arr, left, partitionIndex - 1, animationSpeed, setSortArray);
		await sorts(arr, partitionIndex + 1, right, animationSpeed, setSortArray);
	}
};

const partition = (
	arr: number[],
	left: number,
	right: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>
) => {
	const primaryArray = arr;
	const pivot = arr[right];
	let i = left - 1;
	for (let j = left; j < right; j++) {
		if (arr[j] < pivot) {
			i++;
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

			const barOne = document.getElementById(i.toString())?.style;
			const barTwo = document.getElementById(j.toString())?.style;
			if (barOne) barOne.backgroundColor = arrayColors.red;
			if (barTwo) barTwo.backgroundColor = arrayColors.blue;

			setTimeout(() => {
				if (barOne) barOne.backgroundColor = arrayColors.orange;
				if (barTwo) barTwo.backgroundColor = arrayColors.orange;
			}, 200);

			setSortArray([...primaryArray, arr] as number[]);
		}
	}

	const temp = arr[i + 1];
	arr[i + 1] = arr[right];
	arr[right] = temp;

	return i + 1;
};
