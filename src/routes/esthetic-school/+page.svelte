<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="page-hero"
	style="--hero-image: url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80');"
>
	<div class="hero-copy">
		<p class="eyebrow">Esthetic School</p>
		<h1 class="page-title">600-Hour Esthetician Program</h1>
		<p class="page-subtitle">
			Our comprehensive 600-hour esthetician program is designed to prepare students for Nebraska
			licensure and professional practice in spas, salons, and skincare clinics.
		</p>
		<div class="button-row">
			<a class="btn btn-primary" href="#admissions">Join Future Student List</a>
			<a class="btn btn-outline" href="#instructor-program">Explore Instructor Training</a>
		</div>
	</div>
</section>

<section class="section" style="--delay: 80ms;">
	<div class="split">
		<article>
			<div class="section-header">
				<p class="eyebrow">Program Highlights</p>
				<h2 class="section-title">Comprehensive, clinical, and career focused</h2>
			</div>
			<ul class="dot-list">
				<li>Integrated advanced skin treatment training</li>
				<li>Progressive hands-on clinical experience</li>
				<li>Small cohort size</li>
				<li>Instructor mentorship</li>
				<li>Professional development and business education</li>
			</ul>
			<p class="section-lead">
				Graduates are prepared to enter the workforce with confidence and practical experience.
			</p>
		</article>
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=80"
				alt="Esthetics classroom practical training"
				loading="lazy"
			/>
		</article>
	</div>
</section>

<section id="instructor-program" class="section" style="--delay: 140ms;">
	<div class="split">
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80"
				alt="Instructor reviewing esthetic curriculum"
				loading="lazy"
			/>
		</article>
		<article>
			<div class="section-header">
				<p class="eyebrow">Instructor Pathway</p>
				<h2 class="section-title">300-Hour Instructor Training Program</h2>
				<p class="section-lead">
					Designed for licensed estheticians who wish to pursue teaching careers in Nebraska.
				</p>
			</div>
			<ul class="dot-list">
				<li>Adult learning theory</li>
				<li>Curriculum development</li>
				<li>Classroom and clinic management</li>
				<li>Student assessment and evaluation</li>
				<li>Teaching practicum</li>
			</ul>
		</article>
	</div>
</section>

<section id="admissions" class="section cta-strip" style="--delay: 190ms;">
	<div class="section-header">
		<p class="eyebrow">Admissions (Pre-Launch)</p>
		<h2 class="section-title">Enrollment opening soon</h2>
		<p class="section-lead">Join our student interest list to receive:</p>
	</div>
	<ul class="dot-list">
		<li>Program details</li>
		<li>Tuition information</li>
		<li>Application opening dates</li>
		<li>Information session invitations</li>
	</ul>
	<div class="button-row">
		<a class="btn btn-primary" href={resolve('/contact')}>Join Future Student List</a>
	</div>
</section>
