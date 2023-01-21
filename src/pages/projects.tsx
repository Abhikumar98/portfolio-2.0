import { AnimatePresence } from 'framer-motion';
import React from 'react';

import Framer from '@/components/Framer';
import ProjectCard, { IProjectCard } from '@/components/ProjectCard';

import { getNotionData } from '@/server';

export const getStaticProps = async () => {
	const response = await getNotionData();

	return {
		props: { response },
		revalidate: 10,
	};
};

const Projects = ({ response }: { response: IProjectCard[] }) => {
	return (
		<div className="md:space-y-12">
			<AnimatePresence>
				{response.map((project, index) => (
					<Framer.AppearFromLeft key={index} delay={index * 0.3}>
						<ProjectCard
							index={index}
							projectName={project.projectName}
							url={project.url}
							description={project.description}
							image={project.image}
							tech={project.tech}
							producthunt={project.producthunt}
							blockId={project.blockId}
							trophy={project.trophy}
						/>
					</Framer.AppearFromLeft>
				))}
			</AnimatePresence>
		</div>
	);
};

export default Projects;
