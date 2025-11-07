<script>
    import AccentColumns from '../components/AccentColumns.svelte';
    import CategoryCard from '../components/CategoryCard.svelte';

    const categories = [
        {
            title: 'Accessories',
            imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
        },
        {
            title: 'Clothes',
            imageUrl: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80',
        },
        {
            title: 'Jewelry',
            imageUrl: 'https://images.unsplash.com/photo-1445633814773-e687a5de9baa?auto=format&fit=crop&w=600&q=80',
        },
    ];
</script>

<div class="flex flex-col h-screen w-full bg-[#FFCDA8]">
    <div class="relative flex h-2/5 w-full flex-col items-center justify-center overflow-hidden text-center font-italianno text-[#8D0000]">
        <AccentColumns />
        <div class="relative z-10 space-y-4">
            <div class="text-8xl">
                Studio 39
            </div>
            <div class="text-3xl">
                Copenhagen
            </div>
        </div>
    </div>
    <div class="flex flex-row h-2/5 w-full gap-6 px-12">
        {#each categories as category (category.title)}
            <CategoryCard title={category.title} imageUrl={category.imageUrl} />
        {/each}
    </div>
    <div class="flex h-1/5 w-full flex-col justify-end">
        <div class="mt-4 flex items-center justify-center gap-16 font-italianno text-4xl text-[#8D0000]">
            <span>shipping</span>
            <span class="text-5xl text-[#8D0000]">★</span>
            <span>newsletter</span>
            <span class="text-5xl text-[#8D0000]">★</span>
            <span>language</span>
        </div>
    </div>
</div>
