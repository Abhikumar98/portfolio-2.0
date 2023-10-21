import { GlobeAltIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import React from 'react';
import { ArrowContainer, Popover } from 'react-tiny-popover';

import 'react-tooltip/dist/react-tooltip.css';

import Framer from '@/components/Framer';
import Paragraph from '@/components/Paragraph';
import Subheading from '@/components/Subheading';

import ProductHuntIcon from '../../../public/svg/producthunt.svg';

export interface IProjectCard {
	readonly projectName: string;
	readonly url: string;
	readonly image: string;
	readonly description: string;
	readonly index: number;
	readonly tech: string;
	readonly producthunt: string;
	readonly blockId: string;
	readonly trophy?: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
	projectName,
	url,
	image,
	description,
	index,
	producthunt,
	blockId,
	trophy,
}) => {
	const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

	React.useEffect(() => {
		const trophyIcon = document.getElementById(blockId);
		if (trophyIcon) {
			trophyIcon.addEventListener('mouseover', () => {
				setIsPopoverOpen(true);
			});
			trophyIcon.addEventListener('mouseout', () => {
				setIsPopoverOpen(false);
			});
		}
	}, [blockId]);

	return (
		<div className="flex w-full flex-col-reverse rounded-md py-8 sm:justify-between md:-m-8 md:flex-row md:p-8">
			<div className="mt-8 w-full md:mt-0 md:mr-12 md:w-1/2">
				<span className="inline-block text-2xl font-bold">
					<Framer.AppearFromTop delay={index * 0.03}>
						<Subheading noMargins>{projectName}</Subheading>
					</Framer.AppearFromTop>
				</span>
				<Framer.AppearFromBottom delay={index * 0.03}>
					<Paragraph className="text-secondary">
						{description}
					</Paragraph>
					{/* <div className="flex w-auto flex-wrap">
						{tech?.split(',').map((stack) => (
							<div
								key={stack}
								className="mb-2 mr-2 border border-primary px-3 py-1 text-sm"
							>
								{stack}
							</div>
						))}
					</div> */}

					<div className="flex items-center justify-between">
						<div className="flex space-x-2">
							<a href={url} target="_blank" rel="noreferrer">
								<GlobeAltIcon className="h-6 w-6" />
							</a>
							{producthunt && (
								<a
									href={producthunt}
									target="_blank"
									rel="noreferrer"
								>
									<ProductHuntIcon className="h-6 w-6" />
								</a>
							)}
							{trophy && (
								<Popover
									isOpen={isPopoverOpen}
									align="start"
									boundaryInset={5}
									onClickOutside={() =>
										setIsPopoverOpen(false)
									}
									positions={['top']}
									content={({
										position,
										childRect,
										popoverRect,
									}) => (
										<ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
											position={position}
											childRect={childRect}
											popoverRect={popoverRect}
											arrowColor="black"
											arrowSize={10}
											arrowStyle={{
												opacity: 0.7,
											}}
											className="popover-arrow-container"
											arrowClassName="popover-arrow"
										>
											<div className="bg-black p-4 text-white opacity-90 ">
												<Paragraph>💪🏼 WINS</Paragraph>
												{trophy
													.split('::')
													.map((item) => (
														<div key={item}>
															🎉 {item}
														</div>
													))}
											</div>
										</ArrowContainer>
									)}
								>
									<motion.div
										initial={{ scale: 1 }}
										whileHover={{ scale: 1.2 }}
										transition={{
											type: 'spring',
											stiffness: 260,
											damping: 5,
											duration: 0.2,
										}}
										onClick={() => setIsPopoverOpen(true)}
									>
										<svg
											id={blockId}
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="h-6 w-6 cursor-pointer text-yellow-400"
										>
											<path
												fillRule="evenodd"
												d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
												clipRule="evenodd"
											/>
										</svg>
									</motion.div>
								</Popover>
							)}
						</div>

						{/* <Link href={`/projects/${blockId}`}>
							<div className="group flex cursor-pointer items-center space-x-2">
								<span>Read more</span>
								<ArrowRightIcon className="h-4 w-4 transition-all group-hover:translate-x-2" />
							</div>
						</Link> */}
					</div>
				</Framer.AppearFromBottom>
			</div>
			<Framer.AppearFromRight delay={index * 0.03}>
				<img
					className="max-w-sm rounded-md"
					alt="Test Image"
					src={image}
				/>
			</Framer.AppearFromRight>

			{/* <ReactTooltip
				anchorId={blockId}
				place="top"
				variant="dark"
				content={'something \n asdfasdf'}
			/> */}
		</div>
	);
};

export default ProjectCard;
