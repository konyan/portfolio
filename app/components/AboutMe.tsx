import ShineBorder from "./ShineBorder";

const AboutMe = () => {
	return (
		<ShineBorder
			color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
			className="relative bento-item  border bg-background md:shadow-xl !bg-white"
			borderWidth="4"
			borderRadius="32"
		>
			<h2 className="text-black text-xl font-bold mb-4">About me</h2>
			<div className="text-black bg-gray-300/50 rounded-2xl p-4">
				I thrive on solving complex problems and developing innovative solutions
				that drive business success over 8 years of professional experience in
				Software Development field. I am passionate about building things from
				scratch, writing clean and efficient code, and debugging to deliver
				outstanding results. Beyond coding, I am deeply interested in design,
				startups, and technology. Whether it's crafting compelling websites,
				exploring the potential of Blockchain and mining tech, or devising
				innovative solutions for mobile applications
			</div>
		</ShineBorder>
	);
};
export default AboutMe;
