<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/counter">Counter</a></li>
	<li><a href="/profile">Profile</a></li>
	<li><a href="/products">product</a></li>
</ul>


