export type Project = {
	id: string;
	title: string;
	description: string;
	tech: string[];
	category?: 'Product UI' | 'Component Study' | 'Layout System';
	image?: string;
	video?: string;
	liveUrl?: string;
	githubUrl?: string;
	featured?: boolean;
};
