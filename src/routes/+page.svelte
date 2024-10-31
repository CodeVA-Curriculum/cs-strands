<script lang='ts'>
    import Glossary from "$lib/components/Glossary.svelte";
import GradeSelector from "$lib/components/GradeSelector.svelte";
    import LessonCarousel from "$lib/components/LessonCarousel.svelte";
    import LibraryElementCard from "$lib/components/LibraryElementCard.svelte";
    import StandardsExplorer from "$lib/components/StandardsExplorer.svelte";
	import { base } from "$app/paths";

	let selectedGrade:string;
</script>

<div class="container h-full justify-center items-center">
	<h1 class="h1">Algorithms & Programming</h1>
	<div class="space-y-5 lg:columns-2">
		<div class='pr-5 break-after-column'>
			<p>Algorithms provide <span class='emphasis'>instructions for how a computer or a human</span> should complete a task. When students learn Algorithms & Programming, they might:</p>
			<ul class='list-disc'>
				<li>
					Write code using a developmentally appropriate programming language (e.g., Scratch Jr., Scratch, MakeCode, Javascript, Python).
				</li>
				<li>
					Plan out programs by writing instructions using media like plain language, visual planning tools like flowcharts, or pictographs
				</li>
				<li>
					Apply "computational thinking" by applying programming concepts to solve problems, either by writing code or applying coding concepts outside of a programming project in an "unplugged" activity.
				</li>
			</ul>
			<p>Students can practice algorithms and programming in lots of ways across many content areas, using code to <span class='emphasis'>express themselves or explore specific topics through the medium of code.</span></p>
		</div>
		<div class='break-before-column'>
			<img class='object-fill' alt='TODO:' src="{base}/placeholders/player-placeholder.gif" >
		</div>
	</div>
	<section class='section'>
		<blockquote>
			<h2 class='h3'>From the VDOE's Algorithms & Programming strand:</h2>
			<p>Algorithms are translated into programs, or code, to provide instructions for computing devices. Algorithms and programming control all computing systems, empowering people to communicate with the world in new ways and solve compelling problems.”</p>
		</blockquote>
	</section>
	<hr>
	<section class='section'>
		<h2 class="h2 text-5xl xl:grid grid-flow-col auto-cols-max gap-x-2 speech-bubble">
			<p class='w-90 center-offset ml-3'>What does this look like in my <p>
			<p class='w-120'>
				<GradeSelector bind:grade={selectedGrade} />
			</p>
			<p class='w-20 ml-2 center-offset'>classroom?</p>
		</h2>
	</section>
	<section class='section md:grid grid-cols-12 gap-8'>
		<div class='grade-level-info col-span-7 mr-12'>
			<div class='card is-warning mb-12'>
				<header class='card-header'>
					<h3 class='h3 text-3xl'>Student Expectations</h3>
				</header>
				<section class='p-4'>
					<p>Lorem ipsum dolor sit amet</p>
				</section>
				<footer class='card-footer'>
					<button>Call to Action</button>
				</footer>
			</div>
			<p>If you're interested in writing your own K-8 lessons aligned to the Computer Science SOLs, check out our CS Integration Toolkit, which provides guidance for teachers interested in integrating CS into their classroom activities.</p>
			<LibraryElementCard />
			<p>If you're interested in seeing additional resources around this standard, check out CodeVA's Curriculum Library, which hosts free computer science curricula designed specifically for K-12 Virginia educators.</p>
			<a class='mt-4 w-full btn btn-md variant-filled-primary'>See More CS Resources</a>
			<p></p>
		</div>
		<div class='flex justify-center col-span-5'>
			<LessonCarousel grade={selectedGrade} />
		</div>
	</section>
	<hr>
	<section class='section'>
		<h2 class='h2 text-5xl'>The {selectedGrade} CS SOLs</h2>
		<StandardsExplorer grade={selectedGrade} />
		<Glossary />
	</section>
</div>

<style lang='postcss'>
	.center-offset { padding-top: 12px; }
	.speech-bubble {
		position: relative;
		/* @apply bg-primary-500; */
		background: rgba(var(--color-primary-500) / 1);
		border-radius: .4em;
		padding: 1rem;
	}
	.speech-bubble:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	
	border: 20px solid transparent;
	/* border: rgba(var(--color-primary-500) / 1); */
	border-top-color: rgba(var(--color-primary-500) / 1);
	border-bottom: 0;
	border-left: 0;
	margin-left: -10px;
	margin-bottom: -20px;
	
}
</style>
