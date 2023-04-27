interface ButtonProps {
	name: string;
	disabled: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ name, disabled, onClick }: ButtonProps) => {
	const styles = 'pr-3 pl-3 text-gray-700 rounded-lg text-md';
	return (
		<button
			className={
				disabled
					? `${styles} bg-gray-500 text-gray-300`
					: `${styles} bg-orange-400  hover:bg-orange-300`
			}
			disabled={disabled}
			onClick={onClick}
		>
			{name}
		</button>
	);
};

export default Button;
