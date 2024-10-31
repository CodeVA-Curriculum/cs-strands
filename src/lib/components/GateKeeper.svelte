<script lang='ts'>
    export let passcode = "CodeVA Curriculum"
    let entry:string;
    let locked = true;
</script>

{#if locked}
<div class='container gatekeeper'>
    <label class="label">
        <input bind:value={entry} class="input p-4" type="text" placeholder="Type the passcode here..." />
    </label>
    <button on:click={() => locked = entry == passcode ? false : true} class='btn variant-filled-primary w-full my-4'>Submit</button>
</div>
{:else}
<slot />
{/if}

<style lang='postcss'>
    .gatekeeper {
        width: 50%;
        margin: 0 auto;
    }
</style>