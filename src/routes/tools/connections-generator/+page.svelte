<script lang='ts'>
    const nonCSURL = `https://curriculum.codevirginia.org/api/standards/K.CS.AP.1.json`
    let sols:any[] = $state([])
    async function getSOLs() {
        const obj = await (await fetch(nonCSURL)).json()
        sols = obj
        console.log(sols)
        return sols
    }
</script>

<main class='container'>
    <h1>Connections Generator</h1>
    <p>We use this interactive tool to help us find connections between computing and non-computing standards, allowing us to build learning experiences that integrate topics across disciplines.</p>

    <svelte:boundary>
        <p>{ await getSOLs() }Got SOLs!</p>
        {#snippet pending()}
        <p>loading...</p>
        {/snippet}
    </svelte:boundary>
    <div class='bar'>
        
        <form>
            <p>Grade</p>
            <select aria-label="Select a grade level...">
                <option disabled>
                    Select one or more grade levels...
                </option>
                <option disabled>Pre-Kindergarten</option>
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
            <fieldset>
                <label>
                    
                    <input type='checkbox'>
                    Show Lessons
                </label>
                <label>
                    <input type='checkbox'>
                    Show Integration Ideas
                </label>
            </fieldset>
        </form>
    </div>
    <div class='sol-pair'>
        <article class='card'>
            <header>Non-CS Standard filters</header>
            <div class='card-body' role='group'>
                <button>Get a Random Standard</button>
                <button>Choose a Standard</button>
            </div>
            <footer></footer>
        </article>
        <div class='x'><span>x</span></div>
        <article class='card'>
            <header>CS Standard filters</header>
            <div class='card-body' role='group'>
                <button>Get a Random Standard</button>
                <button>Choose a Standard</button>
            </div>
            <footer></footer>
        </article>
    </div>
</main>

<style lang='scss'>
    .bar > form, form > fieldset { 
        display: flex;
        align-items: center; 
    }
    .sol-pair {
        display: flex;
        justify-content: center;
        align-items: center;
        article { flex-grow: 1; }
        
    }
    .x { flex-grow: 0; flex-shrink: 1; margin: 0 2rem; font-size: 100pt; font-weight: 700; }
    footer { min-height: 3rem; }
</style>