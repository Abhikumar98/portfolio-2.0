import React, { ReactNode } from 'react';

const Subheading: React.FC<{
	className?: string;
	children: ReactNode;
}> = ({ children, className }) => {
	return (
		<h4 className={` mb-6 font-normal text-secondary ${className}`}>
			{children}
		</h4>
	);
};

export default Subheading;
