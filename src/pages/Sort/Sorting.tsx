import { useEffect, useState } from 'react';

import Dropdown from '../../components/Dropdown';
import { Sort, useStateContext } from '../../context/ContextProvider';
import { bubbleSort } from '../../lib/sort/bubbleSort';
import { randomValues } from '../../utils';
import { sortInfo } from '../../data';
import Slider from '../../components/Slider';

const ARRAYSIZE = 80;

const Sorting = () => {
	const [animationSpeed, setAnimationSpeed] = useState(300);
	const [sliderValue, setSliderValue] = useState(4);

	const {
		sortArray,
		setSortArray,
		sortAlgorithm,
		setSortAlgorithm,
		sortDisableOptions,
		setSortDisableOptions
	} = useStateContext();

	useEffect(() => {
		randomizeArray();
	}, []);

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

	const handleSlider = (e: string) => {
		console.log(e);
		setSliderValue(parseInt(e));
	};

	const handleSorting = () => {
		setSortDisableOptions(true);
		switch (sortAlgorithm.name) {
			case 'Bubble Sort':
				bubbleSort(
					sortArray,
					animationSpeed,
					setSortAlgorithm,
					setSortArray,
					setSortDisableOptions
				);
				break;
			default:
				break;
		}
	};

	const handleAlgorithm = (algorithm: Sort) => {
		const target = sortInfo.find((e) => e.name === algorithm);
		if (target)
			setSortAlgorithm({ name: algorithm, timeComplexity: target.timeComplexity });
	};

	return (
		<div className='p-2 md:ml-6 md:mr-6'>
			<div className='m-3'>
				<div className='flex justify-between pt-2 pb-2 align-middle relative'>
					<button onClick={randomizeArray} disabled={sortDisableOptions}>
						New Array
					</button>
					<Dropdown
						onChange={(e) => handleAlgorithm(e.target.value as Sort)}
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
							onChange={(e) => handleSlider(e.target.value)}
						></input>
					</div>
					<button onClick={handleSorting} disabled={sortDisableOptions}>
						Sort
					</button>
				</div>
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
