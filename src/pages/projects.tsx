import { AnimatePresence } from 'framer-motion';
import { NotionAPI } from 'notion-client';
import React from 'react';

import Framer from '@/components/Framer';
import ProjectCard, { IProjectCard } from '@/components/ProjectCard';

import { getNotionData } from '@/server';

export const getStaticProps = async () => {
	const notion = new NotionAPI();
	const page = await notion.getPage('94a940c66fac40a98a7eda9a93e74e90');
	const { collection } = page;
	const [collectionSchema] = Object.values(collection);
	const { schema } = collectionSchema.value;

	const response = getNotionData(page, schema);

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
					<Framer.AppearFromLeft
						key={index}
						delay={(index / 2) * 0.001}
					>
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
