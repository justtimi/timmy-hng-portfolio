<script lang="ts">
	import { resolve } from '$app/paths';
	import { scrollFade } from '$lib/actions/scrollFade';

	let name = '';
	let email = '';
	let message = '';
	let status = '';

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const sanitize = (value: string) => value.trim().replace(/[<>]/g, '');

	const handleSubmit = () => {
		const cleanName = sanitize(name);
		const cleanEmail = sanitize(email);
		const cleanMessage = sanitize(message);

		if (!cleanName || !cleanEmail || !cleanMessage) {
			status = 'Please fill out every field so I can reply properly.';
			return;
		}

		if (!emailPattern.test(cleanEmail)) {
			status = 'Please use a valid email address.';
			return;
		}

		const subject = encodeURIComponent(`Portfolio message from ${cleanName}`);
		const body = encodeURIComponent(`${cleanMessage}\n\nFrom: ${cleanName} <${cleanEmail}>`);

		status = 'Opening your email client with a prepared message.';
		window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
	};
</script>

<section class="mx-auto max-w-6xl px-6 py-section-y md:px-8">
	<div class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
		<div use:scrollFade>
			<span class="font-handwritten text-2xl text-[#f5b86b]">final curl</span>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-text-main md:text-3xl">
				Let us build something with a pulse.
			</h2>
			<p class="mt-3 max-w-xl text-sm leading-6 text-text-muted">
				Available for frontend projects, expressive UI builds, and motion-focused interfaces. Send a
				note and I will pick it up from there.
			</p>

			<div class="mt-5 flex flex-wrap gap-3">
				<a
					href="https://github.com/justtimi"
					target="_blank"
					rel="noreferrer"
					class="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-text-main transition hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white/10 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
				>
					GitHub
				</a>
				<a
					href={'/resume-timmy.txt'}
					download
					class="rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-bg-deep transition hover:-translate-y-0.5 hover:bg-brand-accent focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
				>
					Download Resume
				</a>
			</div>
		</div>

		<form
			use:scrollFade
			class="rounded-lg border border-white/10 bg-white/[0.04] p-4"
			aria-describedby="contact-status"
			onsubmit={(event) => {
				event.preventDefault();
				handleSubmit();
			}}
			autoComplete="on"
		>
			<div class="grid gap-3 sm:grid-cols-2">
				<label class="grid gap-2 text-sm font-semibold text-text-main">
					Name
					<input
						bind:value={name}
						name="name"
						autocomplete="name"
						class="rounded-lg border-white/10 bg-black/15 text-text-main placeholder:text-text-muted focus:border-brand-accent focus:ring-brand-accent"
						placeholder="Your name"
					/>
				</label>

				<label class="grid gap-2 text-sm font-semibold text-text-main">
					Email
					<input
						bind:value={email}
						name="email"
						type="email"
						autocomplete="email"
						class="rounded-lg border-white/10 bg-black/15 text-text-main placeholder:text-text-muted focus:border-brand-accent focus:ring-brand-accent"
						placeholder="you@example.com"
					/>
				</label>
			</div>

			<label class="mt-3 grid gap-2 text-sm font-semibold text-text-main">
				Message
				<textarea
					bind:value={message}
					name="message"
					rows="5"
					class="resize-none rounded-lg border-white/10 bg-black/15 text-text-main placeholder:text-text-muted focus:border-brand-accent focus:ring-brand-accent"
					placeholder="Tell me what you want to build."
				></textarea>
			</label>

			<div class="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<p id="contact-status" class="min-h-5 text-sm text-text-muted" aria-live="polite">
					{status}
				</p>

				<button
					type="submit"
					class="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-bg-deep transition hover:-translate-y-0.5 hover:bg-brand-accent focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-brand-accent"
					disabled={!name || !email || !message}
				>
					Send Message
				</button>
			</div>
		</form>
	</div>
</section>
