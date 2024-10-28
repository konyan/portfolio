"use client";

import Image from "next/image";
import Head from "./components/Head";
import WorkItem from "./components/WorkItem";
import data from "./data/resume";
import AboutMe from "./components/AboutMe";
import OpensourceItem from "./components/OpensourceItem";
import ToolItem from "./components/ToolItem";
import Github from "./components/Github";
import Footer from "./components/Footer";
import AnimatedGridPattern from "./components/GridPattern";
import { cn } from "./utils/cn";

export default function Home() {
	const skills = data.skills.map((skill) => skill.keywords);
	return (
		<div className="flex flex-1">
			<div className="container w-[94%] mx-auto relative">
				<AnimatedGridPattern
					numSquares={30}
					maxOpacity={0.1}
					duration={3}
					repeatDelay={1}
					className={cn(
						"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
						"inset-x-0 inset-y-[-30%] h-[100%] skew-y-12",
					)}
				/>
				<Head />
				<div className="bento">
					<section className="bento-item relative overflow-hidden order-2 md:order-1">
						<h2 className="text-black text-xl font-bold mb-4">Opensources</h2>
						<div className="overflow-y-scroll h-full space-y-2 pb-12 snap-y scroll-pt-4 ">
							{data.opensources.map((source) => (
								<OpensourceItem key={source.projectName} {...source} />
							))}
						</div>
						<div className="blur-2xl absolute bottom-0 h-14 block bg-white left-0 right-0" />
					</section>
					<div className="bento-two-cols relative order-1 md:order-2">
						<AboutMe />
						<div className="w-full h-full overflow-hidden ">
							<h2 className="text-black text-xl font-bold mb-4">
								Skills / Tools
							</h2>

							<div className="overflow-x-scroll h-full space-y-4 flex flex-col ">
								{skills.map((source, i) => (
									<div key={source[0]} className="flex gap-2 w-[1140px]">
										{source.map((s) => (
											<ToolItem key={s} name={s} index={i} />
										))}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="bento-item order-3">
						<h2 className="text-black text-xl font-bold mb-4">
							Work/Experiences
						</h2>
						<div className="overflow-y-scroll h-full space-y-2 pb-12 snap-y scroll-pt-4 ">
							{data.work.map((work) => (
								<WorkItem key={work.name} {...work} />
							))}
						</div>
						<div className="blur-2xl absolute bottom-0 h-14 block bg-white left-0 right-0" />
					</div>
					<div className="bento-item order-5 bento-git">
						<Github />
					</div>
					<div className="grid grid-cols-2 order-4 gap-2">
						<div className="grid grid-rows-2 gap-2">
							<div className="rounded-2xl bg-white p-4 flex flex-col space-y-2 ">
								<h2 className="text-black text-xl font-bold mb-4">
									CV / Resume
								</h2>
								<button
									type="button"
									className="flex w-full rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
								>
									View
								</button>
								<button
									type="button"
									className="w-full flex rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
								>
									Download
								</button>
							</div>
							<div className="rounded-2xl bg-white p-4 flex flex-col space-y-2 ">
								<h2 className="text-black text-xl font-bold mb-4">Motto</h2>
							</div>
						</div>
						<div className="rounded-2xl bg-white p-4 flex flex-col space-y-2 ">
							<h2 className="text-black text-xl font-bold mb-4">Blogs</h2>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
