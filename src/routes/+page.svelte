<script>
    import Vocab from "$lib/components/Vocab.svelte";

</script>
<main class='container'>
    <section>
        <h1>Explore the Virginia Computer Science Standards</h1>
        <p>In Virginia, the Computer Science Standards of Learning are organized into six <strong>strands,</strong> each covering an important topic area in computer science.</p>
        <p>Browse the pages linked below to explore!</p>
    </section>
    <section>
        <div class='is-flex-wrap'>
            <article class='card'>
                <img alt="" role="presentation" width='100%' src="https://placecats.com/200/200" />
                <h2>Algorithms & Programming</h2>
                <p>The standards organized under the <a href="/algorithms-and-programmming"><i>Algorithms & Programming</i></a> strand have to do with teaching students how to code using <Vocab>unplugged</Vocab> and "<Vocab>plugged</Vocab>" activities. This strand includes standards about <Vocab>computational thinking</Vocab>, using coding tools like <Vocab>Scratch</Vocab> or <Vocab>text-based</Vocab> coding languages, and important coding skills like planning coding projects, <Vocab>debugging</Vocab>, <Vocab>code tracing</Vocab>, and others.</p>
                <footer>
                    <div role='group'>
                        <a role='button' href="/algorithms-and-programming">Learn More</a>
                        <a href="/tools/connections-generator" role='button' class='secondary'>See Connections</a>
                    </div>
                </footer>
            </article>
            <article class='card'>
                <img alt="" role="presentation" width='100%' src="https://placecats.com/200/200" />
                <h2>Computing Systems</h2>
                <p>The standards organized under the <a href="/computing-systems"><i>Computing Systems</i></a> strand have to do with teaching students about how computers work. This strand includes standards about <Vocab>troubleshooting</Vocab> problems with computers, identifying and defining the different parts of a computing device, exploring how computers use <Vocab>input</Vocab>, <Vocab>output</Vocab>, <Vocab>processing</Vocab>, and <Vocab>storage</Vocab> technologies to accomplish tasks and solve problems.</p>
                <footer>
                    <div role='group'>
                        <a href="/computing-systems" role='button'>Learn More</a>
                        <a href="/tools/connections-generator" role='button' class='secondary'>See Connections</a>
                    </div>
                </footer>
            </article>
            <article class='card'>
                <img alt="" role="presentation" width='100%' src="https://placecats.com/200/200" />
                <h2>Cybersecurity</h2>
                <p>The standards organized under the <a href="/cybersecurity"><i>Cybersecurity</i></a> strand have to do with teaching students about how to keep themselves and their data safe, as well as how <Vocab>cybersecurity</Vocab> professionals work to identify and mitigate digital threats. This strand includes standards about privacy, <Vocab>digital citizenship</Vocab>, safe on and offline behavior, and cybersecurity topics like the <Vocab>CIA triad</Vocab> in later grade levels.</p>
                <footer>
                    <div role='group'>
                        <a href="/cybersecurity" role='button'>Learn More</a>
                        <a href="/tools/connections-generator" role='button' class='secondary'>See Connections</a>
                    </div>
                </footer>
            </article>
            <article class='card'>
                <img alt="" role="presentation" width='100%' src="https://placecats.com/200/200" />
                <h2>Data Analysis</h2>
                <p>The standards organized under the <a href="data-analysis"><i>Data Analysis</i></a> strand have to do with teaching students about how to use computers to collect <Vocab>data</Vocab> and find patterns in that data using a variety of tools and strategies. This strand includes standards about <Vocab>data visualization</Vocab>, <Vocab>machine learning</Vocab> and <Vocab>artificial intelligence</Vocab>, and basic statistics. This strand has a lot of overlap with the <a href="https://www.doe.virginia.gov/teaching-learning-assessment/instruction/mathematics/standards-of-learning-for-mathematics">Mathematics Standards of Learning</a> in many grade levels.</p>
                <footer>
                    <div role='group'>
                        <a href="data-analysis" role='button'>Learn More</a>
                        <a href="/tools/connections-generator" role='button' class='secondary'>See Connections</a>
                    </div>
                </footer>
            </article>
            <article class='card'>
                <img alt="" role="presentation" width='100%' src="https://placecats.com/200/200" />
                <h2>Impacts of Computing</h2>
                <p>The standards organized under the <a href="/impacts-of-computing"><i>Impacts of Computing</i></a> strand have to do with teaching students about the role of computing and computing technologies in society broadly. This strand includes standards about computer science careers, computing history, identifying the benefits and harms of different computing technologies, and the physiological/psychological effects of screen use, social media, and other technologies.</p>
                <footer>
                    <div role='group'>
                        <a href="/impacts-of-computing" role='button'>Learn More</a>
                        <a href="/tools/connections-generator" role='button' class='secondary'>See Connections</a>
                    </div>
                </footer>
            </article>
            <article class='card'>
                <img alt="" role="presentation" width='100%' src="https://placecats.com/200/200" />
                <h2>Networks & the Internet</h2>
                <p>The standards organized under the <a href="/networks-and-the-internet"><i>Networks & the Internet</i></a> strand have to do with teaching students about how computers communicate with one another. This strand includes standards about using the <Vocab>Internet</Vocab>, communicating online, and networking topics like <Vocab term="client">clients</Vocab> and <Vocab term='server'>servers</Vocab>, <Vocab>network protocols</Vocab>, and the components of a computing <Vocab>network</Vocab>.</p>
                <footer>
                    <div role='group'>
                        <a href="/networks-and-the-internet" role='button'>Learn More</a>
                        <a href="/tools/connections-generator" role='button' class='secondary'>See Connections</a>
                    </div>
                </footer>
            </article>
        </div>
    </section>
</main>

<style lang='scss'>
    img {
        float: left;
        width: 100px;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }
    article {
        margin: 1rem 0;
        margin-right: 1rem;
    }
</style>