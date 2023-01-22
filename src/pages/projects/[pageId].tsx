import { ArrowLeftIcon, GlobeAltIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import TweetEmbed from 'react-tweet-embed';

import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';

import { getNotionData, ProjectData } from '@/server';

import ProductHuntIcon from '../../../public/svg/producthunt.svg';

const Tweet = ({ id }: { id: string }) => {
	return <TweetEmbed tweetId={id} />;
};

const DetailsCard = ({
	recordMap,
	pageData,
}: {
	recordMap: any;
	pageData?: ProjectData;
}) => {
	console.log({ pageData });

	return (
		<div className="space-y-12">
			<Link href="/projects">
				<div className="flex cursor-pointer items-center space-x-2">
					<ArrowLeftIcon className="h-6 w-6" />
					<span>Back to projects</span>
				</div>
			</Link>

			<Heading className="text-center">{pageData?.projectName}</Heading>

			<div className="flex items-center justify-center space-x-2">
				<a href={pageData?.url} target="_blank" rel="noreferrer">
					<GlobeAltIcon className="h-6 w-6" />
				</a>
				{pageData?.producthunt && (
					<a
						href={pageData?.producthunt}
						target="_blank"
						rel="noreferrer"
					>
						<ProductHuntIcon className="h-6 w-6" />
					</a>
				)}
			</div>

			<NotionRenderer
				components={{
					Tweet,
				}}
				recordMap={recordMap}
				darkMode={false}
			/>

			<div className="space-y-2">
				<div className="space-y-4">
					<div className="flex items-center space-x-2">
						<Paragraph className="flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-6 w-6 text-yellow-400"
							>
								<path
									fillRule="evenodd"
									d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Wins of the projects </span>
						</Paragraph>
					</div>
					<div className="ml-2">
						{pageData?.trophy.split('::').map((win, index) => (
							<div key={index} className="flex items-center">
								<span className="mr-2">🎉</span>
								<span>{win}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="space-y-2">
				<Paragraph>Tech stack</Paragraph>
				<div className="flex flex-wrap items-center">
					{pageData?.tech.split(',').map((tech, index) => (
						<span
							key={index}
							className="mb-2 mr-2 border border-primary px-3 py-1"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default DetailsCard;

export const getStaticProps = async (context: {
	params: { pageId: string };
}) => {
	const notion = new NotionAPI();
	const pageId = context.params.pageId as string;
	const recordMap = await notion.getPage(pageId);

	const { collection } = recordMap;

	const [collectionSchema] = Object.values(collection);

	const { schema } = collectionSchema.value;

	const [pageData] = getNotionData(recordMap, schema, pageId);

	return {
		props: { recordMap, pageData },
		revalidate: 10,
	};
};

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}
