<script>
    import Vocab from "$lib/components/Vocab.svelte";
    import Video from '$lib/components/Video.svelte';
    import LibraryElement from "$lib/components/LibraryElement.svelte";
    import LessonCarousel from "$lib/components/LessonCarousel.svelte";
    import StandardsTable from "$lib/components/StandardsTable.svelte";
    import Glossary from "$lib/components/Glossary.svelte";
</script>
<main class='container'>
    <section>
        <h1>Algorithms & Programming</h1>
        <div class='grid'>
            <div class='mr-2'>
                <p><Vocab term='algorithm'>Algorithms</Vocab> provide instructions for how a computer or a human should complete a task. When students learn concepts in the <i>Algorithms & Programming</i> strand, they might:</p>
                <ul>
                    <li>Write code using a developmentally appropriate programming language (e.g., <Vocab>Scratch Jr.</Vocab>, <Vocab>Scratch</Vocab>, <Vocab>MakeCode</Vocab>, <Vocab>Javascript</Vocab>, <Vocab>Python</Vocab>).</li>
                    <li>Plan out programs by writing instructions using media like plain language, visual planning tools like flowcharts, pictographs, or other types of <Vocab>pseudocode</Vocab>.</li>
                    <li>Apply <Vocab>"computational thinking"</Vocab> by using programming concepts to solve problems, either by writing code or using analogs to common coding concepts outside of a programming project in an <Vocab>"unplugged"</Vocab> activity.</li>
                </ul>
                <p>Students can practice algorithms and programming in lots of ways across many content areas, using code to express themselves or explore specific topics through the medium of code. <strong>Scroll down to see examples & resources about this strand!</strong></p>
                <!-- <article class='card quote'>
                    <blockquote class='ml-2'>Algorithms are translated into programs, or code, to provide instructions for computing devices. Algorithms and programming control all computing systems, empowering people to communicate with the world in new ways and solve compelling problems.”</blockquote>
                    <p style="text-align: right; margin-right: 2rem; padding-top: 1rem;">-- The Virginia Department of Education</p>
                </article> -->
            </div>
            <div class='video-wrapper ml-2'>
                <Video />
            </div>
        </div>
        
    </section>
    <hr>
    <section>
        <div class='speech-bubble'>
            <h2>
                <span>What does this look like in my</span> 
                <select name="select" aria-label="Select" required>
                    <option selected disabled value="">Select grade...</option>
                    <option>Kindergarten</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                </select>
                <span>classroom?</span>
            </h2>
        </div>
        <div class='grid'>
            <div class='info'>
                <article class='card'>
                    <header><h3>Student Expectations</h3></header>
                    <p>Lorem ipsum dolor sit amet</p>
                </article>
                <p>If you're interested in writing your own K-8 lessons aligned to the Computer Science SOLs, check out our CS Integration Toolkit, which provides guidance for teachers interested in integrating CS into their classroom activities.</p>
                <LibraryElement />
                <p>Check out CodeVA's Curriculum Library, which hosts free computer science curricula designed specifically for K-12 Virginia educators.</p>
                <a style='width: 100%;' role='button' href='https://curriculum.codevirginia.org/library'>More CS Resources</a>
            </div>
            <div class='carousel'>
                <LessonCarousel />
            </div>
        </div>
    </section>
    <hr>
    <section>
        <h2>Grade 1 CS SOLs</h2>
        <StandardsTable />
    </section>
    <section>
        <h2>Grade 1 CS Glossary</h2>
        <Glossary />
    </section>
    <section>
        <h2>Additional Resources</h2>
        <div class='flex-gallery'>
            <article class='card'>
                <h3>The CodeVA Curriculum Library</h3>
            </article>
            <article class='card'>
                <h3>Professional Learning</h3>
            </article>
            <article class='card'>
                <h3>CS Integration Tools</h3>
            </article>
        </div>
    </section>
</main>

<style lang='scss'>
    .quote {
        background-color: #f2e58f;
        p { color: black; }
        blockquote { color: black; }
    }
    .quote > blockquote {
        // font-size: 120%;
        font-style: italic;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    $bubble-color: blue;
    .speech-bubble {
        background-color: $bubble-color;
        padding: 2rem 2rem;
        padding-bottom: 2rem;
        margin-bottom: 4rem;
        border-radius: 16px;
        position: relative;
        h2 {
            display: flex;
            flex-basis: auto;
            align-items: center;
            select {
                // padding: 0;
                margin: 0;
                flex-shrink: 4;
                min-width: 200px;
                max-width: 25%;
                margin-right: 1rem;
                font-size: 100%;
            }
            span {
                flex-shrink: 0;
                margin-right: 1rem;
            }
        }
    }
    $indicator-size: 20px;
    
    .speech-bubble:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        
        border: ($indicator-size * 2) solid transparent;
        /* border: rgba(var(--color-primary-500) / 1); */
        border-top-color: $bubble-color;
        border-bottom: 0;
        border-left: 0;
        margin-left: $indicator-size * -1;
        margin-bottom: $indicator-size * -2;
        
    }
    .info > * { margin-bottom: 1rem; }
    .carousel {
        // height: stretch;
        background-color: pink;
    }
</style>