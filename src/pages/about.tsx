import React from 'react';

import Heading from '@/components/Heading';
import Subheading from '@/components/Subheading';

const About = () => {
	return (
		<div>
			<Heading>
				<div>WIP</div>
			</Heading>
			<Heading>
				<div>Yo!</div>
			</Heading>
			<Subheading>
				<div>{`"Currently" into wall climbing and Table tennis`}</div>
				<div>Jamshedpur ka ladka</div>
				<div>Diving in the web3 black hole</div>
			</Subheading>
			<Heading>Personal Achivements</Heading>
			<Subheading>
				<div>{`Won Devfolio's "Buidl it" hackathon`}</div>
				<div>
					Successfully found a flat in Indiranagar, Bangalore 🙌{' '}
				</div>
				<div>Shipped 5+ side projects ✨ </div>
			</Subheading>
		</div>
	);
};

export default About;
