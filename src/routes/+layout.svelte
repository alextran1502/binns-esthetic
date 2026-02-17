<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';

	let { children } = $props();
	let menuOpen = $state(false);

	const navLinks = [
		{ href: '/esthetic-school', label: 'Esthetic School' },
		{ href: '/binns-ink-salon', label: 'Binns Ink Salon' },
		{ href: '/continuing-education', label: 'Continuing Education' },
		{ href: '/our-facility', label: 'Our Facility' },
		{ href: '/about', label: 'About' },
		{ href: '/faq', label: 'Faq' },
		{ href: '/contact', label: 'Contact' }
	] as const;

	const quickLinks = navLinks.slice(0, 4);

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script async src="https://tally.so/widgets/embed.js"></script>
	<title>Binns Esthetic | Bellevue, Nebraska</title>
	<meta
		name="description"
		content="Professional esthetic training and advanced skin services in Bellevue, Nebraska."
	/>
</svelte:head>

<div class="min-h-screen bg-[#F4E7E1] font-['Manrope'] text-[#521C0D]">
	<header class="sticky top-0 z-50 border-b border-[#521C0D]/15 bg-[#F4E7E1]/90 backdrop-blur">
		<div
			class="relative mx-auto w-[min(1120px,calc(100%-1.4rem))] py-3 md:w-[min(1120px,calc(100%-2.5rem))] md:py-4"
		>
			<div
				class="flex items-start justify-between gap-3 md:grid md:grid-cols-[auto_1fr] md:items-start md:gap-10"
			>
				<div class="flex items-start gap-2">
					<a href={resolve('/')} class="flex flex-col gap-0.5 leading-none" onclick={closeMenu}>
						<span class="font-['Faustina'] text-[2rem] font-bold text-[#D5451B]"
							>Binns Esthetic</span
						>
						<span class="text-[0.72rem] tracking-[0.16em] text-[#7A4333]"
							>Esthetic School + Ink Salon</span
						>
					</a>

					<button
						type="button"
						class="inline-flex rounded-full border border-[#521C0D]/20 bg-[#FCF3EE] px-4 py-2 text-sm font-semibold md:hidden"
						aria-expanded={menuOpen}
						aria-controls="site-nav"
						onclick={() => (menuOpen = !menuOpen)}
					>
						Menu
					</button>
				</div>

				<nav
					id="site-nav"
					class={`${menuOpen ? 'grid' : 'hidden'} absolute top-full right-0 left-0 mt-2 gap-1 rounded-xl border border-[#521C0D]/15 bg-[#FCF3EE] p-2 shadow-[0_20px_40px_rgba(82,28,13,0.15)] md:static md:col-start-2 md:mt-0 md:flex md:flex-wrap md:items-center md:justify-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
				>
					{#each navLinks as link (link.href)}
						<a
							href={resolve(link.href)}
							onclick={closeMenu}
							class={`rounded-full px-4 py-2 text-sm font-semibold transition ${$page.url.pathname === link.href ? 'bg-[#F4B8A8] text-[#D5451B]' : 'text-[#7A4333] hover:bg-[#FFD6B6] hover:text-[#521C0D]'}`}
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>
		</div>
	</header>

	<main class="pb-12">{@render children()}</main>

	<footer
		class="mx-auto mb-6 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl p-6 text-[#FFF4EA] shadow-[0_24px_50px_rgba(82,28,13,0.25)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
		style="background-image: linear-gradient(130deg, rgba(82, 28, 13, 0.94), rgba(213, 69, 27, 0.9)), url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80'); background-size: cover; background-position: center;"
	>
		<div class="grid gap-6 lg:grid-cols-[1.3fr_0.9fr_1fr]">
			<section>
				<p class="text-sm font-semibold tracking-[0.08em] text-[#FFE3CC]">Binns Esthetic</p>
				<h2 class="mt-2 max-w-xl font-['Faustina'] text-3xl leading-tight md:text-4xl">
					Professional beauty education and advanced skin services in Bellevue.
				</h2>
				<p class="mt-3 text-[#FFECDD]">
					Binns Esthetic combines esthetic instruction, clinical skill development, and customized
					skin services under one professional roof.
				</p>
			</section>

			<section>
				<h3 class="text-base font-semibold">Quick Links</h3>
				<ul class="mt-3 grid gap-2 text-[#FFE3CC]">
					{#each quickLinks as link (link.href)}
						<li>
							<a href={resolve(link.href)} class="transition hover:text-white">{link.label}</a>
						</li>
					{/each}
				</ul>
			</section>

			<section>
				<h3 class="text-base font-semibold">Get Started</h3>
				<p class="mt-2 text-[#FFECDD]">Bellevue, Nebraska</p>
				<p class="mt-2 text-[#FFECDD]">Use the contact and booking forms to reach our team.</p>
				<div class="mt-4 flex flex-wrap gap-3">
					<button
						type="button"
						onclick={() => window.location.assign(`${resolve('/contact')}#waitlist`)}
						class="inline-flex items-center rounded-full bg-[#FF9B45] px-4 py-2 text-sm font-bold text-[#521C0D] transition hover:brightness-95"
					>
						Join Waitlist
					</button>
					<button
						type="button"
						onclick={() => window.location.assign(`${resolve('/contact')}#appointment`)}
						class="inline-flex items-center rounded-full border border-[#FF9B45]/70 px-4 py-2 text-sm font-bold text-[#FFF4EA] transition hover:bg-white/10"
					>
						Book Appointment
					</button>
				</div>
			</section>
		</div>
	</footer>
</div>
