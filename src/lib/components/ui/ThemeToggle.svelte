<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, toggleTheme, setTheme } from '$lib/stores/theme';

	onMount(() => {
		setTheme($theme);
	});
</script>

<button
	type="button"
	class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-text-main transition duration-300 ease-wave hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white/10 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
	aria-label={$theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
	aria-pressed={$theme === 'light'}
	onclick={toggleTheme}
>
	{#if $theme === 'dark'}
		<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M12 4V2M12 22v-2M4.93 4.93 3.52 3.52M20.48 20.48l-1.41-1.41M4 12H2M22 12h-2M4.93 19.07l-1.41 1.41M20.48 3.52l-1.41 1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	{:else}
		<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M21 14.5A7.5 7.5 0 0 1 9.5 3 9 9 0 1 0 21 14.5Z"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>
