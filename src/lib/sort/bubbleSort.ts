import { Dispatch, SetStateAction } from 'react';
import { SortAlgorithm, SortArray } from '../../context/ContextProvider';
import { sleep, finishedAnimation } from '../../utils';

export const bubbleSort = async (
	array: number[],
	setSortAlgorithm: Dispatch<SetStateAction<SortAlgorithm>>,
	setSortArray: Dispatch<SetStateAction<SortArray>>,
	animationSpeed: number
) => {
	const currentArr = array;
	let sorted = false;
	setSortAlgorithm({ name: 'Bubble Sort', timeComplexity: 'O(n^2)' });

	while (!sorted) {
		sorted = true;

		for (let i = 0; i < currentArr.length - 1; i++) {
			for (let j = 0; j < currentArr.length - i - 1; j++) {
				if (currentArr[j] > currentArr[j + 1]) {
					const temp = currentArr[j];
					currentArr[j] = currentArr[j + 1];
					currentArr[j + 1] = temp;
					setSortArray([...array, currentArr] as number[]);

					const leftBar = document.getElementById(j.toString())?.style;
					const rightBar = document.getElementById((j + 1).toString())?.style;
					if (leftBar) leftBar.backgroundColor = '#DC143C';
					if (rightBar) rightBar.backgroundColor = '#6A5ACD';
					await sleep(animationSpeed);

					if (leftBar) leftBar.backgroundColor = '#FF7F50';
					if (rightBar) rightBar.backgroundColor = '#FF7F50';

					sorted = false;
				}
			}
		}
		if (sorted) finishedAnimation(array, animationSpeed);
	}
};
