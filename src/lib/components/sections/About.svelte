<script lang="ts">
	import { onMount } from 'svelte';

	let sectionEl: HTMLElement;

	const narrative = [
	{
		title: 'I Think in Feelings First',
		text: 'Before anything technical, I’m drawn to experience — how something feels, flows, and responds. I care about the emotional side of interfaces just as much as how they function.'
	},
	{
		title: 'Then I Engineer It',
		text: 'As a frontend engineer, I turn those feelings into structure — using React, Tailwind, and modern web tools to build clean, scalable, and responsive interfaces that actually work in the real world.'
	},
	{
		title: 'Then I Refine the Experience',
		text: 'I focus on the details that users don’t always notice but always feel — spacing, transitions, motion, and interaction — to make digital products feel smooth, intentional, and alive.'
	}
];

	onMount(() => {
		let cleanup = () => {};

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return cleanup;

		void (async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');

			gsap.registerPlugin(ScrollTrigger);

			const ctx = gsap.context(() => {
				gsap.from('[data-about-reveal]', {
					scrollTrigger: {
						trigger: sectionEl,
						start: 'top 70%'
					},
					y: 22,
					autoAlpha: 0,
					duration: 0.7,
					stagger: 0.1,
					ease: 'power3.out'
				});

				gsap.from('[data-curl-path]', {
					scrollTrigger: {
						trigger: sectionEl,
						start: 'top 72%',
						end: 'bottom 58%',
						scrub: 1
					},
					strokeDashoffset: 720,
					ease: 'none'
				});
			}, sectionEl);

			cleanup = () => ctx.revert();
		})();

		return () => cleanup();
	});
</script>

<section bind:this={sectionEl} class="relative mx-auto max-w-6xl px-6 py-section-y md:px-8">
	<svg
		class="pointer-events-none absolute top-10 right-4 hidden h-104 w-md text-brand-accent/20 md:block"
		viewBox="0 0 460 420"
		aria-hidden="true"
	>
		<path
			data-curl-path
			d="M363 48C259 10 141 38 113 123c-24 73 67 109 104 57 31-44-20-92-83-54-77 47-74 171 28 210 77 30 174 4 235-58"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			stroke-linecap="round"
			stroke-dasharray="720"
		/>
	</svg>

	<div class="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
		<div data-about-reveal class="max-w-xl">
			<span class="font-handwritten text-2xl text-[#f5b86b]">the line underneath</span>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-text-main md:text-3xl">
				My work starts where illustration and interface design meet.
			</h2>
			<p class="mt-4 text-sm leading-7 text-text-muted md:text-base">
				I am drawn to curls because they do not pretend to be perfectly still. They bend, soften,
				return, and keep moving. That is the same feeling I want in my portfolio: technical work
				with a visible pulse.
			</p>
		</div>

		<div class="grid gap-3">
			{#each narrative as item, index (item.title)}
				<article
					data-about-reveal
					class="rounded-lg border border-white/10 bg-white/4 p-4 transition duration-300 ease-wave hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white/[0.07]"
				>
					<div class="flex items-start gap-4">
						<span class="font-handwritten text-xl text-brand-accent">
							{String(index + 1).padStart(2, '0')}
						</span>
						<div>
							<h3 class="text-base font-semibold text-text-main">{item.title}</h3>
							<p class="mt-1 text-sm leading-6 text-text-muted">{item.text}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
