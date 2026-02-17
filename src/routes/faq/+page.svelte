<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] overflow-hidden rounded-3xl shadow-[0_20px_42px_rgba(82,28,13,0.16)] md:w-[min(1120px,calc(100%-2.5rem))]"
>
	<div
		class="flex min-h-[360px] items-end bg-cover bg-center p-6 md:min-h-[500px] md:p-14"
		style="background-image: linear-gradient(115deg, rgba(213, 69, 27, 0.54) 0%, rgba(244, 231, 225, 0.68) 58%, rgba(244, 231, 225, 0.9) 100%), url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80');"
	>
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Faq</p>
			<h1 class="mt-2 font-['Faustina'] text-5xl leading-tight text-[#521C0D] md:text-6xl">
				Frequently Asked Questions
			</h1>
			<p class="mt-3 text-lg text-[#7A4333]">
				Answers to common questions about enrollment, tuition, and current salon services.
			</p>
		</div>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="mb-4">
		<h2 class="font-['Faustina'] text-4xl leading-tight md:text-5xl">Enrollment and services</h2>
	</div>
	<div class="grid gap-3">
		<details class="rounded-xl border border-[#521C0D]/15 bg-[#FFF9F5] px-4 py-3" open>
			<summary class="cursor-pointer text-base font-semibold">When will enrollment open?</summary>
			<p class="mt-2 text-[#7A4333]">
				Enrollment dates will be announced soon. Join our waitlist for updates.
			</p>
		</details>
		<details class="rounded-xl border border-[#521C0D]/15 bg-[#FFF9F5] px-4 py-3">
			<summary class="cursor-pointer text-base font-semibold">Is financial aid available?</summary>
			<p class="mt-2 text-[#7A4333]">
				Financial aid options are being explored for future program expansion.
			</p>
		</details>
		<details class="rounded-xl border border-[#521C0D]/15 bg-[#FFF9F5] px-4 py-3">
			<summary class="cursor-pointer text-base font-semibold">What are tuition costs?</summary>
			<p class="mt-2 text-[#7A4333]">
				Tuition information will be released during the admissions announcement phase.
			</p>
		</details>
		<details class="rounded-xl border border-[#521C0D]/15 bg-[#FFF9F5] px-4 py-3">
			<summary class="cursor-pointer text-base font-semibold"
				>Are salon services currently available?</summary
			>
			<p class="mt-2 text-[#7A4333]">Yes. Binns Ink Salon is currently accepting appointments.</p>
		</details>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[linear-gradient(160deg,rgba(255,155,69,0.24),rgba(213,69,27,0.2),rgba(82,28,13,0.12))] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<h2 class="font-['Faustina'] text-4xl leading-tight md:text-5xl">Still have questions?</h2>
	<p class="mt-3 text-[#7A4333]">
		Contact Binns Esthetic directly and we can guide you to the right next step.
	</p>
	<div class="mt-5 flex flex-wrap gap-3">
		<a
			href={resolve('/contact')}
			class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
		>
			Contact Binns Esthetic
		</a>
		<button
			type="button"
			onclick={() => window.location.assign(`${resolve('/contact')}#waitlist`)}
			class="inline-flex items-center rounded-full border border-[#D5451B]/50 bg-white/90 px-5 py-3 text-sm font-bold text-[#D5451B] transition hover:bg-white"
		>
			Join Waitlist
		</button>
	</div>
</section>
