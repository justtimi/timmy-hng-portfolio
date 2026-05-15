import { browser } from '$app/environment';

type ScrollFadeOptions = {
	threshold?: number;
	rootMargin?: string;
};

export const scrollFade = (node: HTMLElement, options: ScrollFadeOptions = {}) => {
	if (!browser || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.dataset.reveal = 'visible';
		return {};
	}

	node.dataset.reveal = 'hidden';

	const observer = new IntersectionObserver(
		([entry]) => {
			node.dataset.reveal = entry.isIntersecting ? 'visible' : 'hidden';
		},
		{
			threshold: options.threshold ?? 0.18,
			rootMargin: options.rootMargin ?? '0px 0px -8% 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
