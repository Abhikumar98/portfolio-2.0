import React, { useEffect } from 'react';

const Pipe = ({ index }: { index: number }) => {
	const updateRotation = (
		x: number,
		y: number,
		position: {
			top: number;
			bottom: number;
			left: number;
			right: number;
		}
	) => {
		const maxY = (position.bottom - position.top) / 2;
		const maxX = (position.right - position.left) / 2;

		const mouseY =
			(position.bottom - position.top) / 2 - (y - position.top);
		const mouseX = x - position.left - (position.right - position.left) / 2;

		// if mouseY = maxY, then rotateX = 0
		// if mouseY = 0, then rotateX = 90

		const rotateX = (mouseY / maxY) * 90 - 90;
		const rotateZ = (mouseX / maxX) * 88;

		const pipe = document.querySelector(`#pipe-${index}`) as HTMLElement;

		if (!pipe) return;
		pipe.style.transform = `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
	};

	useEffect(() => {
		const container = document.querySelector(`#pipe-container-${index}`);

		document.addEventListener('mousemove', (e) => {
			if (!container) return;
			if (container === (e.target as Node)) {
				updateRotation(
					e.clientX,
					e.clientY,
					container.getBoundingClientRect()
				);
			} else {
				const pipe = document.querySelector(
					`#pipe-${index}`
				) as HTMLElement;
				pipe.style.transform = `rotateX(90deg) rotateZ(0deg)`;
			}
		});
	}, []);

	return (
		<>
			<div
				id={`pipe-container-${index}`}
				className="pipe-container relative h-24 w-24 border border-black bg-gray-300"
			>
				<div
					id={`pipe-${index}`}
					className="pipe absolute right-1/2 h-12 w-2 origin-bottom -translate-x-1/2 transform rounded-full bg-blue-400"
					style={{
						transformStyle: 'preserve-3d',
					}}
				/>
			</div>
		</>
	);
};

export default Pipe;
