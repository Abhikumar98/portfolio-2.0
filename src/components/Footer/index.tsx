import Image from 'next/image';
import React from 'react';

import Link from '@/components/Link';
import Subheading from '@/components/Subheading';

import { useAppState } from '@/context';

const Footer = () => {
	const { theme } = useAppState();

	const isDarkMode = theme === 'dark';

	return (
		<>
			<Subheading>
				You can reach me at{' '}
				<Link url="mailto:abhishekkumar35962@gmail.com?subject=Hey Abhishek, I was checking out your portfolio&body=👋 Hey, wanted to have a quick chat.">
					abhishekkumar35962@gmail.com
				</Link>
			</Subheading>

			<div className="my-12">
				<footer className="my-4 flex items-center space-x-4 pb-4 sm:my-0 sm:pb-0">
					<div>
						<Link
							hideUnderline
							url="https://github.com/Abhikumar98"
						>
							<Image
								alt="Github"
								width={24}
								height={24}
								src={
									isDarkMode
										? '/svg/githubdark.svg'
										: '/svg/github.svg'
								}
							/>
						</Link>
					</div>
					<div>
						<Link
							hideUnderline
							url="https://www.linkedin.com/in/abhishekkumar98/"
						>
							<Image
								alt="LinkedIn"
								width={24}
								height={24}
								src="/svg/linkedin.svg"
							/>
						</Link>
					</div>
					<div>
						<Link
							hideUnderline
							url="https://twitter.com/abhikumar_98"
						>
							<Image
								alt="Twitter"
								width={24}
								height={24}
								src="/svg/twitter.svg"
							/>
						</Link>
					</div>
					<div>
						<Link
							hideUnderline
							url="https://www.producthunt.com/@abhikumar98"
						>
							<Image
								alt="ProductHunt"
								width={24}
								height={24}
								src="/svg/producthunt.svg"
							/>
						</Link>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
