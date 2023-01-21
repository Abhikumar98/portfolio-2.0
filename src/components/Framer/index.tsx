import { motion } from 'framer-motion';
import React from 'react';

const animationDuration = 0.3;

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
				duration: animationDuration,
				delay: delay ?? 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};

const AppearFromBottom: React.FC<{
	children: React.ReactNode;
	delay?: number;
}> = ({ children, delay }) => {
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
				duration: animationDuration,
				delay: delay ?? 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};
const AppearFromLeft: React.FC<{
	children: React.ReactNode;
	delay?: number;
}> = ({ children, delay }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				x: -20,
			}}
			animate={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				duration: animationDuration,
				delay: delay ?? 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};
const AppearFromRight: React.FC<{
	children: React.ReactNode;
	delay?: number;
}> = ({ children, delay }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				x: 20,
			}}
			animate={{
				opacity: 1,
				x: 0,
			}}
			transition={{
				duration: animationDuration,
				delay: delay ?? 0.5,
			}}
		>
			{children}
		</motion.div>
	);
};

const Framer = {
	AppearFromTop,
	AppearFromBottom,
	AppearFromLeft,
	AppearFromRight,
};

export default Framer;
