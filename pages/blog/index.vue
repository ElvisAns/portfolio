<template>
    <main class="max-w-[1280px] mx-auto px-[20px] mt-[100px] text-black dark:text-white">
        <h1 class="dark:text-white text-primary-500 text-[3rem] md:text-[5rem] font-bold">Blog Posts</h1>
        <p class="dark:text-[#def858] text-primary-500 text-3xl mb-12">Thoughts, tutorials and insights about web development</p>

        <!-- Grid of Blog Posts -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Loading State -->
            <template v-if="pending">
                <UCard v-for="n in 6" :key="n" class="animate-pulse">
                    <div class="h-48 bg-gray-700/20 rounded-t-lg"></div>
                    <div class="p-4 space-y-3">
                        <div class="h-4 bg-gray-700/20 rounded w-3/4"></div>
                        <div class="h-3 bg-gray-700/20 rounded w-full"></div>
                        <div class="h-3 bg-gray-700/20 rounded w-2/3"></div>
                    </div>
                </UCard>
            </template>

            <!-- Blog Posts -->
            <template v-else>
                <UCard v-for="blog in blogs" :key="blog.id" 
                    class="group cursor-pointer hover:-translate-y-1 transition-all duration-300"
                    @click="navigateToBlog(blog)"
                >
                    <template #header>
                        <div class="relative h-48">
                            <img v-if="blog.cover_image" 
                                :src="blog.cover_image" 
                                :alt="blog.title"
                                class="absolute inset-0 w-full h-full object-cover rounded-t-lg" 
                            />
                            <div v-else class="absolute inset-0 bg-primary-500/10 flex items-center justify-center rounded-t-lg">
                                <i class="fas fa-newspaper text-4xl text-primary-500/30"></i>
                            </div>
                        </div>
                    </template>
                    
                    <div class="p-4">
                        <div class="flex gap-2 mb-3">
                            <UBadge v-for="tag in blog.tag_list" 
                                :key="tag" 
                                color="primary" 
                                variant="soft"
                                class="text-xs"
                            >
                                {{ tag }}
                            </UBadge>
                        </div>
                        <h3 class="font-semibold text-lg mb-2 group-hover:text-primary-500">{{ blog.title }}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{{ blog.description }}</p>
                        <div class="flex justify-between items-center text-sm">
                            <span>{{ blog.readable_publish_date }}</span>
                            <div class="flex items-center gap-4">
                                <span class="flex items-center gap-1">
                                    <i class="fas fa-heart text-red-500"></i>
                                    {{ blog.public_reactions_count }}
                                </span>
                                <span>{{ blog.reading_time_minutes }} min read</span>
                            </div>
                        </div>
                    </div>
                </UCard>
            </template>
        </div>
    </main>
</template>

<script setup>
const { setSeo } = useSeo()
setSeo({
    title: 'Blog | Ansima - Full Stack Developer',
    description: 'Articles and tutorials about web development, IoT, and software engineering'
})

const blogs = ref([])
const pending = ref(true)

const navigateToBlog = (blog) => {
    // Create SEO-friendly URL using the slug
    navigateTo(`/blog/${blog.slug}`)
}

onMounted(async () => {
    try {
        const response = await fetch('https://dev.to/api/articles?username=elvisans')
        const articles = await response.json()
        blogs.value = articles.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
    } catch (error) {
        console.error('Error fetching blogs:', error)
    } finally {
        pending.value = false
    }
})
</script> 