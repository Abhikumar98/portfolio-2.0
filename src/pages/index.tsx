/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer';
import Framer from '@/components/Framer';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import Pipe from '@/components/Pipe';

const App = () => {
	return (
		<div className="">
			<div className="flex flex-wrap">
				{[...Array(25)].map((_, i) => (
					<Pipe index={i} key={i} />
				))}
			</div>
			<Heading>
				<Framer.AppearFromTop>
					Hello 👋 <br />
				</Framer.AppearFromTop>
				<Framer.AppearFromBottom>I'm Abhishek</Framer.AppearFromBottom>
			</Heading>

			<Framer.AppearFromTop delay={1}>
				<Paragraph>
					I'm a Fullstack web developer with 3+ years of experience,
					currently located in Bangalore, India (GMT +5:30).
				</Paragraph>
				<Paragraph>
					Exploring blockchain and building products that improves
					web3 ecosystem.
				</Paragraph>
				<Footer />
			</Framer.AppearFromTop>
			<Pipe index={123} />
		</div>
	);
};

export default App;
