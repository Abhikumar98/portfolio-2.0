import React, { ReactNode } from 'react';

const Paragraph: React.FC<{
	className?: string;
	children: ReactNode;
}> = ({ children, className }) => {
	return (
		<div
			className={` mb-4 font-paragraph text-lg text-secondary ${className}`}
		>
			{children}
		</div>
	);
};

export default Paragraph;
