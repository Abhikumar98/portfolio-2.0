import { ExternalLinkIcon } from '@heroicons/react/outline';
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
		<div className="bg-background">
			<div className="font-title m-auto min-h-screen w-screen max-w-5xl text-primary transition-all ease-in-out">
				<div className="relative mx-4 flex items-center justify-between space-x-8 pt-6 sm:mx-14 sm:justify-end md:mx-16 md:pt-8 lg:mx-20 lg:pt-10 xl:mx-24 xl:pt-12">
					<div className=" -ml-2 flex cursor-pointer items-center justify-center rounded-full border border-secondary p-3 text-xl font-bold">
						<Link href="/">ak.</Link>
					</div>
					<div className="my-8 hidden w-full items-center justify-end sm:flex">
						<div className=" ml-8 cursor-pointer opacity-70 transition-all ease-in-out hover:opacity-100">
							<Link href="/projects">Projects</Link>
						</div>
						<div className=" ml-8 cursor-pointer opacity-70 transition-all ease-in-out hover:opacity-100">
							<a href="/resume.pdf" target="_blank">
								<span className="flex items-center">
									Resume{' '}
									<ExternalLinkIcon className="ml-2 h-4 w-4" />
								</span>
							</a>
						</div>
						{/* <div className=" ml-8 cursor-pointer opacity-70 transition-all ease-in-out hover:opacity-100">
						<Link href="/about">About me</Link>
					</div> */}
					</div>
					<div className="ml-auo">
						<Switch
							enabled={theme === 'dark'}
							onChange={updatePageTheme}
						/>
					</div>
				</div>
				<div className="mr-8 mt-4 flex flex-col items-end space-y-4 sm:hidden">
					<div className=" ml-8 cursor-pointer opacity-70 transition-all ease-in-out hover:opacity-100">
						<Link href="/projects">Projects</Link>
					</div>
				</div>
				<div className="mr-8 mt-4 flex flex-col items-end space-y-4 sm:hidden">
					<div className=" ml-8 cursor-pointer opacity-70 transition-all ease-in-out hover:opacity-100">
						<Link href="/resume.pdf">
							<span className="flex items-center">
								Resume{' '}
								<ExternalLinkIcon className="ml-2 h-4 w-4" />
							</span>
						</Link>
					</div>
				</div>
				<div className="w-full p-4 pt-6 sm:p-14 md:p-16 md:pt-8 lg:p-20 lg:pt-10 xl:p-24 xl:pt-12">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
