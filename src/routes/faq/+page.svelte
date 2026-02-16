<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="page-hero"
	style="--hero-image: url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80');"
>
	<div class="hero-copy">
		<p class="eyebrow">FAQ</p>
		<h1 class="page-title">Frequently Asked Questions</h1>
		<p class="page-subtitle">
			Answers to common questions about enrollment, tuition, and current salon services.
		</p>
	</div>
</section>

<section class="section" style="--delay: 80ms;">
	<div class="section-header">
		<h2 class="section-title">Enrollment and services</h2>
	</div>
	<div class="faq-list">
		<details class="faq-item" open>
			<summary>When will enrollment open?</summary>
			<p>Enrollment dates will be announced soon. Join our waitlist for updates.</p>
		</details>
		<details class="faq-item">
			<summary>Is financial aid available?</summary>
			<p>Financial aid options are being explored for future program expansion.</p>
		</details>
		<details class="faq-item">
			<summary>What are tuition costs?</summary>
			<p>Tuition information will be released during the admissions announcement phase.</p>
		</details>
		<details class="faq-item">
			<summary>Are salon services currently available?</summary>
			<p>Yes. Binns Ink Salon is currently accepting appointments.</p>
		</details>
	</div>
</section>

<section class="section cta-strip" style="--delay: 140ms;">
	<div class="section-header">
		<h2 class="section-title">Still have questions?</h2>
		<p class="section-lead">
			Contact Binns Academy directly and we can guide you to the right next step.
		</p>
	</div>
	<div class="button-row">
		<a class="btn btn-primary" href={resolve('/contact')}>Contact Binns Academy</a>
		<a class="btn btn-outline" href={resolve('/contact')}>Join Waitlist</a>
	</div>
</section>
