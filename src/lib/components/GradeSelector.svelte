<script lang='ts'>
    let text = 1
    const grades = [
        "Kindergarten",
        "Grade 1",
        "Grade 2",
        "Grade 3",
        "Grade 4",
        "Grade 5",
        "Grade 6",
        "Grade 7",
        "Grade 8"
    ]

    export let grade:string = grades[text];

    $: grade = grades[text]
</script>

<span class='grade-selector input-group input-group-divider grid-cols-[auto_1fr_auto]'>
    <button on:click={()=> text = text - 1 < 0? grades.length-1 : (text - 1) % grades.length }>◀</button>
    <select bind:value={text} class="select">
        {#each grades as grade, i}
        <option value="{i}">{grade}</option>
        {/each}
    </select>
    <button on:click={()=> text = (text + 1) % grades.length }>▶</button>
</span>

<style>
    span {
        /* width: 25rem; */
        font-family: Raleway;
        font-size: 60%;
    }
    select, button {
        /* padding-top: 18px; */
        padding-bottom: 6px;
    }
</style>

