<template>
    <main class="max-w-[1280px] mx-auto px-[20px] mt-[100px] text-black dark:text-white">
        <h1 class="dark:text-white text-primary-500 text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold">Ansima Elvis
        </h1>
        <p class="dark:text-[#def858] text-primary-500 text-5xl">Full-Stack Developer & Entrepreneur</p>
        <p class="mt-[56px] text-[1.5rem] max-w-[500px] mb-[40px]">I am passionate about anything web development and
            internet of things!</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px] mb-[100px] max-w-[500px]">
            <a href="https://kvolts-lab.com" class="flex items-center gap-2"><i
                    class="fa-solid fa-building text-5xl"></i> Founder of <span class="underline">Kilo Volts
                    Lab</span></a>
            <a href="https://drive.google.com/file/d/1Zfl0e6i1kWgxQv7xzgC6DbxWYMUBr4-U/view?usp=sharing"
                class="flex items-center gap-2"><i class="fa-solid fa-certificate text-5xl"></i> <span
                    class="underline">TEF Certified Business Manager</span></a>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px] mb-[100px] border-2 border-primary-500/20 rounded-xl p-4 bg-gray-900/50 backdrop-blur-sm relative electric-border">
            <div class="flex items-start md:items-center gap-[30px] flex-col md:flex-row">
                <img src="~/assets/images/me.jpg" alt="Ansima Elvis"
                    class="w-auto h-[80px] rounded-full inline-block float-left" />
                <p class="text-black dark:text-white text-2xl md:text-3xl lg:text-5xl"><span
                        class="dark:text-[#def858] text-primary-500">I write codes</span> that
                    transform ideas to reality</p>
            </div>
            <div class="text-black dark:text-white text-lg md:text-2xl mt-[20px]">
                <p>I started as an Electronics Engineer and became a Full-Stack Developer who loves solving problems
                    with
                    technology.</p>
                <p>I work on building modern web apps and IoT solutions while creating products that make a difference.
                </p>
                <div class="flex items-center gap-4 mt-[20px] dark:text-[#def858] text-primary-500 text-3xl relative">
                    <a href="https://www.linkedin.com/in/cibalinda-elvis/" target="_blank" rel="noopener noreferrer"><i
                            class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/ElvisAns" target="_blank" rel="noopener noreferrer"><i
                            class="fa-brands fa-github"></i></a>
                    <a href="https://x.com/elvis_cibalinda" target="_blank" rel="noopener noreferrer"><i
                            class="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://www.credly.com/users/ansima-cibalinda" target="_blank"
                        rel="noopener noreferrer"><img
                            src="https://info.credly.com/hs-fs/hubfs/Credly_Logo_Orange_10-Inch.png?width=3000&amp;name=Credly_Logo_Orange_10-Inch.png"
                            class="w-auto h-[25px]"></a>
                    <a class="text-lg"
                        href="https://drive.google.com/file/d/1sXzWSib5oYmb8QLQCY8-TGTXYO8doXGl/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">Resume <i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>


        <div class="mb-[100px]">
            <h2 class="text-3xl font-bold text-center">Companies I have worked with </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-[20px]">
                <!-- Brand Cards -->
                <a v-for="brand in brands" :key="brand.url" :href="brand.url" target="_blank" class="group relative bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800 
                           hover:bg-gray-800/70 transition-all duration-300 
                           flex items-center justify-center">
                    <img :src="brand.image" :alt="brand.name" :title="brand.name" :class="[
                        'w-auto h-[40px] rounded-md transition-all duration-300 group-hover:scale-110 object-contain',
                        brand.whiteBg ? 'bg-white p-2' : '',
                        'mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:mix-blend-normal'
                    ]" />

                    <!-- Hover Overlay with Name -->
                    <div class="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        <span class="text-white text-sm font-medium">
                            {{ brand.name }}
                            <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                        </span>
                    </div>
                </a>
            </div>
        </div>
        <div class="flex justify-center items-center my-[100px]">
            <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path
                        d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p>"A ship in harbor is safe, but that is not what ships are built for."</p>
            </blockquote>
        </div>
        <div class="flex flex-col justify-center items-center my-[100px]">
            <h2 class="text-3xl font-bold text-center mb-8">Top Blogs</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <!-- Loading State -->
                <template v-if="pending">
                    <UCard v-for="n in 3" :key="n" class="animate-pulse">
                        <div class="h-48 bg-gray-700/20 rounded-t-lg"></div>
                        <div class="p-4 space-y-3">
                            <div class="h-4 bg-gray-700/20 rounded w-3/4"></div>
                            <div class="h-3 bg-gray-700/20 rounded w-full"></div>
                            <div class="h-3 bg-gray-700/20 rounded w-2/3"></div>
                        </div>
                    </UCard>
                </template>

                <!-- Blogs -->
                <template v-else>
                    <UCard v-for="blog in blogs.slice(0, 3)" :key="blog.id" 
                        class="group cursor-pointer hover:-translate-y-1 transition-all duration-300"
                        @click="window.open(blog.url, '_blank')"
                    >
                        <template #header>
                            <img v-if="blog.cover_image" :src="blog.cover_image" :alt="blog.title" 
                                class="w-full h-48 object-cover rounded-t-lg" />
                        </template>
                        
                        <div class="p-4">
                            <h3 class="font-semibold text-lg mb-2 group-hover:text-primary-500">{{ blog.title }}</h3>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">{{ blog.description }}</p>
                            <div class="flex justify-between items-center text-sm">
                                <span>{{ blog.readable_publish_date }}</span>
                                <span>{{ blog.reading_time_minutes }} min read</span>
                            </div>
                        </div>
                    </UCard>
                </template>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useBrands } from '~/composables/useBrands'
import { useProjectsAndTools } from '~/composables/useProjectsAndTools'

const { brands } = useBrands()
const { tools, projects } = useProjectsAndTools()

const { setSeo } = useSeo()
setSeo({
    title: 'Home | Ansima - Full Stack Developer',
})

let blogs = ref([]);
const pending = ref(true)

onMounted(async () => {
    try {
        const response = await fetch('https://dev.to/api/articles?username=elvisans')
        const articles = await response.json()
        // Sort by popularity (reactions count)
        blogs.value = articles.sort((a, b) => b.public_reactions_count - a.public_reactions_count)
    } catch (error) {
        console.error('Error fetching blogs:', error)
    } finally {
        pending.value = false
    }
})
</script>

<style>
/* Optional: Add custom animations or transitions */
.group:hover {
    transform: translateY(-2px);
}

.electric-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.75rem;
    padding: 2px;
    background: linear-gradient(90deg,
            rgb(var(--color-primary-500)) 0%,
            rgb(var(--color-primary-500)) 45%,
            rgba(255, 255, 255, 0.8) 50%,
            /* White glow */
            rgb(var(--color-primary-500)) 55%,
            rgb(var(--color-primary-500)) 100%);
    background-size: 300% 100%;
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderFlow 6s linear infinite;
    opacity: 1;
}

@keyframes borderFlow {
    0% {
        background-position: 0% 0;
    }

    100% {
        background-position: 300% 0;
    }
}

.electric-border {
    position: relative;
    box-shadow: 0 0 15px rgba(var(--color-primary-500), 0.1);
}

.desc-p a {
    @apply text-primary-500 underline;
}
</style>