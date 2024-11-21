<template>
    <main class="max-w-[1280px] mx-auto px-[20px] mt-[50px] text-black dark:text-white">
        <h1 class="dark:text-white text-primary-500 text-[3rem] md:text-[5rem] font-bold">Small Tools I have built</h1>
        <p class="dark:text-[#def858] text-primary-500 text-3xl mb-12">Open-source tools and utilities I've created to help developers & makers</p>

        <!-- Tools Grid -->
        <div class="space-y-12">
            <div v-for="tool in tools" :key="tool.title" 
                class="grid grid-cols-1 md:grid-cols-2 gap-8 border border-primary-500/20 rounded-xl p-6 hover:border-primary-500/40 transition-all">
                <!-- Left Column: Tool Details -->
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <h2 class="text-2xl font-bold">{{ tool.title }} </h2>
                        <UBadge 
                            :color="tool.status === 'in-progress' ? 'orange' : 'green'" 
                            class="uppercase text-xs"
                        >
                            {{ tool.status }}
                        </UBadge>
                    </div>
                    
                    <div class="flex gap-4">
                        <a v-if="tool.link" 
                            :href="tool.link" 
                            target="_blank" 
                            class="text-primary-500 hover:underline inline-flex items-center gap-2"
                        >
                            <i class="fas fa-external-link-alt"></i>
                            View Tool
                        </a>
                        <a v-if="tool.sourceCode" 
                            :href="tool.sourceCode" 
                            target="_blank" 
                            class="text-primary-500 hover:underline inline-flex items-center gap-2"
                        >
                            <i class="fab fa-github"></i>
                            Source Code
                        </a>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-300" v-html="tool.description"></p>
                    
                    <!-- Milestones/Stats -->
                    <div class="flex flex-wrap gap-4">
                        <div v-for="milestone in tool.milestones" 
                            :key="milestone.text"
                            class="flex items-center gap-2 bg-primary-500/10 px-3 py-1.5 rounded-full text-sm"
                        >
                            <i :class="['fas', milestone.icon]"></i>
                            <span>{{ milestone.text }}</span>
                        </div>
                    </div>

                    <!-- Tech Stack -->
                    <div class="pt-4 border-t border-gray-700/20">
                        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Built with:</p>
                        <div class="flex flex-wrap gap-2">
                            <UBadge v-for="tech in tool.techStack" 
                                :key="tech" 
                                color="gray" 
                                variant="soft"
                                class="font-mono"
                            >
                                {{ tech }}
                            </UBadge>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Tool Preview/Demo -->
                <div v-if="tool.image" class="relative h-[300px] rounded-xl overflow-hidden group">
                    <div 
                        class="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700"
                        :style="{
                            backgroundImage: `url(${tool.image})`,
                            backgroundPosition: 'top left',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }"
                    ></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <p class="text-white text-sm">{{ tool.imageCaption }}</p>
                    </div>
                </div>

                <!-- Fallback for tools without images -->
                <div v-else class="relative h-[300px] rounded-xl overflow-hidden dark:bg-gray-900/50 bg-white flex items-center justify-center">
                    <div class="text-center p-6">
                        <i class="fas fa-code text-6xl text-primary-500/20 mb-4"></i>
                        <p class="text-gray-400">Demo coming soon</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- GitHub CTA -->
        <div class="mt-16 text-center">
            <p class="text-lg mb-4">Find more tools and contributions on my GitHub</p>
            <a href="https://github.com/ElvisAns" 
                target="_blank" 
                class="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors"
            >
                <i class="fab fa-github"></i>
                View GitHub Profile
            </a>
        </div>
    </main>
</template>

<script setup>
const { tools } = useProjectsAndTools()
const { setSeo } = useSeo()
setSeo({
    title: 'Tools | Ansima - Full Stack Developer',
    description: 'Open-source tools and utilities created by Ansima to help developers & makers.'
})
</script>

<style scoped>
/* Optional: Add smooth scroll behavior */
html {
    scroll-behavior: smooth;
}
</style> 