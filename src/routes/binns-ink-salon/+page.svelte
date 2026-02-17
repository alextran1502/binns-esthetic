<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] overflow-hidden rounded-3xl shadow-[0_20px_42px_rgba(82,28,13,0.16)] md:w-[min(1120px,calc(100%-2.5rem))]"
>
	<div
		class="flex min-h-[360px] items-end bg-cover bg-center p-6 md:min-h-[500px] md:p-14"
		style="background-image: linear-gradient(115deg, rgba(213, 69, 27, 0.54) 0%, rgba(244, 231, 225, 0.68) 58%, rgba(244, 231, 225, 0.9) 100%), url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80');"
	>
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Binns Ink Salon</p>
			<h1 class="mt-2 font-['Faustina'] text-5xl leading-tight text-[#521C0D] md:text-6xl">
				Advanced Skin Treatments in Bellevue, Nebraska
			</h1>
			<p class="mt-3 text-lg text-[#7A4333]">
				Binns Ink Salon provides customized skincare services in a professional, clinical
				environment.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<button
					type="button"
					onclick={() => window.location.assign(`${resolve('/contact')}#appointment`)}
					class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
				>
					Book Appointment
				</button>
				<a
					href={resolve('/contact')}
					class="inline-flex items-center rounded-full border border-[#D5451B]/50 bg-white/90 px-5 py-3 text-sm font-bold text-[#D5451B] transition hover:bg-white"
				>
					Contact Our Team
				</a>
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="mb-4">
		<h2 class="font-['Faustina'] text-4xl leading-tight md:text-5xl">
			Clinical-level care with a personalized plan
		</h2>
		<p class="mt-3 text-[#7A4333]">
			Our approach combines advanced techniques with personalized consultation to deliver safe and
			effective treatments.
		</p>
	</div>
	<div class="grid gap-4 md:grid-cols-2">
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">What to expect</h3>
			<p class="mt-3">
				Each service begins with skin analysis and treatment planning so your appointment supports
				your long-term skin goals, not just one-day results.
			</p>
			<p class="mt-3">
				Protocols are selected based on skin type, tolerance, and treatment history for consistent,
				ethical care.
			</p>
		</article>
		<article class="overflow-hidden rounded-2xl border border-[#521C0D]/15 bg-[#F3D7C7]">
			<img
				src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=1200&q=80"
				alt="Professional esthetic facial service"
				loading="lazy"
				class="h-full min-h-[250px] w-full object-cover"
			/>
		</article>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="mb-4">
		<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Services</p>
		<h2 class="mt-2 font-['Faustina'] text-4xl leading-tight md:text-5xl">
			Targeted treatment options
		</h2>
	</div>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Custom Facials</h3>
			<p class="mt-2 text-[#7A4333]">Tailored treatments based on skin type and goals.</p>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Acne Treatment Programs</h3>
			<p class="mt-2 text-[#7A4333]">
				Structured plans designed for acne management and skin balance.
			</p>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Anti-Aging Treatments</h3>
			<p class="mt-2 text-[#7A4333]">Non-invasive skin rejuvenation and firming treatments.</p>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Chemical Exfoliation</h3>
			<p class="mt-2 text-[#7A4333]">
				Superficial exfoliation treatments performed within professional guidelines.
			</p>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Waxing Services</h3>
			<p class="mt-2 text-[#7A4333]">Safe and professional facial and body waxing.</p>
		</article>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="grid gap-4 md:grid-cols-2">
		<article>
			<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Our Approach</p>
			<h2 class="mt-2 font-['Faustina'] text-4xl leading-tight md:text-5xl">
				Skincare should always be
			</h2>
			<ul class="mt-4 grid gap-2">
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Personalized
				</li>
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Professional
				</li>
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Ethical
				</li>
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Results-focused
				</li>
			</ul>
		</article>
		<article class="overflow-hidden rounded-2xl border border-[#521C0D]/15 bg-[#F3D7C7]">
			<img
				src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=1200&q=80"
				alt="Skin analysis in clinic setting"
				loading="lazy"
				class="h-full min-h-[250px] w-full object-cover"
			/>
		</article>
	</div>
</section>

<section
	id="book"
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[linear-gradient(160deg,rgba(255,155,69,0.24),rgba(213,69,27,0.2),rgba(82,28,13,0.12))] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<h2 class="max-w-xl font-['Faustina'] text-4xl leading-tight md:text-5xl">
		Ready to book your treatment?
	</h2>
	<p class="mt-3 text-[#7A4333]">
		Appointments are available now for clients in Bellevue and surrounding areas.
	</p>
	<div class="mt-5">
		<button
			type="button"
			onclick={() => window.location.assign(`${resolve('/contact')}#appointment`)}
			class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
		>
			Book Appointment
		</button>
	</div>
</section>
