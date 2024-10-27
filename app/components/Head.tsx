const Head = () => {
	return (
		<header className="flex ">
			<div className="w-full flex justify-between items-end  md:items-center">
				<div className="flex flex-col md:flex-row items-start md:items-center gap-4">
					<img
						className="rounded-full md:rounded-lg w-16 h-16  md:w-12 md:h-12"
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
						alt="portfolio"
					/>
					<div>
						<h1 className="text-lg md:text-2xl font-bold">NYAN LIN TUN</h1>
						<p className="text-sm md:text-lg font-normal">Software Engineer</p>
					</div>
				</div>
				<div>
					<button
						className="rounded-full px-6 py-3 text-sm
					md:text-lg bg-white shadow-md font-bold text-black"
						type="button"
					>
						Contact Me
					</button>
				</div>
			</div>
		</header>
	);
};

export default Head;
