import React, { FC } from 'react';

const Link: FC<{
	url: string;
	children: React.ReactNode;
	className?: string;
	hideUnderline?: boolean;
}> = ({ children, url, className, hideUnderline }) => {
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
};

export default Link;
