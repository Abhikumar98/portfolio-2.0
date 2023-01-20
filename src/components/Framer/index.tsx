import { motion } from 'framer-motion';
import React from 'react';

const AppearFromTop: React.FC<{
	children: React.ReactNode;
	delay?: number;
}> = ({ children, delay }) => {
	return (
		<motion.div
			initial={{
				y: -20,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
				delay: delay ?? 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};

const AppearFromBottom: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<motion.div
			initial={{
				y: 20,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
				delay: 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};

const Framer = {
	AppearFromTop,
	AppearFromBottom,
};

export default Framer;
