<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="page-hero"
	style="--hero-image: url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80');"
>
	<div class="hero-copy">
		<p class="eyebrow">Home Page</p>
		<h1 class="page-title">Elevating Skin Education &amp; Professional Beauty in Nebraska</h1>
		<p class="page-subtitle">
			Professional Esthetic Training &amp; Advanced Skin Services in Bellevue
		</p>
		<div class="button-row">
			<a class="btn btn-primary" href={resolve('/esthetic-school')}>Join the Student Waitlist</a>
			<a class="btn btn-outline" href={resolve('/binns-ink-salon')}>Book a Facial</a>
			<a class="btn btn-ghost" href={resolve('/esthetic-school')}>Learn About Our Programs</a>
		</div>
	</div>
</section>

<section class="section" style="--delay: 80ms;">
	<div class="section-header">
		<h2 class="section-title">Welcome to Binns Academy and Binns Ink Salon</h2>
		<p class="section-lead">
			Binns Academy is a professional beauty institution dedicated to raising the standard of
			esthetic education and advanced skin care in Nebraska.
		</p>
	</div>
	<div class="split">
		<article class="surface-panel">
			<p>
				Founded by a licensed esthetic instructor and salon owner, Binns Academy combines real-world
				clinical experience with structured, professional education.
			</p>
			<p>
				Whether you are pursuing a career in esthetics or seeking customized skin treatments, Binns
				Academy is designed to support excellence at every level.
			</p>
		</article>
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
				alt="Professional esthetic treatment room"
				loading="lazy"
			/>
		</article>
	</div>
</section>

<section class="section" style="--delay: 140ms;">
	<div class="section-header">
		<p class="eyebrow">What We Offer</p>
		<h2 class="section-title">Education pathways and advanced salon services</h2>
	</div>
	<div class="card-grid">
		<article class="card">
			<h3>Esthetic Education (Coming Soon)</h3>
			<ul class="dot-list">
				<li>600-Hour Esthetician Program</li>
				<li>300-Hour Instructor Training Program</li>
				<li>Integrated Advanced Skin Training</li>
				<li>Continuing Education Workshops</li>
			</ul>
		</article>
		<article class="card">
			<h3>Binns Ink Salon Services</h3>
			<ul class="dot-list">
				<li>Custom Facials</li>
				<li>Acne Treatment Programs</li>
				<li>Anti-Aging Treatments</li>
				<li>Chemical Exfoliation</li>
				<li>Professional Waxing</li>
				<li>Retail Skincare Products</li>
			</ul>
		</article>
	</div>
</section>

<section class="section" style="--delay: 180ms;">
	<div class="split">
		<article>
			<div class="section-header">
				<p class="eyebrow">Why Binns Academy?</p>
				<h2 class="section-title">Built for focused growth and professional outcomes</h2>
			</div>
			<ul class="check-list">
				<li>Boutique, focused learning environment</li>
				<li>Advanced skin-focused curriculum</li>
				<li>Clinical training experience</li>
				<li>Licensed instructor leadership</li>
				<li>Professional, modern facility</li>
			</ul>
		</article>
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
				alt="Esthetics students in hands-on training"
				loading="lazy"
			/>
		</article>
	</div>
</section>

<section class="section cta-strip" style="--delay: 220ms;">
	<div class="section-header">
		<p class="eyebrow">Call To Action</p>
		<h2 class="section-title">Be the First to Know When Enrollment Opens</h2>
		<p class="section-lead">
			Join our exclusive pre-launch list for updates, information sessions, and early enrollment
			announcements.
		</p>
	</div>
	<div class="button-row">
		<a class="btn btn-primary" href={resolve('/contact')}>Join the Waitlist</a>
	</div>
</section>
