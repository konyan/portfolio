"use client";

import Image from "next/image";
import Head from "./components/Head";
import WorkItem from "./components/WorkItem";
import data from "./data/resume";
import AboutMe from "./components/AboutMe";
import OpensourceItem from "./components/OpensourceItem";
import ToolItem from "./components/ToolItem";
import Github from "./components/Github";

export default function Home() {
	const skills = data.skills.map((skill) => skill.keywords);
	return (
		<div className="flex flex-1">
			<div className="container w-[94%] mx-auto relative">
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
					<div className="order-4">
						<div>1</div>
						<div>2</div>
					</div>
				</div>
				<footer>gello</footer>
			</div>
		</div>
	);
}
