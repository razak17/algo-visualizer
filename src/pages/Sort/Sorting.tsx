import { useEffect } from 'react';
import { useStateContext } from '../../context/ContextProvider';
import { bubbleSort } from '../../lib/sort/bubbleSort';

const ARRAYSIZE = 80;

const Sorting = () => {
  const { sortArray, setSortArray, sortAlgorithm, setSortAlgorithm } = useStateContext();

	const randomizeArray = () => {
		for (let i = 0; i < sortArray.length; i++) {
			const bar = document.getElementById(i.toString())?.style;
			if (bar) bar.backgroundColor = '#ff7f50';
		}
		const array = [];
		for (let i = 0; i < ARRAYSIZE; i++) {
			array.push(randomValues(20, 400));
		}

		setSortArray(array);
	};

	const randomValues = (min: number, max: number) => {
		const randomVal = Math.floor(Math.random() * (max - min + 1) + min);
		return randomVal;
	};

	useEffect(() => {
		randomizeArray();
	}, []);

	const sleep = (milliseconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	const handleSorting = () => {
		switch (sortAlgorithm.name) {
			case 'Bubble Sort':
				bubbleSort(sortArray, setSortAlgorithm, setSortArray);
				break;
			default:
				break;
		}
	};

	return (
		<div className='p-2 md:ml-6 md:mr-6'>
			<div className='m-3'>
				<h1>Sorting</h1>
				<button onClick={handleSorting} name='Sort'>
					Sort
				</button>

				<div className='mt-8'>
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
			</div>
		</div>
	);
};

export default Sorting;
