<script lang='ts'>
	import Fa from 'svelte-fa'
	import { faPlus, faMinus, faUpLong } from '@fortawesome/free-solid-svg-icons';
    const tableArr = [
        {status: "new", term: "network", definition: "Lorem ipsum dolor sit amet", relatedSOLs: "1.CS.NI.1"},
		{status: "building", term: "algorithm", definition: "Lorem ipsum dolor sit amet", relatedSOLs: "1.CS.AP.2"},
		{status: "familiar", term: "computing device", definition: "Lorem ipsum dolor sit amet", relatedSOLs: "1.CS.SY.1"}
    ]

	const icons = { 'new': faPlus, 'building': faUpLong, 'familiar': faMinus }
</script>
<h3 class='h3 text-3xl'>Glossary</h3>
<p>The table below summarizes the vocabulary students will need at this grade level. The "status" column shows whether the term is new in this grade level, if the term is from an earlier grade level but more advanced, or if the term is used the same way in this grade level as it is in a previous one.</p>
<!-- Responsive Container (recommended) -->
<div class="table-container my-6">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Status</th>
				<th>Term</th>
				<th>Definition</th>
				<th>Related SOLs</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>
						<span class='{row.status} mx-auto'>
							<Fa class='mr-2' icon={icons[row.status]} />{row.status}
						</span>
					</td>
					<td>{row.term}</td>
					<td>{row.definition}</td>
					<td>{row.relatedSOLs}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang='postcss'>
	.new { @apply chip variant-filled-success }
	.building { @apply chip variant-filled-warning }
	.familiar { @apply chip variant-filled-primary }
</style>
