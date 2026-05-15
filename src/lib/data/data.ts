import { type Project } from '$lib/types/projects';
import aiSummarizer from '../../assets/images/projects/ai-summarizer.png';
import bentoGrid from '../../assets/images/projects/bento-grid.jpg';
import habitTracker from '../../assets/images/projects/habit-tracker.png';
import invoiceManager from '../../assets/images/projects/invoice-manager.png';
import profileCard from '../../assets/images/projects/profile-card.png';
import taskCard from '../../assets/images/projects/task-card.png';

export const projects: Project[] = [
	{
		id: 'ai-summarizer',
		title: 'AI Summarizer',
		description:
			'A focused reading tool that turns long-form content into clean, scannable summaries.',
		tech: ['React', 'API', 'Tailwind'],
		category: 'Product UI',
		image: aiSummarizer,
		liveUrl: 'https://chrome-extension-hng-frontend.vercel.app/',
		githubUrl: 'https://github.com/justtimi/chrome-extension-hng-frontend',
		featured: true
	},
	{
		id: 'invoice-manager',
		title: 'Invoice Manager',
		description:
			'A compact finance interface for creating, tracking, and organizing invoices with clarity.',
		tech: ['React', 'TypeScript', 'CSS'],
		category: 'Product UI',
		image: invoiceManager,
		liveUrl: 'https://stage-2-invoice-management.vercel.app/',
		githubUrl: 'https://github.com/justtimi/stage-2-invoice-management',
		featured: true
	},
	{
		id: 'habit-tracker',
		title: 'Habit Tracker',
		description:
			'A daily progress system built around simple visual feedback and repeatable routines.',
		tech: ['JavaScript', 'Local State', 'UI Design'],
		category: 'Product UI',
		image: habitTracker,
		liveUrl: 'https://habit-tracker-pwa-lac.vercel.app/',
		githubUrl: 'https://github.com/justtimi/habit-tracker-pwa'
	},
	{
		id: 'task-card',
		title: 'Task Card',
		description:
			'A polished task component exploring hierarchy, spacing, and quick status recognition.',
		tech: ['HTML', 'CSS', 'Responsive UI'],
		category: 'Component Study',
		image: taskCard,
		liveUrl: 'https://stage-1a-hng-task-card.vercel.app/',
		githubUrl: 'https://github.com/justtimi/https://vercel.com/stage-1a-hng-task-card'
	},
	{
		id: 'profile-card',
		title: 'Profile Card',
		description:
			'A personal identity card with careful spacing, visual contrast, and compact content.',
		tech: ['HTML', 'CSS', 'Component UI'],
		category: 'Component Study',
		image: profileCard,
		liveUrl: 'https://stage-1a-hng-profile-card.vercel.app/',
		githubUrl: 'https://github.com/justtimi/stage-1a-hng-profile-card'
	},
	{
		id: 'bento-grid',
		title: 'Bento Grid',
		description: 'A layout study in dense composition, responsive cards, and fast visual scanning.',
		tech: ['CSS Grid', 'Responsive Design', 'Layout'],
		category: 'Layout System',
		image: bentoGrid,
		liveUrl: 'https://timmy-hng-portfolio.vercel.app/projects',
		githubUrl: 'https://github.com/justtimi/timmy-hng-portfolio'
	}
];
