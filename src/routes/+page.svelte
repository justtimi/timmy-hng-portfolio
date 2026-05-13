<script>
	import Hero from '$lib/components/sections/Hero.svelte';
</script>

<main
	class="min-h-screen bg-bg-deep font-sans text-text-main antialiased selection:bg-brand-primary/20 selection:text-brand-accent"
>
	<section id="hero" class="w-full">
		<Hero />
	</section>

	<section id="about" class="mx-auto max-w-6xl border-t border-white/5 px-6 py-section-y md:px-8">
		<div class="max-w-2xl">
			<h2 class="text-2xl font-bold tracking-tight">About System</h2>
			<p class="mt-2 text-sm leading-relaxed text-text-muted">
				Building high-density layouts prioritizing fast-scanning architectures over open negative
				spaces.
			</p>
		</div>
	</section>
	<section
		id="projects"
		class="mx-auto max-w-6xl border-t border-white/5 px-6 py-section-y-lg md:px-8"
	>
		<h2 class="mb-6 text-2xl font-bold tracking-tight">Selected Production</h2>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div
				class="rounded-2xl border border-white/5 bg-white/1 p-card-p transition-all duration-300 ease-wave hover:border-brand-primary/20"
			>
				<span class="font-handwritten text-xl text-brand-accent">01</span>
				<h3 class="mt-1 text-base font-semibold">Core Architecture</h3>
			</div>
			<div
				class="rounded-2xl border border-white/5 bg-white/1 p-card-p transition-all duration-300 ease-wave hover:border-brand-primary/20"
			>
				<span class="font-handwritten text-xl text-brand-accent">02</span>
				<h3 class="mt-1 text-base font-semibold">Motion Engines</h3>
			</div>
		</div>
	</section>

	<section id="contact" class="mx-auto max-w-6xl border-t border-white/5 px-6 py-section-y md:px-8">
		<div
			class="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/5 bg-white/2 p-card-p-lg sm:flex-row sm:items-center"
		>
			<div>
				<h2 class="text-xl font-bold tracking-tight">Start building seamlessly.</h2>
				<p class="mt-1 text-xs text-text-muted">
					Minimal layout layers optimized for instantaneous interactions.
				</p>
			</div>
			<button
				class="rounded-xl bg-brand-primary px-4 py-2 text-xs font-semibold text-bg-deep transition-colors duration-300 ease-wave hover:bg-brand-accent"
			>
				Get in Touch
			</button>
		</div>
	</section>
</main>
