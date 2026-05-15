<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { scrollFade } from '$lib/actions/scrollFade';
	import { projects } from '$lib/data/data';

	let sectionEl: HTMLElement;
	let activeFilter = $state('All');

	const filters = ['All', ...new Set(projects.map((project) => project.category ?? 'Other'))];
	const filteredProjects = $derived(
		activeFilter === 'All'
			? projects
			: projects.filter((project) => project.category === activeFilter)
	);

	onMount(() => {
		let cleanup = () => {};

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return cleanup;

		void (async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');

			gsap.registerPlugin(ScrollTrigger);

			const ctx = gsap.context(() => {
				gsap.from('[data-project-card]', {
  scrollTrigger: {
    trigger: '[data-project-card]',
    start: 'top 85%',
    toggleActions: 'play none none reverse'
  },
  y: 28,
  autoAlpha: 0,
  duration: 0.75,
  stagger: 0.08,
  ease: 'power3.out'
				});
			}, sectionEl);

			cleanup = () => ctx.revert();
		})();

		return () => cleanup();
	});
</script>

<section bind:this={sectionEl} class="mx-auto max-w-6xl px-6 py-section-y-lg md:px-8">
	<div use:scrollFade class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
		<div class="max-w-2xl">
			<span class="font-handwritten text-2xl text-[#f5b86b]">selected work</span>
			<h2 class="mt-1 text-2xl font-bold tracking-tight text-text-main md:text-3xl">
				Projects shaped around clarity, rhythm, and interaction.
			</h2>
			<p class="mt-2 text-sm leading-6 text-text-muted">
				A mix of product interfaces, layout studies, and focused UI components where the curve
				becomes rhythm, spacing, and guided movement.
			</p>
		</div>

		<a
			href={resolve('/projects')}
			class="w-fit rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-text-main transition duration-300 ease-wave hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white/10 focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
		>
			Open Archive
		</a>
	</div>

	<div use:scrollFade class="mb-5 flex flex-wrap gap-2" aria-label="Project filters">
		{#each filters as filter (filter)}
			<button
				type="button"
				class={`rounded-lg border px-3 py-2 text-sm font-semibold transition duration-300 ease-wave focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent ${
					activeFilter === filter
						? 'border-brand-primary bg-brand-primary text-bg-deep'
						: 'border-white/10 bg-white/5 text-text-muted hover:-translate-y-0.5 hover:border-brand-primary/30 hover:text-text-main'
				}`}
				aria-pressed={activeFilter === filter}
				onclick={() => (activeFilter = filter)}
			>
				{filter}
			</button>
		{/each}
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each filteredProjects as project, index (project.id)}
			<article
				data-project-card
				class={`group overflow-hidden rounded-lg border border-white/10 bg-white/4 transition duration-300 ease-wave hover:-translate-y-1 hover:border-brand-primary/30 hover:bg-white/[0.07] ${
					project.featured ? 'md:col-span-1 lg:col-span-1' : ''
				}`}
			>
				<div>
					<div class="aspect-16/10 overflow-hidden bg-white/5">
						<img
							src={project.image}
							alt={`${project.title} project screenshot`}
							class="h-full w-full object-cover transition duration-700 ease-wave group-hover:scale-105"
							loading={index < 2 ? 'eager' : 'lazy'}
						/>
					</div>

					<div class="p-4">
						<div class="flex items-start justify-between gap-3">
							<div>
								<span class="font-handwritten text-lg text-brand-accent">
									{String(index + 1).padStart(2, '0')}
								</span>
								<h3 class="mt-1 text-base font-semibold text-text-main">{project.title}</h3>
								<p class="mt-1 text-xs font-semibold text-text-muted">{project.category}</p>
							</div>

							{#if project.featured}
								<span
									class="rounded-md border border-[#f5b86b]/25 bg-[#f5b86b]/10 px-2 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-[#f5b86b] uppercase"
								>
									Featured
								</span>
							{/if}
						</div>

						<p class="mt-3 text-sm leading-6 text-text-muted">{project.description}</p>

						<div class="mt-4 flex flex-wrap gap-2">
							{#each project.tech as item (item)}
								<span
									class="rounded-md border border-white/10 bg-black/15 px-2 py-1 text-xs text-text-muted"
								>
									{item}
								</span>
							{/each}
						</div>

						<div class="mt-4 flex gap-3 text-sm font-semibold">
							<a
								// eslint-disable-next-line svelte/no-navigation-without-resolve
								href={project.liveUrl ?? '#'}
								target="_blank"
								rel="noopener noreferrer"
								class="text-brand-accent transition hover:text-text-main focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
							>
								Live
							</a>
							<a
								// eslint-disable-next-line svelte/no-navigation-without-resolve
								href={project.githubUrl ?? '#'}
								target="_blank"
								rel="noopener noreferrer"
								class="text-text-muted transition hover:text-text-main focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
							>
								Code
							</a>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
