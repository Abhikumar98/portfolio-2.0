/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer';
import Framer from '@/components/Framer';
import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';

const App = () => {
	return (
		<div className="">
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
		</div>
	);
};

export default App;
