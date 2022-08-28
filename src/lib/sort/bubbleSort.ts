import { Dispatch, SetStateAction } from 'react';
import { SortArray } from '../../context/ContextProvider';
import { arrayColors } from '../../data';
import { sleep, finishedAnimation } from '../../utils';

export const bubbleSort = async (
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

		for (let i = 0; i < currentArr.length - 1; i++) {
			for (let j = 0; j < currentArr.length - i - 1; j++) {
				if (currentArr[j] > currentArr[j + 1]) {
					const temp = currentArr[j];
					currentArr[j] = currentArr[j + 1];
					currentArr[j + 1] = temp;
					setSortArray([...array, currentArr] as number[]);

					const leftBar = document.getElementById(j.toString())?.style;
					const rightBar = document.getElementById((j + 1).toString())?.style;
					if (leftBar) leftBar.backgroundColor = arrayColors.red;
					if (rightBar) rightBar.backgroundColor = arrayColors.blue;
					await sleep(animationSpeed);

					if (leftBar) leftBar.backgroundColor = arrayColors.orange;
					if (rightBar) rightBar.backgroundColor = arrayColors.orange;

					sorted = false;
				}
			}
		}
		if (sorted) finishedAnimation(array, animationSpeed, setSortDisableOptions);
	}
};
