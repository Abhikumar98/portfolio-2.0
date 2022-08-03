import React, { ReactNode } from 'react';

const Paragraph: React.FC<{
	className?: string;
	children: ReactNode;
}> = ({ children, className }) => {
	return (
		<h4 className={` mb-4 font-normal text-secondary ${className}`}>
			{children}
		</h4>
	);
};

export default Paragraph;
