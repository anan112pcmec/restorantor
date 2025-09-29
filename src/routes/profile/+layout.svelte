<script lang="ts">
    import { page } from '$app/state';


    const {children} = $props();
</script>

<div class="mb-5">
    <p>{page.url.pathname}</p>
</div>

<ul>
    <li><a href="/profile/user">user</a></li>
    <li><a href="/profile/wallet">wallet</a></li>
    <li><a href="/profile/adress">adress</a></li>
</ul>

{@render children?.()}

