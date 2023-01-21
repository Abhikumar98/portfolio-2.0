import React from 'react';

import Framer from '@/components/Framer';
import Paragraph from '@/components/Paragraph';
import Subheading from '@/components/Subheading';

export interface IProjectCard {
	readonly projectName: string;
	readonly url: string;
	readonly image: string;
	readonly description: string;
	readonly index: number;
}

const ProjectCard: React.FC<IProjectCard> = ({
	projectName,
	url,
	image,
	description,
	index,
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
					<Framer.AppearFromTop delay={index * 0.4}>
						<Subheading noMargins>{projectName}</Subheading>
					</Framer.AppearFromTop>
				</span>
				<Framer.AppearFromBottom delay={index * 0.4}>
					<Paragraph className="text-secondary">
						{description}
					</Paragraph>
				</Framer.AppearFromBottom>
			</div>
			<Framer.AppearFromRight delay={index * 0.4}>
				<img
					className="max-w-sm rounded-md"
					alt="Test Image"
					src={image}
				/>
			</Framer.AppearFromRight>
		</a>
	);
};

export default ProjectCard;
