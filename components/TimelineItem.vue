<template>
    <div class="flex gap-2 md:gap-6">
        <!-- Year -->
        <div class="w-24 flex-shrink-0">
            <div class="text-xl font-bold text-primary-500">{{ year }}</div>
        </div>
        
        <!-- Content -->
        <div class="relative pb-8 pl-8 border-l-2 border-gray-800">
            <!-- Dot -->
            <div class="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-primary-500"></div>
            
            <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
            <p class="text-gray-400 timeline-description" v-html="description"></p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    year: String,
    title: String,
    description: String
})
</script> 

<style scoped>
.timeline-description a{
    color: red;
}
</style>