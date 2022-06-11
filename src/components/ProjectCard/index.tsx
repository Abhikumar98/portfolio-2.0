import React from 'react';

import Heading from '@/components/Heading';

export interface IProjectCard {
	readonly title: string;
	readonly url: string;
	readonly bannerImage: string;
	readonly description: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
	title,
	url,
	bannerImage,
	description,
}) => {
	return (
		<div className="flex w-full flex-col-reverse rounded-md py-8 hover:shadow-md md:-m-8 md:flex-row md:p-8">
			<div className="mt-8 md:mt-0 md:mr-12">
				<a
					target="_blank"
					href={url}
					rel="noreferrer"
					className="inline-block text-2xl font-bold"
				>
					<Heading>{title}</Heading>
				</a>
				<div className="text-secondary">{description}</div>
			</div>
			<img className="rounded-md" alt="Test Image" src={bannerImage} />
		</div>
	);
};

export default ProjectCard;
