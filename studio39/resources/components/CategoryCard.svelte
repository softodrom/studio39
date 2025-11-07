<script>
    export let title;
    export let imageUrl;
    export let alt = title;
</script>

<div class="flex w-1/3 flex-col items-center rounded-2xl bg-[#F9DCC4] text-center font-italianno text-6xl text-[#8D0000] shadow-lg shadow-[#e9bfa0]">
    <div class="flex flex-1 items-end justify-center pt-6">
        <img class="w-2/3 max-w-xs opacity-80" src={imageUrl} {alt} />
    </div>
    <span class="flex h-24 w-full items-center justify-center">{title}</span>
</div>
