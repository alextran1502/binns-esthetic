<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] overflow-hidden rounded-3xl shadow-[0_20px_42px_rgba(82,28,13,0.16)] md:w-[min(1120px,calc(100%-2.5rem))]"
>
	<div
		class="flex min-h-[360px] items-end bg-cover bg-center p-6 md:min-h-[500px] md:p-14"
		style="background-image: linear-gradient(115deg, rgba(213, 69, 27, 0.54) 0%, rgba(244, 231, 225, 0.68) 58%, rgba(244, 231, 225, 0.9) 100%), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80');"
	>
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Continuing Education</p>
			<h1 class="mt-2 font-['Faustina'] text-5xl leading-tight text-[#521C0D] md:text-6xl">
				Professional Development for Licensed Estheticians
			</h1>
			<p class="mt-3 text-lg text-[#7A4333]">
				Binns Esthetic offers continuing education workshops designed to enhance practical skills
				and expand professional knowledge.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href="#ce-interest"
					class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
				>
					Join CE Interest List
				</a>
				<a
					href={resolve('/contact')}
					class="inline-flex items-center rounded-full border border-[#D5451B]/50 bg-white/90 px-5 py-3 text-sm font-bold text-[#D5451B] transition hover:bg-white"
				>
					Contact Binns Esthetic
				</a>
			</div>
		</div>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="mb-4">
		<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Workshop Examples</p>
		<h2 class="mt-2 font-['Faustina'] text-4xl leading-tight md:text-5xl">
			Focused CE topics for modern esthetics practice
		</h2>
	</div>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Advanced Acne Treatment</h3>
			<p class="mt-2 text-[#7A4333]">
				Protocol-based acne treatment planning and client education methods.
			</p>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Chemical Exfoliation Intensive</h3>
			<p class="mt-2 text-[#7A4333]">
				Hands-on review of superficial exfoliation selection and application standards.
			</p>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Advanced Skin Analysis</h3>
			<p class="mt-2 text-[#7A4333]">
				Improve consultation accuracy through structured skin observation workflows.
			</p>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Business Development for Estheticians</h3>
			<p class="mt-2 text-[#7A4333]">
				Strategies to grow a compliant, client-centered, and sustainable practice.
			</p>
		</article>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="grid gap-4 md:grid-cols-2">
		<article>
			<h2 class="font-['Faustina'] text-4xl leading-tight md:text-5xl">
				Courses built for real professional growth
			</h2>
			<p class="mt-3 text-[#7A4333]">
				Each workshop is designed for professional development with practical, repeatable methods
				that can be applied immediately in a clinical setting.
			</p>
		</article>
		<article class="overflow-hidden rounded-2xl border border-[#521C0D]/15 bg-[#F3D7C7]">
			<img
				src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80"
				alt="Continuing education session for skincare professionals"
				loading="lazy"
				class="h-full min-h-[250px] w-full object-cover"
			/>
		</article>
	</div>
</section>

<section
	id="ce-interest"
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[linear-gradient(160deg,rgba(255,155,69,0.24),rgba(213,69,27,0.2),rgba(82,28,13,0.12))] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<h2 class="max-w-xl font-['Faustina'] text-4xl leading-tight md:text-5xl">
		Join our CE interest list for updates
	</h2>
	<p class="mt-3 text-[#7A4333]">
		Get notices on workshop launches, schedules, and registration openings.
	</p>
	<div class="mt-5">
		<a
			href={resolve('/contact')}
			class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
		>
			Join CE Interest List
		</a>
	</div>
</section>
