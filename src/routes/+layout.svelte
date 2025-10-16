<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/app.scss'
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<ul>
		<li>
			<a href="https://curriculum.codevirginia.org/cs-strands"><img alt="The CodeVA logo" src="https://placecats.com/100/100" /></a>
		</li>
	</ul>
	<ul>
		<li>
			<details class="dropdown">
				<summary role='button'>
				Strands
				</summary>
				<ul dir="rtl">
					<li><a href="/algorithms-and-programming">Algorithms & Programming</a></li>
					<li><a href="/computing-systems">Computing Systems</a></li>
					<li><a href="/cybersecurity">Cybersecurity</a></li>
					<li><a href="/data-analysis">Data Analysis</a></li>
					<li><a href="/impacts-of-computing">Impacts of Computing</a></li>
					<li><a href="/networks-and-the-internet">Networks & the Internet</a></li>
				</ul>
			</details>
		</li>
		<li>
			<details class='dropdown'>
				<summary role='button'>
					Tools
				</summary>
				<ul dir='rtl'>
					<li><a href="/tools/sol-browser">Browse the CS SOLs</a></li>
					<li><a href="/tools/pacing-guide-creator">CS Pacing Guide Creator</a></li>
					<li><a href="/tools/connections-generator">CS Connections Generator</a></li>
				</ul>
			</details>
		</li>
		<li><a href="https://codevirginia.org/about">About CodeVA</a></li>
	</ul>
</nav>
{@render children?.()}

<style lang='scss'>
	summary {
		background-color: transparent;
		border: 0px;
	}
	details {
		position: relative;
		top: 3px;
	}
	nav {
		margin-right: 2rem;
		margin-left: 1rem;
	}
	img {
		height: 75px;
		width: auto;
	}
</style>
