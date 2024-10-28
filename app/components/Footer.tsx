const navigation = [
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/nyanlintun/",
		icon: "/linkedin.webp",
	},
	{
		name: "X",
		href: "https://x.com/devkonyan",
		icon: "/x.webp",
	},
	{
		name: "GitHub",
		href: "#",
		icon: "/github.webp",
	},
];

export default function Footer() {
	return (
		<footer className="bg-transparent">
			<div className="mx-auto w-full px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center gap-x-6 md:order-2">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-300"
						>
							<span className="sr-only">{item.name}</span>
							<img
								aria-hidden="true"
								className="h-12 w-12"
								src={item.icon}
								alt={item.name}
							/>
						</a>
					))}
				</div>
				<p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
					&copy; 2024 Nyan Lin Tun, be a nerd.
				</p>
			</div>
		</footer>
	);
}
