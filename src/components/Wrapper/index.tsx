import React, { FC, ReactNode } from 'react';

import Switch from '@/components/Switch';

import { useAppState } from '@/context';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
	const { theme, updateTheme } = useAppState();

	const updatePageTheme = () => {
		if (theme === 'light') {
			updateTheme('dark');
			return;
		}
		updateTheme('light');
	};
	return (
		<div className=" overflow-auto bg-background text-primary">
			<div className="flex items-center justify-center">
				<div className="my-8 bg-transparent">Projects</div>
				<Switch enabled={theme === 'dark'} onChange={updatePageTheme} />
			</div>
			{children}
		</div>
	);
};

export default Wrapper;
