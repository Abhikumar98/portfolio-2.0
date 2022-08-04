import Link from 'next/link';
import React, { FC } from 'react';

const ExternalLink: FC<{
	url: string;
	children: React.ReactNode;
	className?: string;
	hideUnderline?: boolean;
	externalLink?: boolean;
}> = ({ children, url, className, hideUnderline, externalLink = true }) => {
	if (externalLink) {
		return (
			<a
				target="_blank"
				href={url}
				rel="noreferrer"
				className={`${
					!hideUnderline && 'link-underline'
				} relative  font-semibold text-primary opacity-80 hover:opacity-100 ${className}`}
			>
				{children}
			</a>
		);
	}

	return (
		<span className="mx-2">
			<Link className="cursor-ne-resize" href={url}>
				{children}
			</Link>
		</span>
	);
};

export default ExternalLink;
