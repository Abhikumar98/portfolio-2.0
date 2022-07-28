import React from 'react';

import Heading from '@/components/Heading';

export interface IProjectCard {
	readonly projectName: string;
	readonly url: string;
	readonly image: string;
	readonly description: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
	projectName,
	url,
	image,
	description,
}) => {
	return (
		<a
			target="_blank"
			href={url}
			rel="noreferrer"
			className="flex w-full flex-col-reverse rounded-md py-8 hover:shadow-md sm:justify-between md:-m-8 md:flex-row md:p-8"
		>
			<div className="mt-8 md:mt-0 md:mr-12">
				<span className="inline-block text-2xl font-bold">
					<Heading>{projectName}</Heading>
				</span>
				<div className="text-secondary">{description}</div>
			</div>
			<img className="max-w-sm rounded-md" alt="Test Image" src={image} />
		</a>
	);
};

export default ProjectCard;
