import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react';
type initialStateType = {
	chat: boolean;
	cart: boolean;
	userProfile: boolean;
	notification: boolean;
};

type ScreenSizeType = number | undefined;

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
				setIsClicked
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () =>
	useContext(StateContext) as CreateContextType;
