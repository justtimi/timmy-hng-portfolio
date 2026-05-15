<script lang="ts">
	import { onMount } from 'svelte';

	let threadEl: SVGSVGElement;

	const vineClusters = [
		{
			id: 'hero-flourish',
			x: 600,
			y: 120,
			scale: 1.15,
			rotate: -4,
			paths: [
				'M20 184C90 124 92 48 50 42C17 37 6 84 42 97C84 113 129 62 177 84C224 105 214 172 161 181',
				'M116 91C149 43 205 27 235 66C261 100 234 139 198 128C166 119 173 73 217 46',
				'M92 146C68 112 45 125 30 155',
				'M138 139C178 115 211 126 225 161'
			]
		},
		{
			id: 'about-vine',
			x: 70,
			y: 910,
			scale: 1,
			rotate: 6,
			paths: [
				'M25 285C122 244 156 173 114 124C78 82 21 113 39 160C57 207 128 197 174 151C219 105 232 42 300 18',
				'M96 232C75 196 49 204 35 237',
				'M164 151C197 158 216 184 205 216',
				'M238 66C259 101 295 104 317 75'
			]
		},
		{
			id: 'project-branch',
			x: 680,
			y: 1735,
			scale: 0.95,
			rotate: -8,
			paths: [
				'M20 70C100 24 189 31 202 88C214 140 132 161 122 107C113 59 187 50 242 96C302 147 296 228 231 258',
				'M71 47C61 11 21 2 7 35',
				'M167 151C202 146 221 170 214 205',
				'M231 258C190 285 151 275 135 239'
			]
		},
		{
			id: 'closing-flower',
			x: 125,
			y: 3010,
			scale: 1.12,
			rotate: 3,
			paths: [
				'M18 220C92 193 128 144 101 105C76 68 22 86 31 128C40 172 104 161 147 124C195 82 197 27 262 10',
				'M119 150C139 188 181 189 203 157',
				'M70 197C50 160 20 166 8 202',
				'M244 23C276 50 313 41 323 4'
			]
		}
	];

	const flowers = [
		{ id: 'small-bloom', x: 175, y: 520, scale: 0.8 },
		{ id: 'mid-bloom', x: 805, y: 1230, scale: 0.72 },
		{ id: 'project-bloom', x: 210, y: 2350, scale: 0.9 },
		{ id: 'footer-bloom', x: 730, y: 3560, scale: 0.82 }
	];

	const leaves = [
		{ id: 'leaf-1', x: 108, y: 690, rotate: -36 },
		{ id: 'leaf-2', x: 290, y: 1110, rotate: 22 },
		{ id: 'leaf-3', x: 760, y: 1550, rotate: -18 },
		{ id: 'leaf-4', x: 150, y: 2010, rotate: 34 },
		{ id: 'leaf-5', x: 830, y: 2760, rotate: -28 },
		{ id: 'leaf-6', x: 500, y: 3450, rotate: 18 }
	];

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let cleanup = () => {};

		void (async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');

			gsap.registerPlugin(ScrollTrigger);

			const ctx = gsap.context(() => {
				gsap.set('[data-float-ink]', {
					transformOrigin: 'center',
					opacity: 0.45
				});
				gsap.fromTo(
					'[data-ink-draw]',
					{ strokeDashoffset: 1 },
					{
						strokeDashoffset: 0,
						ease: 'none',
						scrollTrigger: {
							trigger: threadEl,
							start: 'top 85%',
							end: 'bottom bottom',
							scrub: 1.2
						},
						stagger: {
							each: 0.015,
							from: 'start'
						}
					}
				);

				// ----------------------------
				// CLUSTER REVEAL (important upgrade)
				// ----------------------------
				gsap.utils.toArray<SVGGElement>('[data-vine-cluster]').forEach((el) => {
					gsap.fromTo(
	el,
	{ opacity: 0, scale: 0.97 },
	{
		opacity: 0.55,
		scale: 1,
		duration: 1.4,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: el,
			start: 'top 82%',
			end: 'top 35%',
			toggleActions: 'play reverse play reverse'
		}
	}
);
				});
				gsap.to('[data-float-ink]', {
					y: (_, el) => Number(el.dataset.floatY ?? 10),
					rotation: (_, el) => Number(el.dataset.floatRotate ?? 2),
					repeat: -1,
					yoyo: true,
					stagger: 0.15,
					duration: 6,
					ease: 'sine.inOut'
				});
			}, threadEl);

			cleanup = () => ctx.revert();
		})();

		return () => cleanup();
	});
