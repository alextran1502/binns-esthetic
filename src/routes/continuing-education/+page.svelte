<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="page-hero"
	style="--hero-image: url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80');"
>
	<div class="hero-copy">
		<p class="eyebrow">Continuing Education</p>
		<h1 class="page-title">Professional Development for Licensed Estheticians</h1>
		<p class="page-subtitle">
			Binns Academy offers continuing education workshops designed to enhance practical skills and
			expand professional knowledge.
		</p>
		<div class="button-row">
			<a class="btn btn-primary" href="#ce-interest">Join CE Interest List</a>
			<a class="btn btn-outline" href={resolve('/contact')}>Contact Binns Academy</a>
		</div>
	</div>
</section>

<section class="section" style="--delay: 80ms;">
	<div class="section-header">
		<p class="eyebrow">Workshop Examples</p>
		<h2 class="section-title">Focused CE topics for modern esthetics practice</h2>
	</div>
	<div class="card-grid">
		<article class="card">
			<h3>Advanced Acne Treatment</h3>
			<p>Protocol-based acne treatment planning and client education methods.</p>
		</article>
		<article class="card">
			<h3>Chemical Exfoliation Intensive</h3>
			<p>Hands-on review of superficial exfoliation selection and application standards.</p>
		</article>
		<article class="card">
			<h3>Advanced Skin Analysis</h3>
			<p>Improve consultation accuracy through structured skin observation workflows.</p>
		</article>
		<article class="card">
			<h3>Business Development for Estheticians</h3>
			<p>Strategies to grow a compliant, client-centered, and sustainable practice.</p>
		</article>
	</div>
</section>

<section class="section" style="--delay: 140ms;">
	<div class="split">
		<article>
			<div class="section-header">
				<h2 class="section-title">Courses built for real professional growth</h2>
			</div>
			<p class="section-lead">
				Each workshop is designed for professional development with practical, repeatable methods
				that can be applied immediately in a clinical setting.
			</p>
		</article>
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
				alt="Continuing education session for skincare professionals"
				loading="lazy"
			/>
		</article>
	</div>
</section>

<section id="ce-interest" class="section cta-strip" style="--delay: 190ms;">
	<div class="section-header">
		<h2 class="section-title">Join our CE interest list for updates</h2>
		<p class="section-lead">
			Get notices on workshop launches, schedules, and registration openings.
		</p>
	</div>
	<div class="button-row">
		<a class="btn btn-primary" href={resolve('/contact')}>Join CE Interest List</a>
	</div>
</section>
