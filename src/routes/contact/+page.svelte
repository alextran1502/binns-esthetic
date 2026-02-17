<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] overflow-hidden rounded-3xl shadow-[0_20px_42px_rgba(82,28,13,0.16)] md:w-[min(1120px,calc(100%-2.5rem))]"
>
	<div
		class="flex min-h-[360px] items-end bg-cover bg-center p-6 md:min-h-[500px] md:p-14"
		style="background-image: linear-gradient(115deg, rgba(213, 69, 27, 0.54) 0%, rgba(244, 231, 225, 0.68) 58%, rgba(244, 231, 225, 0.9) 100%), url('https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80');"
	>
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Contact</p>
			<h1 class="mt-2 font-['Faustina'] text-5xl leading-tight text-[#521C0D] md:text-6xl">
				Binns Esthetic
			</h1>
			<p class="mt-3 text-lg text-[#7A4333]">Bellevue, Nebraska</p>
		</div>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="grid gap-4 md:grid-cols-2">
		<article>
			<h2 class="font-['Faustina'] text-4xl leading-tight md:text-5xl">Get in touch</h2>
			<p class="mt-3 text-[#7A4333]">
				Phone: [Your Number]
				<br />
				Email: [Your Email]
			</p>
			<div class="mt-5 flex flex-wrap gap-3">
				<a
					href="#waitlist"
					class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
				>
					Join Waitlist
				</a>
				<a
					href={resolve('/binns-ink-salon')}
					class="inline-flex items-center rounded-full border border-[#D5451B]/50 bg-white/90 px-5 py-3 text-sm font-bold text-[#D5451B] transition hover:bg-white"
				>
					Book Appointment
				</a>
			</div>
		</article>
		<article class="overflow-hidden rounded-2xl border border-[#521C0D]/15 bg-[#F3D7C7]">
			<img
				src="https://images.unsplash.com/photo-1514996550219-62672472d03b?auto=format&fit=crop&w=1200&q=80"
				alt="Front desk reception at skincare studio"
				loading="lazy"
				class="h-full min-h-[250px] w-full object-cover"
			/>
		</article>
	</div>
</section>

<section
	id="waitlist"
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[linear-gradient(160deg,rgba(255,155,69,0.24),rgba(213,69,27,0.2),rgba(82,28,13,0.12))] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<h2 class="max-w-xl font-['Faustina'] text-4xl leading-tight md:text-5xl">
		Join the pre-launch interest list
	</h2>
	<p class="mt-3 text-[#7A4333]">
		Receive admissions updates, information session invites, and early enrollment announcements.
	</p>
	<div class="mt-5 flex flex-wrap gap-3">
		<a
			class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
			href="mailto:[Your Email]?subject=Binns%20Esthetic%20Waitlist%20Request"
		>
			Join Waitlist
		</a>
		<a
			class="inline-flex items-center rounded-full border border-[#D5451B]/50 bg-white/90 px-5 py-3 text-sm font-bold text-[#D5451B] transition hover:bg-white"
			href="mailto:[Your Email]?subject=Binns%20Esthetic%20Appointment%20Request"
		>
			Book Appointment
		</a>
	</div>
	<p class="mt-4 text-[#7A4333]">Follow us on social media for updates.</p>
</section>
