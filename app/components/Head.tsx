const Head = () => {
	return (
		<header className="flex ">
			<div className="w-full flex justify-between items-end  md:items-center">
				<div className="flex flex-col md:flex-row items-start md:items-center gap-4">
					<img
						className="rounded-full md:rounded-lg w-16 h-16  md:w-12 md:h-12 object-cover"
						alt="portfolio"
						src="/profile.jpg"
					/>
					<div>
						<h1 className="text-lg md:text-2xl font-bold">NYAN LIN TUN</h1>
						<p className="text-sm md:text-lg font-normal">
							Full-Stack Developer
						</p>
					</div>
				</div>
				<div>
					<button
						className="rounded-full px-6 py-3 text-sm
					md:text-lg bg-white shadow-md font-bold text-black"
						type="button"
						onClick={() => {
							window.location.href = "mailto:devkonyan@gmail.com";
						}}
					>
						Contact Me
					</button>
				</div>
			</div>
		</header>
	);
};

export default Head;
