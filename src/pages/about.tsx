/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Footer from '@/components/Footer';
import Framer from '@/components/Framer';
import Heading from '@/components/Heading';
import Link from '@/components/Link';
import Paragraph from '@/components/Paragraph';
import Section from '@/components/Section';
import SlideText from '@/components/SlideText';
import Subheading from '@/components/Subheading';

const About = () => {
	return (
		<div>
			<Framer.AppearFromTop>
				<Subheading>Hi, I am</Subheading>
			</Framer.AppearFromTop>
			<Heading>
				<div className="flex space-x-4">
					<div>
						{'ABHISHEK'.split('').map((char, index) => (
							<SlideText key={index} text={char} />
						))}
					</div>
					<div>
						{'KUMAR'.split('').map((char, index) => (
							<SlideText key={index} text={char} />
						))}
					</div>
				</div>
			</Heading>
			<Framer.AppearFromTop delay={1}>
				<Paragraph>
					I'm a full-stack software engineer from India 🙏
					<br />
					atm, diving into <b>web3</b> and building products that
					improve web3 ecosystem.
					<br />
				</Paragraph>
				<Paragraph>
					I love working on the infrastructure of projects, I even
					moved a whole frontend repo to a monorepo in my previous job
				</Paragraph>
			</Framer.AppearFromTop>

			<Framer.AppearFromTop delay={1.5}>
				<Section heading="My approach">
					<Paragraph>
						Everything can be broken down to the simplest components
						or atom. In web development, it's a box or div.
					</Paragraph>
				</Section>
			</Framer.AppearFromTop>

			<Section heading="Work history">
				<Paragraph>
					<div>
						Frontend Developer @{' '}
						<Link url="https://li.fi">Li.Fi</Link>
					</div>
				</Paragraph>
				<Paragraph>
					Previously,
					<div>
						Senior Frontend Developer @{' '}
						<Link url="https://zomentum.com">Zomentum</Link>
					</div>
				</Paragraph>
			</Section>

			<Section heading="Let's chat">
				<Footer />
			</Section>
		</div>
	);
};

export default About;
