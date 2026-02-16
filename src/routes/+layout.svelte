<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';

	let { children } = $props();
	let menuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/esthetic-school', label: 'Esthetic School' },
		{ href: '/binns-ink-salon', label: 'Binns Ink Salon' },
		{ href: '/continuing-education', label: 'Continuing Education' },
		{ href: '/our-facility', label: 'Our Facility' },
		{ href: '/about', label: 'About' },
		{ href: '/faq', label: 'FAQ' },
		{ href: '/contact', label: 'Contact' }
	] as const;

	const quickLinks = navLinks.slice(1, 5);

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Binns Academy | Bellevue, Nebraska</title>
	<meta
		name="description"
		content="Professional esthetic training and advanced skin services in Bellevue, Nebraska."
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<div class="header-row container">
			<a class="brand" href={resolve('/')} onclick={closeMenu}>
				<span class="brand-mark">BINNS</span>
				<span class="brand-sub">Binns Academy + Ink Salon</span>
			</a>

			<button
				type="button"
				class="menu-toggle"
				aria-expanded={menuOpen}
				aria-controls="site-nav"
				onclick={() => (menuOpen = !menuOpen)}
			>
				Menu
			</button>

			<nav id="site-nav" class="main-nav" class:open={menuOpen}>
				{#each navLinks as link (link.href)}
					<a
						href={resolve(link.href)}
						class:active={$page.url.pathname === link.href}
						onclick={closeMenu}
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	</header>

	<main>{@render children()}</main>

	<footer class="site-footer">
		<div class="footer-grid">
			<section>
				<p class="eyebrow">Binns Academy</p>
				<h2 class="footer-title">
					Professional beauty education and advanced skin services in Bellevue.
				</h2>
				<p>
					Binns Academy combines esthetic instruction, clinical skill development, and customized
					skin services under one professional roof.
				</p>
			</section>

			<section>
				<h3 class="footer-heading">Quick Links</h3>
				<ul class="footer-links">
					{#each quickLinks as link (link.href)}
						<li><a href={resolve(link.href)}>{link.label}</a></li>
					{/each}
				</ul>
			</section>

			<section>
				<h3 class="footer-heading">Get Started</h3>
				<p>Bellevue, Nebraska</p>
				<p>
					Phone: [Your Number]
					<br />
					Email: [Your Email]
				</p>
				<div class="button-row">
					<a class="btn btn-light" href={resolve('/contact')}>Join Waitlist</a>
					<a class="btn btn-outline-light" href={resolve('/binns-ink-salon')}> Book Appointment </a>
				</div>
			</section>
		</div>
	</footer>
</div>
