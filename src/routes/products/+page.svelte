<script lang="ts">
    import { invalidateAll } from '$app/navigation';
    import { onMount } from 'svelte';

    const {data} = $props()
    $inspect(data);

    onMount(() => {
        invalidateAll()
    })
</script>

<h1>
    product
</h1>

<ul>
    {#each data.products as product}
        <li>
            <a href="/products/{product}">{product}</a>
        </li>
    {/each}
    
</ul>