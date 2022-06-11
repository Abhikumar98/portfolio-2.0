import React from 'react';

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
		<div className="grid w-96 grid-rows-3 gap-2 rounded-md border p-4 hover:shadow-md">
			<a
				target="_blank"
				href={url}
				rel="noreferrer"
				className="row-span-1 inline-block text-2xl font-bold"
			>
				<div>{title}</div>
			</a>
			<div className=" row-span-4">{description}</div>
			<img className=" row-span-1" alt="Test Image" src={bannerImage} />
		</div>
	);
};

export default ProjectCard;
