interface WorkItemProps {
	startDate: string;
	endDate?: string;
	position: string;
	name: string;
}
const WorkItem: React.FC<WorkItemProps> = ({
	startDate,
	endDate,
	position,
	name,
}) => {
	return (
		<div className="flex justify-between items-start border-b-black/30 border-b-[1px] py-4  ">
			<p className="text-black/50 w-[120px]">
				{new Date(startDate).getFullYear()} -{" "}
				{new Date(endDate).getFullYear() || "present"}
			</p>
			<div className="flex flex-col justify-start flex-auto space-y-1">
				<h4 className="text-black font-bold text-lg">{position}</h4>
				<span className="text-black/50 ">{name}</span>
			</div>
		</div>
	);
};

export default WorkItem;
