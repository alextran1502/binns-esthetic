<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="page-hero"
	style="--hero-image: url('https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80');"
>
	<div class="hero-copy">
		<p class="eyebrow">Contact</p>
		<h1 class="page-title">Binns Academy</h1>
		<p class="page-subtitle">Bellevue, Nebraska</p>
	</div>
</section>

<section class="section" style="--delay: 80ms;">
	<div class="split">
		<article>
			<div class="section-header">
				<h2 class="section-title">Get in touch</h2>
			</div>
			<p class="section-lead">
				Phone: [Your Number]
				<br />
				Email: [Your Email]
			</p>
			<div class="button-row">
				<a class="btn btn-primary" href="#waitlist">Join Waitlist</a>
				<a class="btn btn-outline" href={resolve('/binns-ink-salon')}>Book Appointment</a>
			</div>
		</article>
		<article class="media-card">
			<img
				src="https://images.unsplash.com/photo-1514996550219-62672472d03b?auto=format&fit=crop&w=1200&q=80"
				alt="Front desk reception at skincare studio"
				loading="lazy"
			/>
		</article>
	</div>
</section>

<section id="waitlist" class="section cta-strip" style="--delay: 140ms;">
	<div class="section-header">
		<h2 class="section-title">Join the pre-launch interest list</h2>
		<p class="section-lead">
			Receive admissions updates, information session invites, and early enrollment announcements.
		</p>
	</div>
	<div class="button-row">
		<a
			class="btn btn-primary"
			href="mailto:[Your Email]?subject=Binns%20Academy%20Waitlist%20Request"
		>
			Join Waitlist
		</a>
		<a
			class="btn btn-outline"
			href="mailto:[Your Email]?subject=Binns%20Academy%20Appointment%20Request"
		>
			Book Appointment
		</a>
	</div>
	<p class="section-lead">Follow us on social media for updates.</p>
</section>
