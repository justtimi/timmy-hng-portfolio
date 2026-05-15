<script>
	import SiteNav from '$lib/components/layout/SiteNav.svelte';
	import SvgAnimation from '$lib/components/motion/SvgAnimation.svelte';
	import About from '$lib/components/sections/About.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
</script>

<main
	id="main-content"
	class="relative min-h-screen overflow-hidden bg-bg-deep font-sans text-text-main antialiased selection:bg-brand-primary/20 selection:text-brand-accent"
>
	<SiteNav />
	<SvgAnimation />

	<section id="hero" class="relative z-10 w-full" aria-label="Introduction">
		<Hero />
	</section>

	<section id="about" class="relative z-10 border-t border-white/5" aria-label="About Timmy">
		<About />
	</section>

	<section id="projects" class="relative z-10 border-t border-white/5" aria-label="Projects">
		<ProjectsSection />
	</section>

	<section id="contact" class="relative z-10 border-t border-white/5" aria-label="Contact">
		<ContactSection />
	</section>
</main>
