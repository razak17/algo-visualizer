import { FC } from '../types';

const Button: FC<{
	name: string;
	disabled: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}> = ({ name, disabled, onClick }) => {
	return (
		<button
			className='pr-3 pl-3 bg-orange-400 text-gray-700 rounded-lg text-md hover:bg-orange-300'
			disabled={disabled}
			onClick={onClick}
		>
			{name}
		</button>
	);
};

export default Button;
