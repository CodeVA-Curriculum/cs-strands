<script lang='ts'>
    import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
    import Fa from 'svelte-fa'

    export let grade = "Kindergarten"

    const tableArr = ['K.CS.AP.1', 'K.CS.AP.2']
</script>

<div class='standards-explorer'>
    <div class="table-container my-6">
        <!-- Native Table Element -->
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Reference Code</th>
                    <th>Text of the Standard</th>
                    <th>Standard Alignment Guide</th>
                    <th>Additional Resources</th>
                </tr>
            </thead>
            <tbody>
                {#each tableArr as row, i}
                    <tr>
                        <td style='position: relative;'>
                            <Fa style='position: absolute; top: 15px;' size="1.5x" icon={faChevronRight} />
                            <span style='position: absolute; left: 60px;'>{row}</span>
                        </td>
                        <td>Text of Standard</td>
                        <td>
                            <a class='btn variant-filled btn-sm'>Read about aligning to {row}</a>
                        </td>
                        <td>
                            <a class='btn variant-filled btn-sm'>Visit the Curriculum Library</a>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>