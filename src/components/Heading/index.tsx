import React, { ReactNode } from 'react';

const Heading: React.FC<{
	className?: string;
	children: ReactNode;
	level?: string;
}> = ({ children, className }) => {
	return (
		<h3
			className={`mb-8 font-primary text-4xl font-medium ${
				className ?? ''
			}`}
		>
			{children}
		</h3>
	);
};

export default Heading;
