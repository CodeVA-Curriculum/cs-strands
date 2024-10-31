<!-- From Skeleton UI Kit Documentation: 
https://www.skeleton.dev/elements/scroll-containers -->
<script lang='ts'>
    import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
    import Fa from 'svelte-fa'

export let grade:string;

let elemCarousel: HTMLDivElement;
const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];

function carouselLeft(): void {
	const x =
		elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	elemCarousel.scroll(x, 0);
}

function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
}
		
</script>


<div class="lesson-carousel">
    <h3 class='h3 text-3xl'>Example Lesson Plans</h3>
    <p>Click through the carousel below to see {grade} lesson plans aligned to the Computer Science SOLs!</p>
	<div class='p-4 mt-6 grid grid-cols-[auto_1fr_auto] gap-4 items-center'>
        <!-- Button: Left -->
        <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
            <Fa icon={faArrowLeft} />
        </button>
        <!-- Full Images -->
        <div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
            {#each unsplashIds as unsplashId}
                <img
                    class="snap-center w-[400px] rounded-container-token mr-4"
                    src="https://placecats.com/375/600"
                    alt={unsplashId}
                    loading="lazy"
                />
                <div class='lesson-info snap-center w-[400px]'>
                    <div class='lesson-card card p-4'>
                        <header class='card-header'>
                            <h4 class='h3'>Lesson Title</h4>
                        </header>
                        <div class='p-4'>
                            <p class='text-xs'>Subject areas</p>
                        </div>
                        <footer class='card-footer'>
                            <a class='w-full btn btn-sm variant-filled-primary'>Read the Lesson</a>
                        </footer>
                    </div>
                </div>
            {/each}
        </div>
        <!-- Button: Right -->
        <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
            <Fa icon={faArrowRight} />
        </button>
    </div>
</div>

<style lang='postcss'>
    .lesson-info {
        position:relative;
        left:-350px;
        /* top: 525px; */
        bottom: -350px;
        /* color: red; */
        height: 100%;
        width: 0px;
        overflow-x: visible;
    }
    .lesson-card {
        width: 280px;
        margin: 0 25px;
    }
</style>