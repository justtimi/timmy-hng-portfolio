export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};