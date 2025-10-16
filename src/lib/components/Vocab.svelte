<script lang='ts'>
    // TODO: look up child content, compare against vocab API, link if it's there, italicize if not.
    let { term = "", children } = $props()

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

<a href="/" class='vocab'>
    <div class='tooltip'>
        <div class='tooltip-top'>
            <p>Term</p>
            <select name="grade-select" aria-label="Select a grade level..." required>
                <option selected disabled value="">
                    Select a grade level...
                </option>
                <option>PK</option>
                <option>K</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
        </div>
        <p>Lorem ipsum dolor sit amet</p>
    </div>
    {@render children?.() }
</a>

<style lang='scss'>
    .vocab {
        position: relative;
        text-decoration: underline;
        z-index: 99;
    }
    .tooltip {
        display: block;
        border-radius: 4px;
        background-color: gray;
        display: none;
        position: absolute;
        & > .tooltip-top {
            display: flex;
        }
    }
    // .vocab:hover tooltip { display: block; }
</style>