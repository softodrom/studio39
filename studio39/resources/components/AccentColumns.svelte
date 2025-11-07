<script>
    export let count = 20;

    const columns = Array.from({ length: count }, (_, index) => index);
</script>

<div class="absolute inset-0 flex h-5/6 items-center">
    {#each columns as columnIndex}
        <div class="flex h-full flex-1 flex-col" aria-hidden="true">
            <div class={`flex-1 ${columnIndex % 2 === 0 ? 'bg-[#C60101] opacity-30' : 'bg-white opacity-40'}`}></div>
            <div class={`h-16 rounded-b-full ${columnIndex % 2 === 0 ? 'bg-[#C60101] opacity-30' : 'bg-white opacity-40'}`}></div>
        </div>
    {/each}
</div>
