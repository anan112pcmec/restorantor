<script lang="ts">
    import { invalidateAll } from '$app/navigation';
    import { onMount } from 'svelte';

    const {data} = $props();

    onMount(() => {
        invalidateAll()
    })
</script>

<h1>{data.id} - {data.name}</h1>
<p>{data.description}</p>
    <p>{data.price}</p>