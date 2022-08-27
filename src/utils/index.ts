export const sleep = (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const randomValues = (min: number, max: number) => {
	const randomVal = Math.floor(Math.random() * (max - min + 1) + min);
	return randomVal;
};

export const finishedAnimation = async (
	array: number[],
	animationSpeed: number
) => {
	for (let i = 0; i < array.length; i++) {
		const bar = document.getElementById(i.toString())?.style;
		if (bar) bar.backgroundColor = 'green';
		await sleep(animationSpeed);
	}
};
