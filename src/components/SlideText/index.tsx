import { motion } from 'framer-motion';
import React from 'react';

const SlideText = ({ text }: { text: string }) => {
	return (
		<div className="relative inline-flex overflow-hidden">
			<motion.div
				initial={{
					right: '100%',
				}}
				animate={{
					right: '0%',
				}}
				transition={{
					delay: 0.3,
					duration: 0.5,
				}}
				exit={{
					right: '100%',
				}}
				className="relative"
			>
				{text}
			</motion.div>
		</div>
	);
};

export default SlideText;
