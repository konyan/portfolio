interface OpensourceItemProps {
	projectName: string;
	projectDescription: string;
	imageUrl: string;
}

const OpensourceItem: React.FC<OpensourceItemProps> = ({
	projectName,
	projectDescription,
	imageUrl,
}) => {
	return (
		<div className="flex justify-between items-center gap-2 rounded-lg overflow-hidden bg-gray-300/50 snap-start">
			<img
				alt={projectName}
				src={imageUrl}
				className="w-20 h-auto bg-white min-w-20"
			/>
			<div className="flex flex-col text-black bg-gray-300/50 p-2">
				<h4 className="font-bold">{projectName}</h4>
				<p className="line-clamp-3">{projectDescription}</p>
			</div>
		</div>
	);
};
export default OpensourceItem;
