<script lang="ts">
  let { subject, subjects, map, abbreviations } = $props()
</script>

<article class='card'>
    <form>
        <fieldset class='grid'>
            <label>
              Subject
            <select name="grade-level" aria-label="Select a subject">
              <option selected disabled>{subject? subject : "Random"}</option>
              {#if !subject}
                {#each abbreviations as subj}
                  <option>{subj}</option>
                {/each}
              {/if}
            </select>
            </label>
            <label>Strand
            <select name="CS Strand" aria-label="Select a strand">
                <option selected disabled value="">Random</option>
                <option>Algorithms & Programming</option>
            </select>
            </label>
            <button class='submit primary'>Pick an SOL</button>
        </fieldset>
    </form>
    <div class='body'>
        <p>Nothing selected; click "Pick an SOL" above!</p>
    </div>
</article>
<style lang="scss">
  .submit {
    height: 85px;
  }
  .body {
    display: flex;
    p {
      font-style: italic;
    }
    justify-content: center;
    align-items: center;
  }
  article {
      flex-grow: 1;
  }
</style>
