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
	activeMenu: boolean;
	setActiveMenu: Dispatch<SetStateAction<boolean>>;
	initialState: initialStateType;
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

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				screenSize,
				setScreenSize,
				initialState
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () =>
	useContext(StateContext) as CreateContextType;
