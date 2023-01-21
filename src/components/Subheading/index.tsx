import React, { ReactNode } from 'react';

const Subheading: React.FC<{
	className?: string;
	children: ReactNode;
	noMargins?: boolean;
}> = ({ children, className, noMargins }) => {
	return (
		<h4
			className={`${
				noMargins ? '' : 'mt-16'
			} mb-8 text-2xl font-semibold ${className}`}
		>
			{children}
		</h4>
	);
};

export default Subheading;
