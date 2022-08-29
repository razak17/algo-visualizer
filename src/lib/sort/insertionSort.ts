import { Dispatch, SetStateAction } from 'react';
import { SortArray } from '../../context/ContextProvider';
import { arrayColors } from '../../data';
import { finishedAnimation, sleep } from '../../utils';

export const insertionSort = async (
	array: number[],
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>,
	setSortDisableOptions: Dispatch<SetStateAction<boolean>>,
	setSortArraySorted: Dispatch<SetStateAction<boolean>>
) => {
	const currentArr = array;
	let sorted = false;
	while (!sorted) {
		sorted = true;
		setSortArraySorted(true);

		for (let i = 1; i < currentArr.length; i++) {
			const current = currentArr[i];
			let j = i - 1;
			while (j >= 0 && currentArr[j] > current) {
				currentArr[j + 1] = currentArr[j];
				setSortArray([...array, currentArr] as number[]);
				const barOne = document.getElementById((j + 1).toString())?.style;
				const barTwo = document.getElementById(j.toString())?.style;
				if (barOne) barOne.backgroundColor = arrayColors.red;
				if (barTwo) barTwo.backgroundColor = arrayColors.blue;

				await sleep(animationSpeed);

				if (barOne) barOne.backgroundColor = arrayColors.orange;
				if (barTwo) barTwo.backgroundColor = arrayColors.orange;

				j--;
				sorted = false;
			}
			currentArr[j + 1] = current;
			setSortArray([...array, currentArr] as number[]);
		}
		if (sorted) finishedAnimation(array, animationSpeed, setSortDisableOptions);
	}
};
