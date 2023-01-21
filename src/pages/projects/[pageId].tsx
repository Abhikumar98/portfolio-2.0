import { ArrowLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { NotionAPI } from 'notion-client';
import React from 'react';
import { NotionRenderer } from 'react-notion-x';
import TweetEmbed from 'react-tweet-embed';

import Heading from '@/components/Heading';

const Tweet = ({ id }: { id: string }) => {
	return <TweetEmbed tweetId={id} />;
};

const DetailsCard = ({ recordMap }: { recordMap: any }) => {
	return (
		<div className="space-y-6">
			<Link href="/projects">
				<div className="flex cursor-pointer items-center space-x-2">
					<ArrowLeftIcon className="h-6 w-6" />
					<span>Back to projects</span>
				</div>
			</Link>

			<Heading className="text-center">Dakiya</Heading>

			<NotionRenderer
				components={{
					Tweet,
				}}
				recordMap={recordMap}
				darkMode={false}
			/>
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

	return {
		props: { recordMap },
		revalidate: 10,
	};
};

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}
