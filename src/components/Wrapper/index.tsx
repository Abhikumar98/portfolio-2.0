import Link from 'next/link';
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
		<div className=" mx-none font-title h-screen w-screen overflow-auto overflow-y-auto bg-background p-12 pt-6 text-primary sm:p-14 md:p-16 md:pt-8 lg:p-20 lg:pt-10 xl:p-24 xl:pt-12">
			<div className="flex w-full items-center justify-center">
				<div className="my-8 flex w-full items-center justify-center">
					<div className=" ml-8 cursor-pointer opacity-70 transition-all ease-in-out hover:opacity-100">
						<Link href="/projects">Projects</Link>
					</div>
					<div className=" ml-8 cursor-pointer opacity-70 transition-all ease-in-out hover:opacity-100">
						<Link href="/about">About me</Link>
					</div>
				</div>
				<div className="ml-auo">
					<Switch
						enabled={theme === 'dark'}
						onChange={updatePageTheme}
					/>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Wrapper;
