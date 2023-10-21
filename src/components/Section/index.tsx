import React, { ReactNode } from 'react';

import Framer from '@/components/Framer';
import Subheading from '@/components/Subheading';

const Section: React.FC<{
	heading?: string;
	className?: string;
	children: ReactNode;
	level?: string;
}> = ({ children, className, level, heading }) => {
	return (
		<Framer.AppearFromTop delay={1}>
			<div className="mt-24 inline-block">
				<Subheading>{heading}</Subheading>
				{children}
			</div>
		</Framer.AppearFromTop>
	);
};

export default Section;
