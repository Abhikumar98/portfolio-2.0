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
		<div className="-m-8 flex rounded-md p-8 hover:shadow-md">
			<div className=" mr-8">
				<a
					target="_blank"
					href={url}
					rel="noreferrer"
					className="row-span-1 inline-block text-2xl font-bold"
				>
					<Heading className="font-semibold" level="4xl">
						{title}
					</Heading>
				</a>
				<div className=" row-span-4">{description}</div>
			</div>
			<img
				className=" row-span-1 rounded-md"
				alt="Test Image"
				src={bannerImage}
			/>
		</div>
	);
};

export default ProjectCard;