</script>


<svg
	bind:this={threadEl}
	class="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible text-text-main"
	viewBox="0 0 1000 3900"
	preserveAspectRatio="none"
	aria-hidden="true"
>
	<defs>
		<filter id="ink-soften" x="-20%" y="-20%" width="140%" height="140%">
			<feGaussianBlur stdDeviation="0.35" />
		</filter>

		<path
			id="storybook-spine"
			d="M515 52
				C 392 164 615 248 481 378
				C 311 543 133 448 103 648
				C 70 871 382 865 318 1092
				C 245 1348 742 1264 721 1510
				C 699 1761 192 1645 235 1942
				C 282 2268 840 2075 800 2404
				C 763 2712 168 2539 206 2884
				C 243 3217 810 3002 752 3374
				C 724 3553 577 3675 638 3850"
		/>
	</defs>

	<!-- FRAME -->
	<rect
		x="36"
		y="34"
		width="928"
		height="3828"
		rx="26"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		opacity="0.07"
	/>

	<!-- SPINE -->
	<use
		href="#storybook-spine"
		fill="none"
		stroke="currentColor"
		stroke-width="18"
		stroke-linecap="round"
		stroke-linejoin="round"
		opacity="0.03"
	/>

	<use
		data-ink-draw
		href="#storybook-spine"
		fill="none"
		stroke="currentColor"
		stroke-width="4.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-dasharray="1"
		stroke-dashoffset="1"
		pathLength="1"
		opacity="0.3"
		filter="url(#ink-soften)"
	/>

	<!-- ================= VINES ================= -->
	{#each vineClusters as cluster (cluster.id)}
		<g
			data-vine-cluster
			data-float-ink
			data-float-y="10"
			data-float-rotate="2"
			transform={`translate(${cluster.x} ${cluster.y}) rotate(${cluster.rotate}) scale(${cluster.scale})`}
			opacity="0.5"
		>
			{#each cluster.paths as path, i (`${cluster.id}-${i}`)}
				<path
					data-ink-draw
					d={path}
					fill="none"
					stroke="currentColor"
					stroke-width={i === 0 ? 4 : 2.5}
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-dasharray="1"
					stroke-dashoffset="1"
					pathLength="1"
					opacity={i === 0 ? 0.4 : 0.3}
				/>
			{/each}
		</g>
	{/each}

	<!-- ================= FLOWERS ================= -->
	{#each flowers as flower (flower.id)}
		<g
			data-float-ink
			data-float-y="8"
			data-float-rotate="2"
			transform={`translate(${flower.x} ${flower.y}) scale(${flower.scale})`}
			opacity="0.45"
		>
			<path
				data-ink-draw
				d="M62 52C41 16 8 31 17 64C27 99 62 84 62 52ZM62 52C83 16 116 31 107 64C97 99 62 84 62 52ZM62 52C29 66 35 105 68 100C103 94 88 62 62 52ZM62 52C95 66 89 105 56 100C21 94 36 62 62 52Z"
				fill="none"
				stroke="currentColor"
				stroke-width="2.4"
				stroke-dasharray="1"
				stroke-dashoffset="1"
				pathLength="1"
			/>
			<circle cx="62" cy="52" r="7" fill="currentColor" opacity="0.15" />
		</g>
	{/each}

	<!-- ================= LEAVES ================= -->
	{#each leaves as leaf (leaf.id)}
		<g
			data-float-ink
			data-float-y="6"
			data-float-rotate="1.5"
			transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rotate})`}
			opacity="0.4"
		>
			<path
				data-ink-draw
				d="M0 36C36 -4 78 -2 112 36C75 47 34 51 0 36Z"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-dasharray="1"
				stroke-dashoffset="1"
				pathLength="1"
			/>
		</g>
	{/each}
</svg>
