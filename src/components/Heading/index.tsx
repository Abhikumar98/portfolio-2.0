import React, { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

const Heading: React.FC<{
	className?: string;
	children: ReactNode;
	level?: string;
}> = ({ children, className, level }) => {
	return (
		<h3
			className={clsxm(
				'mb-8 font-bold',
				'text-2xl md:text-5xl',
				className
			)}
		>
			{children}
		</h3>
	);
};

export default Heading;
