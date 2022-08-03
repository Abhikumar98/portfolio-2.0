import React, { ReactNode } from 'react';

const Page: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return <div className=" mt-20 mb-48">{children}</div>;
};

export default Page;
