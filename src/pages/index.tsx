import Image from 'next/image';

import Heading from '@/components/Heading';
import Link from '@/components/Link';
import Subheading from '@/components/Subheading';

import { useAppState } from '@/context';

const App = () => {
	const { theme } = useAppState();

	const skills = [
		{
			skillName: 'JavaScript',
			iconPath: '/javascript.svg',
		},
		{
			skillName: 'TypeScript',
			iconPath: '/typescript.svg',
		},
		{
			skillName: 'React',
			iconPath: '/react.svg',
		},
		{
			skillName: 'Redux',
			iconPath: '/redux.svg',
		},
		{
			skillName: 'Firebase',
			iconPath: '/firebase.svg',
		},
		{
			skillName: 'NextJs',
			iconPath: '/nextjs.svg',
			darkPath: '/nextjsdark.svg',
			dark: true,
		},
		{
			skillName: 'Vercel',
			iconPath: '/vercel.svg',
			darkPath: '/verceldark.svg',
			dark: true,
		},
	];

	const isDarkMode = theme === 'dark';

	return (
		<div className="">
			<div className="mb-6"></div>
			<div className="mb-6">
				<Heading>Hello 👋</Heading>
				<Subheading>{`I'm Abhishek kumar`}</Subheading>
			</div>
			<Subheading>
				Frontend Web Developer, currently located in Bangalore, India
				(GMT +5:30).
			</Subheading>
			<Subheading>
				Currently,
				<div>
					Frontend Developer @{' '}
					<Link url="https://zomentum.com">Zomentum</Link>
				</div>
			</Subheading>
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
		</div>
	);
};

export default App;
