import { Dispatch, SetStateAction } from 'react';
import { SortArray } from '../../context/ContextProvider';
import { arrayColors } from '../../data';
import { finishedAnimation, sleep } from '../../utils';

export const selectionSort = async (
	array: number[],
	animationSpeed: number,
	setSortArray: Dispatch<SetStateAction<SortArray>>,
	setSortDisableOptions: Dispatch<SetStateAction<boolean>>,
	setSortArraySorted: Dispatch<SetStateAction<boolean>>
) => {
	const currentArray = array;
	let sorted = false;

	while (!sorted) {
		sorted = true;
		setSortArraySorted(true);

		const len = array.length;

		for (let i = 0; i < len - 1; i++) {
			for (let j = i + 1; j < len; j++) {
				if (currentArray[i] > currentArray[j]) {
					const swapOne = currentArray[i];
					const swapTwo = currentArray[j];
					currentArray[i] = swapTwo;
					currentArray[j] = swapOne;
					setSortArray([...array, currentArray] as number[]);

					const barOne = document.getElementById(i.toString())?.style;
					const barTwo = document.getElementById(j.toString())?.style;
					if (barOne) barOne.backgroundColor = arrayColors.red;
					if (barTwo) barTwo.backgroundColor = arrayColors.blue;

					await sleep(animationSpeed);

					if (barOne) barOne.backgroundColor = arrayColors.orange;
					if (barTwo) barTwo.backgroundColor = arrayColors.orange;

					sorted = false;
				}
			}
		}
		if (sorted) finishedAnimation(array, animationSpeed, setSortDisableOptions);
	}
};
