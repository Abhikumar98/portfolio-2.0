import React, { ReactNode } from 'react';

const Heading: React.FC<{
	className?: string;
	children: ReactNode;
	level?: string;
}> = ({ children, className, level }) => {
	return (
		<h3
			className={`mb-8 font-bold ${
				level ? `text-${level}` : `text-5xl`
			} ${className ?? ''}`}
		>
			{children}
		</h3>
	);
};

export default Heading;
