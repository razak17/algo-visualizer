import { useEffect, useState } from 'react';

const ARRAYSIZE = 80;

const Sorting = () => {
	const [primaryArray, setPrimaryArray] = useState<number[]>([]);

	const randomizeArray = () => {
		for (let i = 0; i < primaryArray.length; i++) {
			const bar = document.getElementById(i.toString())?.style;
			if (bar) bar.backgroundColor = '#ff7f50';
		}
		const array = [];
		for (let i = 0; i < ARRAYSIZE; i++) {
			array.push(randomVals(20, 400));
		}

		setPrimaryArray(array);
	};

	const randomVals = (min: number, max: number) => {
		const randomVal = Math.floor(Math.random() * (max - min + 1) + min);
		return randomVal;
	};

	useEffect(() => {
		randomizeArray();
	}, []);

	const sleep = (milliSeconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliSeconds));
	};

	return (
		<div className='p-2 md:ml-6 md:mr-6'>
			<div className='m-3'>
				<h1>Sorting</h1>
				<div className='mt-8'>
					{primaryArray &&
						primaryArray.map((val, key) => {
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
