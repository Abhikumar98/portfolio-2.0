import React from 'react';

import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
	return (
		<div className="space-y-12">
			<ProjectCard
				title="Dakiya"
				url="https://dakiya.xyz"
				description=" Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui"
				bannerImage="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"
			/>
			<ProjectCard
				title="Frens.money"
				url="https://frens.money"
				description=" Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui"
				bannerImage="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"
			/>
			<ProjectCard
				title="Dakiya"
				url="https://dakiya.xyz"
				description=" Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui"
				bannerImage="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=440&h=220&q=60"
			/>
		</div>
	);
};

export default Projects;
