import React, { ReactNode } from 'react';

const Heading: React.FC<{
	className?: string;
	children: ReactNode;
}> = ({ children, className }) => {
	return <h3 className={` mb-8 font-normal ${className}`}>{children}</h3>;
};

export default Heading;
