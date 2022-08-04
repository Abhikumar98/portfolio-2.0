import Image from 'next/image';

import Heading from '@/components/Heading';
import ExternalLink from '@/components/Link';
import Page from '@/components/Page';
import Paragraph from '@/components/Paragraph';
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
			<Page>
				<div className="flex items-center justify-between space-x-12">
					<div>
						<div className="mb-6">
							<Subheading>Hello 👋</Subheading>
							<Heading level="4xl">{`I'm Abhishek Kumar`}</Heading>
						</div>
						<Paragraph>
							Frontend Web Developer based out of Bangalore,
							solving one problem at a time with web
						</Paragraph>
					</div>
					<div className="hidden w-3/4 md:block">
						<Image
							src="/images/hero-image.png"
							height={400}
							width={400}
							alt="Hero Image"
						/>
					</div>
				</div>
				<footer className="my-4 flex items-center space-x-4 pb-4 sm:my-0 sm:pb-0">
					<div>
						<ExternalLink
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
						</ExternalLink>
					</div>
					<div>
						<ExternalLink
							hideUnderline
							url="https://www.linkedin.com/in/abhishekkumar98/"
						>
							<Image
								alt="LinkedIn"
								width={24}
								height={24}
								src="/svg/linkedin.svg"
							/>
						</ExternalLink>
					</div>
					<div>
						<ExternalLink
							hideUnderline
							url="https://twitter.com/abhikumar_98"
						>
							<Image
								alt="Twitter"
								width={24}
								height={24}
								src="/svg/twitter.svg"
							/>
						</ExternalLink>
					</div>
					<div>
						<ExternalLink
							hideUnderline
							url="https://www.producthunt.com/@abhikumar98"
						>
							<Image
								alt="ProductHunt"
								width={24}
								height={24}
								src="/svg/producthunt.svg"
							/>
						</ExternalLink>
					</div>
				</footer>
			</Page>
			<Page>
				<Heading>About me</Heading>
				<Paragraph className="">
					Frontend dev exploring web3. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Earum ad omnis quae nobis,
					rerum aliquid ipsam magni delectus laborum culpa, accusamus
					deleniti. Odit omnis ad quam quo voluptatum nobis quisquam?
				</Paragraph>
			</Page>
			<Page>
				<Subheading>What am I upto?</Subheading>
				<Heading>Wandering in metaverse</Heading>
				<Paragraph className="">
					Exploring blockchain and building as I learn.
					<ExternalLink externalLink={false} url="/projects">
						Check out my work
					</ExternalLink>
					<br />
					Shipping side projects
					<br />
					<div className="">
						Hanging @makerdock_ and @superteamdao
					</div>
					Frontend dev exploring web3. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Earum ad omnis quae nobis,
					rerum aliquid ipsam magni delectus laborum culpa, accusamus
					deleniti. Odit omnis ad quam quo voluptatum nobis quisquam?
				</Paragraph>
			</Page>
			<Page>
				<Subheading>Work</Subheading>
				<Heading>
					Zomentum
					<Paragraph>Sr. Frontend Engineer</Paragraph>
				</Heading>
			</Page>
			<Heading>Send your hello 👋</Heading>
			<Paragraph>
				You can reach me at{' '}
				<ExternalLink url="mailto:abhishekkumar35962@gmail.com?subject=Hey Abhishek, I was checking out your portfolio&body=👋 Hey, wanted to have a quick chat.">
					abhishekkumar35962@gmail.com
				</ExternalLink>
			</Paragraph>
			{/* <div className="my-12">
				<footer className="my-4 flex items-center space-x-4 pb-4 sm:my-0 sm:pb-0">
					<div>
						<ExternalLink
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
						</ExternalLink>
					</div>
					<div>
						<ExternalLink
							hideUnderline
							url="https://www.linkedin.com/in/abhishekkumar98/"
						>
							<Image
								alt="LinkedIn"
								width={24}
								height={24}
								src="/svg/linkedin.svg"
							/>
						</ExternalLink>
					</div>
					<div>
						<ExternalLink
							hideUnderline
							url="https://twitter.com/abhikumar_98"
						>
							<Image
								alt="Twitter"
								width={24}
								height={24}
								src="/svg/twitter.svg"
							/>
						</ExternalLink>
					</div>
					<div>
						<ExternalLink
							hideUnderline
							url="https://www.producthunt.com/@abhikumar98"
						>
							<Image
								alt="ProductHunt"
								width={24}
								height={24}
								src="/svg/producthunt.svg"
							/>
						</ExternalLink>
					</div>
				</footer>
			</div> */}
		</div>
	);
};

export default App;
