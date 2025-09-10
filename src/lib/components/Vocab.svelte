<script lang='ts'>
    // TODO: look up child content, compare against vocab API, link if it's there, italicize if not.
    let { term = "" } = $props()

    interface Term {
        definition:Definition,
        links:string[]
    }
    interface Definition {
        pk?:string,
        k?:string,
        1?:string,
        2?:string,
        3?:string,
        4?:string,
        5?:string,
        6?:string,
        7?:string,
        8?:string,
        9?:string,
        10?:string,
        11?:string,
        12?:string,
        default:string
    }
</script>

<!-- TODO: -->
<a href="/vocab"><slot /></a>