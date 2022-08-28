import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react';

export type initialStateType = {
	chat: boolean;
	cart: boolean;
	userProfile: boolean;
	notification: boolean;
};

export type ScreenSizeType = number | undefined;
export type SortArray = number[];

export type SortName = 'bubbleSort' | 'heapSort' | 'insertionSort' | 'mergeSort' | 'quickSort' | 'selectionSort';
export type SortTitle = 'Bubble Sort' | 'Heap Sort' | 'Insertion Sort' | 'Merge Sort' | 'Quick Sort' | 'Selection Sort';
export type SortTimeComplexities = 'O(n^2)' | 'O(n log(n))';

export type SortAlgorithm = {
	name: SortName;
	title: SortTitle;
	timeComplexity: SortTimeComplexities;
};

/* eslint-disable no-unused-vars */
export type CreateContextType = {
	initialState: initialStateType;
	handleClick: (clicked: string) => void;
	activeMenu: boolean;
	setActiveMenu: Dispatch<SetStateAction<boolean>>;
	isClicked: initialStateType;
	setIsClicked: Dispatch<SetStateAction<initialStateType>>;
	screenSize: ScreenSizeType;
	setScreenSize: Dispatch<SetStateAction<ScreenSizeType>>;
	sortArray: SortArray;
	setSortArray: Dispatch<SetStateAction<SortArray>>;
	sortAlgorithm: SortAlgorithm;
	setSortAlgorithm: Dispatch<SetStateAction<SortAlgorithm>>;
  sortDisableOptions: boolean
	setSortDisableOptions: Dispatch<SetStateAction<boolean>>;
};

const StateContext = createContext<CreateContextType | undefined>(undefined);

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false
};

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState<ScreenSizeType>(undefined);
	const [isClicked, setIsClicked] = useState(initialState);
	const [sortArray, setSortArray] = useState<SortArray>([]);
	const [sortAlgorithm, setSortAlgorithm] = useState<SortAlgorithm>({
		name: 'bubbleSort',
		title: 'Bubble Sort',
		timeComplexity: 'O(n^2)'
	});
	const [sortDisableOptions, setSortDisableOptions] = useState(false);

	const handleClick = (clicked: string) =>
		setIsClicked({ ...initialState, [clicked]: true });

	return (
		<StateContext.Provider
			value={{
				initialState,
				handleClick,
				activeMenu,
				setActiveMenu,
				screenSize,
				setScreenSize,
				isClicked,
				setIsClicked,
				sortArray,
				setSortArray,
				sortAlgorithm,
				setSortAlgorithm,
        sortDisableOptions,
        setSortDisableOptions
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () =>
	useContext(StateContext) as CreateContextType;
