import React from 'react';

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
			{response.map((project, index) => (
				<ProjectCard
					key={index}
					projectName={project.projectName}
					url={project.url}
					description={project.description}
					image={project.image}
				/>
			))}
		</div>
	);
};

export default Projects;
