import { type Project } from '$lib/types/projects';

export const projects: Project[] = [
	{
		id: 'devops-dashboard',
		title: 'Real-Time DevOps Dashboard',
		description:
			'A live monitoring system with real-time metrics visualization and system health tracking.',
		tech: ['Vue', 'WebSockets', 'Chart.js', 'Tailwind'],
		image: '/assets/projects/devops.png',
		liveUrl: '#',
		githubUrl: '#',
		featured: true
	},

	{
		id: 'svelte-portfolio',
		title: 'Interactive Developer Portfolio',
		description:
			'A cinematic portfolio experience built with SvelteKit, GSAP, and motion-driven UI systems.',
		tech: ['SvelteKit', 'GSAP', 'Tailwind'],
		image: '/assets/projects/portfolio.png',
		liveUrl: '#',
		githubUrl: '#',
		featured: true
	},

	{
		id: 'ui-experiment-wave',
		title: 'Wave Motion UI System',
		description:
			'Experimental interface exploring fluid motion design and interaction-driven UI components.',
		tech: ['Svelte', 'CSS Animations', 'GSAP'],
		image: '/assets/projects/wave-ui.png',
		liveUrl: '#',
		githubUrl: '#'
	}
];
