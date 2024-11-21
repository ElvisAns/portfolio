<template>
    <main class="max-w-[1280px] mx-auto px-[20px] mt-[50px] text-black dark:text-white">
        <h1 class="dark:text-white text-primary-500 text-[3rem] md:text-[5rem] font-bold">Projects</h1>
        <p class="dark:text-[#def858] text-primary-500 text-3xl mb-12">Things I have built ranging from small to large.</p>

        <!-- Projects Grid -->
        <div class="space-y-12">
            <div v-for="project in projects" :key="project.title" 
                class="grid grid-cols-1 md:grid-cols-2 gap-8 border border-primary-500/20 rounded-xl p-6 hover:border-primary-500/40 transition-all">
                <!-- Left Column: Project Details -->
                <div class="space-y-6">
                    <div class="flex items-center gap-2">
                        <h2 class="text-2xl font-bold">{{ project.title }}</h2>
                    </div>
                    
                   
                    <div class="flex gap-4">
                        <a v-if="project.link" 
                            :href="project.link" 
                            target="_blank" 
                            class="text-primary-500 hover:underline inline-flex items-center gap-2"
                        >
                            <i class="fas fa-external-link-alt"></i>
                            Visit Project
                        </a>
                        <a v-if="project.sourceCode" 
                            :href="project.sourceCode" 
                            target="_blank" 
                            class="text-primary-500 hover:underline inline-flex items-center gap-2"
                        >
                            <i class="fab fa-github"></i>
                            Source Code
                        </a>
                    </div>
                    
                    <p class="text-gray-600 dark:text-gray-300" v-html="project.description"></p>
                    
                    <!-- Tech Stack -->
                    <div class="flex flex-wrap gap-2">
                        <UBadge v-for="tech in project.techStack" 
                            :key="tech" 
                            color="primary" 
                            variant="soft"
                        >
                            {{ tech }}
                        </UBadge>
                    </div>
                </div>

                <!-- Right Column: Project Caption/Image -->
                <div v-if="project.image" 
                    class="relative h-[300px] rounded-xl overflow-hidden"
                >
                    <div 
                        class="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700"
                        :style="{
                            backgroundImage: `url(${project.image})`,
                            backgroundPosition: 'top',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }"
                    ></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <p class="text-white text-sm">{{ project.imageCaption }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useProjectsAndTools } from '~/composables/useProjectsAndTools'

const { projects } = useProjectsAndTools()

const { setSeo } = useSeo()
setSeo({
    title: 'Projects | Ansima - Full Stack Developer',
    description: 'Projects ranging from small to large, built by Ansima.'
})
</script>


<style>
.group:hover {
    transform: translateY(-2px);
}

.desc-p a {
    @apply text-primary-500 underline;
}
</style>