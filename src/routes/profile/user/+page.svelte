<script lang="ts">
    const {data}:any = $props();
</script>

<h1>user page</h1>
<div class="grid grid-rows-3">
    <div>User: {data.user}</div>
    <div>Nama: {data.name}</div>
    <div>User: {data.email}</div>
    <div>Hobi: {data.infolain}</div>
    
</div>