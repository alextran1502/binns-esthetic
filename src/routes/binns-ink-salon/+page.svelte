<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="page-hero"
	style="--hero-image: url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80');"
>
	<div class="hero-copy">
		<p class="eyebrow">Binns Ink Salon</p>
		<h1 class="page-title">Advanced Skin Treatments in Bellevue, Nebraska</h1>
		<p class="page-subtitle">
			Binns Ink Salon provides customized skincare services in a professional, clinical environment.
		</p>
		<div class="button-row">
			<a class="btn btn-primary" href="#book">Book Appointment</a>
			<a class="btn btn-outline" href={resolve('/contact')}>Contact Our Team</a>
		</div>
	</div>
</section>

<section class="section" style="--delay: 80ms;">
	<div class="section-header">
		<h2 class="section-title">Clinical-level care with a personalized plan</h2>
		<p class="section-lead">
			Our approach combines advanced techniques with personalized consultation to deliver safe and
			effective treatments.
		</p>
	</div>
	<div class="split">
		<article class="surface-panel">
			<h3>What to expect</h3>
			<p>
				Each service begins with skin analysis and treatment planning so your appointment supports
				your long-term skin goals, not just one-day results.
			</p>
			<p>
				Protocols are selected based on skin type, tolerance, and treatment history for consistent,
				ethical care.
			</p>
		</article>
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=1200&q=80"
				alt="Professional esthetic facial service"
				loading="lazy"
			/>
		</article>
	</div>
</section>

<section class="section" style="--delay: 140ms;">
	<div class="section-header">
		<p class="eyebrow">Services</p>
		<h2 class="section-title">Targeted treatment options</h2>
	</div>
	<div class="card-grid">
		<article class="card">
			<h3>Custom Facials</h3>
			<p>Tailored treatments based on skin type and goals.</p>
		</article>
		<article class="card">
			<h3>Acne Treatment Programs</h3>
			<p>Structured plans designed for acne management and skin balance.</p>
		</article>
		<article class="card">
			<h3>Anti-Aging Treatments</h3>
			<p>Non-invasive skin rejuvenation and firming treatments.</p>
		</article>
		<article class="card">
			<h3>Chemical Exfoliation</h3>
			<p>Superficial exfoliation treatments performed within professional guidelines.</p>
		</article>
		<article class="card">
			<h3>Waxing Services</h3>
			<p>Safe and professional facial and body waxing.</p>
		</article>
	</div>
</section>

<section class="section" style="--delay: 190ms;">
	<div class="split">
		<article>
			<div class="section-header">
				<p class="eyebrow">Our Approach</p>
				<h2 class="section-title">Skincare should always be</h2>
			</div>
			<ul class="check-list">
				<li>Personalized</li>
				<li>Professional</li>
				<li>Ethical</li>
				<li>Results-focused</li>
			</ul>
		</article>
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=1200&q=80"
				alt="Skin analysis in clinic setting"
				loading="lazy"
			/>
		</article>
	</div>
</section>

<section id="book" class="section cta-strip" style="--delay: 230ms;">
	<div class="section-header">
		<h2 class="section-title">Ready to book your treatment?</h2>
		<p class="section-lead">
			Appointments are available now for clients in Bellevue and surrounding areas.
		</p>
	</div>
	<div class="button-row">
		<a class="btn btn-primary" href={resolve('/contact')}>Book Appointment</a>
	</div>
</section>
