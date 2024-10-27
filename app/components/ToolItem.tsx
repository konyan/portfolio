interface ToolItemProps {
	name: string;
	index: number;
}

const ToolItem: React.FC<ToolItemProps> = ({ name, index }) => {
	const colors = [
		"bg-red-100",
		"bg-yellow-100",
		"bg-indigo-100",
		"bg-green-100",
	];
	return (
		<span
			className={`flex items-center gap-x-1.5 rounded-full px-2 py-1 text-sm font-bold text-gray-600  
			${colors[index]}`}
		>
			<svg
				viewBox="0 0 6 6"
				aria-hidden="true"
				className="h-1.5 w-1.5 fill-green-400"
			>
				<circle r={3} cx={3} cy={3} />
			</svg>
			{name}
		</span>
	);
};

export default ToolItem;
