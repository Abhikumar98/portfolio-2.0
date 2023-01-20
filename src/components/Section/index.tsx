import React, { ReactNode } from 'react';

import Framer from '@/components/Framer';

const Section: React.FC<{
	heading?: string;
	className?: string;
	children: ReactNode;
	level?: string;
}> = ({ children, className, level, heading }) => {
	return (
		<Framer.AppearFromTop delay={1}>
			<h3
				className={`mb-8 text-2xl font-semibold ${
					level ? `text-${level}` : ``
				} ${className ?? ''}`}
			>
				{heading}
			</h3>
			{children}
		</Framer.AppearFromTop>
	);
};

export default Section;
