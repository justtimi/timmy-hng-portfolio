<script lang="ts">
	import { resolve } from '$app/paths';
	import { scrollFade } from '$lib/actions/scrollFade';
	import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';

	const navItems = [
		{ href: '#about', label: 'About' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<a
	href="#main-content"
	class="sr-only rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-bg-deep focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
>
	Skip to content
</a>

<header class="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
	<nav
		use:scrollFade={{ threshold: 0 }}
		class="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/10 bg-bg-deep/78 px-3 py-2 shadow-lg shadow-black/10 backdrop-blur-xl"
		aria-label="Primary navigation"
	>
		<a
			href="#hero"
			class="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-bold tracking-tight text-text-main transition hover:text-brand-accent focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
		>
			<span class="font-handwritten text-lg text-[#f5b86b]">T</span>
			Timmy
		</a>

		<div class="hidden items-center gap-1 sm:flex">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="rounded-md px-3 py-2 text-sm font-semibold text-text-muted transition hover:bg-white/5 hover:text-text-main focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
				>
					{item.label}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-2">
			<a
				href={resolve('/resume-timmy.txt')}
				download
				class="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-text-main transition duration-300 ease-wave hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white/10 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent sm:inline-flex"
			>
				Resume
			</a>

			<ThemeToggle />
		</div>
	</nav>
</header>
