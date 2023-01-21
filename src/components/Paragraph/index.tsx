import React, { ReactNode } from 'react';

import clsxm from '@/lib/clsxm';

const Paragraph: React.FC<{
	className?: string;
	children: ReactNode;
	level?: string;
}> = ({ children, className, level }) => {
	return (
		<p className={clsxm('mb-4', 'text-md md:text-xl', className)}>
			{children}
		</p>
	);
};

export default Paragraph;
