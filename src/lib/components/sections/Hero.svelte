<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { scrollFade } from '$lib/actions/scrollFade';
	import profileImage from '../../../assets/images/profile/profile.jpg';

	let heroEl: HTMLElement;

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		void (async () => {
			const { gsap } = await import('gsap');

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.from(heroEl.querySelectorAll('[data-hero-reveal]'), {
					y: 24,
					autoAlpha: 0,
					duration: 0.8,
					stagger: 0.1
				})
				.from(
					heroEl.querySelector('[data-profile-reveal]'),
					{
						y: 20,
						autoAlpha: 0,
						scale: 0.97,
						duration: 0.85
					},
					'-=0.35'
				);
		})();
	});
</script>

<div
	bind:this={heroEl}
	class="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-section-y md:grid-cols-[1.05fr_0.95fr] md:px-8"
>
	<div
		class="absolute inset-x-6 top-8 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"
	></div>

	<div class="relative z-10 flex max-w-3xl flex-col items-start gap-5">
		<span
			data-hero-reveal
			class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand-accent uppercase"
		>
			<span class="h-1.5 w-1.5 rounded-full bg-[#f5b86b]"></span>
			Timmy / Frontend Engineer
		</span>

		<h1
			data-hero-reveal
			class="max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-text-main sm:text-5xl md:text-6xl"
		>
			I turn curls, waves, and honest feeling into
			<span class="text-brand-accent">interfaces that move with intent.</span>
		</h1>

		<p data-hero-reveal class="font-handwritten text-2xl leading-none text-[#f5b86b] sm:text-3xl">
			Hi, I'm Timmy.
		</p>

		<p data-hero-reveal class="max-w-2xl text-base leading-7 text-text-muted md:text-lg">
			My illustrations usually begin with curves because I wear my heart on my sleeve. My frontend
			work follows the same instinct: expressive, structured, and clear enough to feel alive without
			becoming noisy.
		</p>

		<div data-hero-reveal class="flex flex-wrap items-center gap-3 pt-2">
			<a
				href="#projects"
				class="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-bg-deep transition duration-300 ease-wave hover:-translate-y-0.5 hover:bg-brand-accent focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
			>
				View Projects
			</a>

			<a
				href="#contact"
				class="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-text-main transition duration-300 ease-wave hover:-translate-y-0.5 hover:bg-white/10 focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
			>
				Contact Me
			</a>

			<a
				href={'/portfolio-resume.docx'}
				download
				class="rounded-lg border border-[#f5b86b]/25 bg-[#f5b86b]/10 px-5 py-2.5 text-sm font-semibold text-[#f5b86b] transition duration-300 ease-wave hover:-translate-y-0.5 hover:bg-[#f5b86b]/15 focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
			>
				Resume
			</a>
		</div>

		<div data-hero-reveal class="flex flex-wrap items-center gap-3 text-sm text-text-muted">
			<a
				href="https://github.com/justtimi"
				target="_blank"
				rel="noreferrer"
				class="rounded-md py-1 font-semibold transition hover:text-brand-accent focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
			>
				GitHub
			</a>
			<span aria-hidden="true">/</span>
			<a
				href="mailto:hello@example.com"
				class="rounded-md py-1 font-semibold transition hover:text-brand-accent focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
			>
				Email
			</a>
		</div>
	</div>

	<div
		data-profile-reveal
		class="relative z-10 justify-self-center md:justify-self-end"
		aria-label="Portrait of Timmy"
	>
		<svg
			class="pointer-events-none absolute -top-8 -left-8 z-0 h-40 w-40 text-brand-accent/35 md:-top-10 md:-left-12 md:h-52 md:w-52"
			viewBox="0 0 220 220"
			aria-hidden="true"
		>
			<path
				d="M152 33C91 14 35 50 48 99c11 42 78 18 64-15-12-28-58-13-64 28-8 52 53 89 116 54"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-dasharray="10 12"
			/>
		</svg>

		<div
			class="absolute -inset-4 rounded-lg border border-brand-primary/15 bg-brand-primary/5"
		></div>
		<div
			class="absolute -right-3 -bottom-3 h-28 w-28 rounded-lg border border-[#f5b86b]/20 bg-[#f5b86b]/10"
		></div>

		<figure
			class="relative overflow-hidden rounded-lg border border-white/10 bg-white/4 p-3 shadow-2xl shadow-black/30"
		>
			<div class="aspect-4/5 w-full max-w-92 overflow-hidden rounded-md bg-white/5">
				<img src={profileImage} alt="Timmy" class="h-full w-full object-cover" loading="eager" />
			</div>

			<figcaption
				class="mt-3 flex items-center justify-between gap-4 text-xs font-semibold tracking-[0.14em] text-text-muted uppercase"
			>
				<span>Frontend</span>
				<span class="text-brand-accent">Motion UI</span>
			</figcaption>
		</figure>
	</div>

	<a
		use:scrollFade
		href="#about"
		class="absolute bottom-6 left-6 hidden items-center gap-2 text-xs font-semibold tracking-[0.16em] text-text-muted uppercase transition hover:text-brand-accent md:flex"
	>
		<span class="h-8 w-px animate-wave-flow bg-brand-accent/60"></span>
		Scroll
	</a>
</div>
