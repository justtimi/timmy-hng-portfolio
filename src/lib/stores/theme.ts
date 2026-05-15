import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

const storageKey = 'timmy-portfolio-theme';

const getInitialTheme = (): Theme => {
	if (!browser) return 'dark';

	const savedTheme = localStorage.getItem(storageKey);
	if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;

	return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const theme = writable<Theme>(getInitialTheme());

export const setTheme = (nextTheme: Theme) => {
	theme.set(nextTheme);

	if (!browser) return;

	document.documentElement.dataset.theme = nextTheme;
	localStorage.setItem(storageKey, nextTheme);
};

export const toggleTheme = () => {
	theme.update((currentTheme) => {
		const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

		if (browser) {
			document.documentElement.dataset.theme = nextTheme;
			localStorage.setItem(storageKey, nextTheme);
		}

		return nextTheme;
	});
};
