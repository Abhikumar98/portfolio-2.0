import React, { ReactNode } from 'react';

const Subheading: React.FC<{
	className?: string;
	children: ReactNode;
	level?: string;
}> = ({ children, className, level }) => {
	return (
		<h4
			className={` mb-6 font-secondary text-2xl font-medium ${
				className ?? ''
			} ${className}`}
		>
			{children}
		</h4>
	);
};

export default Subheading;
