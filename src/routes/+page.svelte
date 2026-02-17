<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] overflow-hidden rounded-3xl shadow-[0_20px_42px_rgba(82,28,13,0.16)] md:w-[min(1120px,calc(100%-2.5rem))]"
>
	<div
		class="relative flex min-h-[380px] items-center bg-cover bg-center p-6 md:min-h-[520px] md:p-10"
		style="background-image: linear-gradient(110deg, rgba(244, 231, 225, 0.94) 0%, rgba(244, 231, 225, 0.86) 58%, rgba(213, 69, 27, 0.34) 100%), url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2200&q=82');"
	>
		<div
			class="max-w-3xl rounded-2xl border border-[#521C0D]/20 bg-[#FCF3EE]/85 p-5 shadow-[0_16px_30px_rgba(82,28,13,0.14)] backdrop-blur-sm md:p-8"
		>
			<h1 class="font-['Faustina'] text-5xl leading-[0.95] text-[#521C0D] md:text-7xl">
				Elevating Skin Education &amp; Professional Beauty in Nebraska
			</h1>
			<p class="mt-4 max-w-3xl text-lg text-[#7A4333] md:text-xl">
				Professional Esthetic Training &amp; Advanced Skin Services in Bellevue
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href={resolve('/esthetic-school')}
					class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
				>
					Join the Student Waitlist
				</a>
				<a
					href={resolve('/binns-ink-salon')}
					class="inline-flex items-center rounded-full border border-[#D5451B]/50 bg-white/90 px-5 py-3 text-sm font-bold text-[#D5451B] transition hover:bg-white"
				>
					Book a Facial
				</a>
				<a
					href={resolve('/esthetic-school')}
					class="inline-flex items-center rounded-full border border-[#D5451B]/35 bg-white/55 px-5 py-3 text-sm font-bold text-[#D5451B] transition hover:bg-white/80"
				>
					Learn About Our Programs
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
			Welcome to Binns Esthetic and Binns Ink Salon
		</h2>
		<p class="mt-3 max-w-4xl text-[#7A4333]">
			Binns Esthetic is a professional beauty institution dedicated to raising the standard of
			esthetic education and advanced skin care in Nebraska.
		</p>
	</div>
	<div class="grid gap-4 md:grid-cols-2">
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<p>
				Founded by a licensed esthetic instructor and salon owner, Binns Esthetic combines
				real-world clinical experience with structured, professional education.
			</p>
			<p class="mt-3">
				Whether you are pursuing a career in esthetics or seeking customized skin treatments, Binns
				Esthetic is designed to support excellence at every level.
			</p>
		</article>
		<article class="overflow-hidden rounded-2xl border border-[#521C0D]/15 bg-[#F3D7C7]">
			<img
				src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
				alt="Professional esthetic treatment room"
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
		<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">What We Offer</p>
		<h2 class="mt-2 font-['Faustina'] text-4xl leading-tight md:text-5xl">
			Education pathways and advanced salon services
		</h2>
	</div>
	<div class="grid gap-4 md:grid-cols-2">
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Esthetic Education (Coming Soon)</h3>
			<ul class="mt-3 grid gap-2">
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					600-Hour Esthetician Program
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					300-Hour Instructor Training Program
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Integrated Advanced Skin Training
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Continuing Education Workshops
				</li>
			</ul>
		</article>
		<article class="rounded-2xl border border-[#521C0D]/15 bg-[#FFF9F5] p-5">
			<h3 class="text-lg font-semibold">Binns Ink Salon Services</h3>
			<ul class="mt-3 grid gap-2">
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Custom Facials
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Acne Treatment Programs
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Anti-Aging Treatments
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Chemical Exfoliation
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Professional Waxing
				</li>
				<li
					class="relative pl-5 before:absolute before:top-2 before:left-0 before:h-2 before:w-2 before:rounded-full before:bg-[#FF9B45]"
				>
					Retail Skincare Products
				</li>
			</ul>
		</article>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[#FCF3EE] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<div class="grid gap-4 md:grid-cols-2">
		<article>
			<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Why Binns Esthetic?</p>
			<h2 class="mt-2 font-['Faustina'] text-4xl leading-tight md:text-5xl">
				Built for focused growth and professional outcomes
			</h2>
			<ul class="mt-4 grid gap-2">
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Boutique, focused learning environment
				</li>
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Advanced skin-focused curriculum
				</li>
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Clinical training experience
				</li>
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Licensed instructor leadership
				</li>
				<li class="flex gap-2 before:font-bold before:text-[#D5451B] before:content-['✔']">
					Professional, modern facility
				</li>
			</ul>
		</article>
		<article class="overflow-hidden rounded-2xl border border-[#521C0D]/15 bg-[#F3D7C7]">
			<img
				src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
				alt="Esthetics students in hands-on training"
				loading="lazy"
				class="h-full min-h-[250px] w-full object-cover"
			/>
		</article>
	</div>
</section>

<section
	class="mx-auto mt-5 w-[min(1120px,calc(100%-1.4rem))] rounded-2xl border border-[#521C0D]/15 bg-[linear-gradient(160deg,rgba(255,155,69,0.24),rgba(213,69,27,0.2),rgba(82,28,13,0.12))] p-5 shadow-[0_10px_26px_rgba(82,28,13,0.10)] md:w-[min(1120px,calc(100%-2.5rem))] md:p-8"
>
	<p class="text-sm font-semibold tracking-[0.12em] text-[#D5451B]">Call To Action</p>
	<h2 class="mt-2 max-w-xl font-['Faustina'] text-4xl leading-tight md:text-5xl">
		Be the First to Know When Enrollment Opens
	</h2>
	<p class="mt-3 max-w-4xl text-[#7A4333]">
		Join our exclusive pre-launch list for updates, information sessions, and early enrollment
		announcements.
	</p>
	<div class="mt-5">
		<a
			href={resolve('/contact')}
			class="inline-flex items-center rounded-full bg-[#D5451B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#B63615]"
		>
			Join the Waitlist
		</a>
	</div>
</section>
