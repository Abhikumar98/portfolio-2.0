import Head from 'next/head';
import React from 'react';

const MetaHead = () => {
	const title = `Hello, I'm Abhishek`;
	const description = "Hello there 👋, I'm Abhishek";
	const image =
		'https://ik.imagekit.io/abhishekkumar/p_k0qfv9hxT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657173822150';
	const url = 'https://abhishekkumar.dev';
	return (
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Merriweather&family=Palanquin&family=Work+Sans&display=swap"
				rel="stylesheet"
			/>
			<link
				rel="apple-touch-icon"
				sizes="57x57"
				href="/static/apple-icon-57x57.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="/static/apple-icon-60x60.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="72x72"
				href="/static/apple-icon-72x72.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="76x76"
				href="/static/apple-icon-76x76.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/static/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/static/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/static/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/static/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/static/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/static/android-icon-192x192.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/static/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="96x96"
				href="/static/favicon-96x96.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/static/favicon-16x16.png"
			/>
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
