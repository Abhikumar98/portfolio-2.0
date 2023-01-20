import React from 'react';

import Framer from '@/components/Framer';
import Heading from '@/components/Heading';
import Link from '@/components/Link';
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
				<Subheading>
					I'm a full-stack software engineer from India 🙏
					<br />
					atm, diving into <b>web3</b> and building products that
					improve web3 ecosystem.
					<br />( started this journey with FOMO and now onto WAGMI )
				</Subheading>
				<Subheading>
					I love working on the infrastructure of projects, I even
					moved a whole frontend repo to a monorepo in my last job, it
					was lit! 🔥
					<br />
					<br />
					I'm kind of an ambivert, but if we meet, don't be shy to
					push me to be more outgoing.🙂
				</Subheading>
				<Subheading>
					DIY is my thing, I love building and breaking stuff with
					ESP32 chips. I'm all about solving real-world problems, so
					you'll see a bunch of projects I've worked on.🔧 <br />
					<br />
					Overall, I'm always looking for new challenges and
					opportunities to improve my skills and make a difference in
					the world.💪
				</Subheading>
			</Framer.AppearFromTop>

			<Section heading="Work history">
				<Subheading>
					Previously,
					<div>
						Senior Frontend Developer @{' '}
						<Link url="https://zomentum.com">Zomentum</Link>
					</div>
				</Subheading>
			</Section>
		</div>
	);
};

export default About;
