<script lang="ts">
    import SOLPicker from "$lib/components/SOLPicker.svelte";
    let { data } = $props()
    console.log(data)
</script>
<main class='container'>
    <h1>Connections Generator</h1>
    <p>Use the tool below to explore connections between the computer science Standards of Learning and other SOLs from other disciplines!</p>
    <section>
        <div class='flex-grid'>
            <SOLPicker subjects={data.subjects} abbreviations={data.abbreviations} subject="Computer Science" />
            <div class='vs'>
                <p>X</p>
            </div>
            <SOLPicker subjects={data.subjects} abbreviations={data.abbreviations} />
        </div>
    </section>
    <section class='results grid'>
        <div class='integration-opps'>
            <h3>Integration Opportunities</h3>
        </div>
        <div class='lessons'>
            <h3>Lessons & Resources</h3>
        </div>
    </section>
</main>

<style lang='scss'>
    .results {
        padding: 1rem 1rem;
        border: 3px dashed white;
    }
    .flex-grid {
        display: flex;
        height: 20rem;
    }
    .vs {
        margin: 0 2rem;
        flex-shrink: 1;
        height: 100%;
        justify-content: center;
        align-content: center;
    }
</style>
