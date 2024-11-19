<template>
    <nav class="max-w-[1280px] mx-auto px-[20px] pt-[20px] flex justify-between">
        <NuxtLink to="/"><img src="~/assets/images/avatar-min.webp" alt="Ansima Logo" class="w-[60px] h-[60px] rounded-full border-2 border-white" /></NuxtLink>   
        <ul class="flex items-center justify-center gap-4 list-none text-black dark:text-white text-lg">
            <li class="hover:bg-red_mine-500 hover:text-white px-4 py-1 rounded-md hover:shadow-md shadow-red_mine-500/50"><NuxtLink to="/about" class="flex items-center gap-2"><UIcon name="i-heroicons-user" class="w-6 h-6" />About</NuxtLink></li>
            <li class="hover:bg-red_mine-500 hover:text-white px-4 py-1 rounded-md hover:shadow-md shadow-red_mine-500/50"><NuxtLink to="/blog" class="flex items-center gap-2"><UIcon name="i-heroicons-pencil-square" class="w-6 h-6" />Blog</NuxtLink></li>
            <li class="hover:bg-red_mine-500 hover:text-white px-4 py-1 rounded-md hover:shadow-md shadow-red_mine-500/50"><NuxtLink to="/projects" class="flex items-center gap-2"><UIcon name="i-heroicons-briefcase" class="w-6 h-6" />Projects</NuxtLink></li>
            <li class="hover:bg-red_mine-500 hover:text-white px-4 py-1 rounded-md hover:shadow-md shadow-red_mine-500/50"><NuxtLink to="/tools" class="flex items-center gap-2"><UIcon name="i-heroicons-wrench-screwdriver" class="w-6 h-6" />Tools</NuxtLink></li>
        </ul>
    </nav>
</template>
<style scoped>
    li:has(>.router-link-active) {
        @apply bg-red_mine-500 text-white shadow-md shadow-red_mine-500/50;
    }
</style>