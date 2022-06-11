import Head from 'next/head';
import React from 'react';

const MetaHead = () => {
	const title = `Hello, I'm Abhishek`;
	const description = 'Whut?';
	const image =
		'https://ik.imagekit.io/abhishekkumar/IMG_20181201_144641__1__1__1__sut-0wVmT.png';
	const url = 'https://abhishekkumar.dev';
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			{/* add og tag */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={title} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:locale:alternate" content="en_US" />
			{/* add twitter tag */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@abhikumar_98" />
			<meta name="twitter:creator" content="@abhikumar_98" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:url" content={url} />
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/safari-pinned-tab.svg"
				color="#5bbad5"
			/>
			<link rel="image_src" href="/mstile-150x150.png" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff"></meta>
		</Head>
	);
};

export default MetaHead;
