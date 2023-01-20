import Footer from '@/components/Footer';
import Framer from '@/components/Framer';
import Heading from '@/components/Heading';
import Subheading from '@/components/Subheading';

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
				<Subheading>
					I'm a Fullstack web developer with 3+ years of experience,
					currently located in Bangalore, India (GMT +5:30).
				</Subheading>
				<Subheading>
					Exploring blockchain and building on it.
				</Subheading>
				<Footer />
			</Framer.AppearFromTop>
		</div>
	);
};

export default App;
