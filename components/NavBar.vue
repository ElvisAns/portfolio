<template>
    <nav class="max-w-[1280px] mx-auto px-[20px] pt-[20px]">
        <div class="flex justify-between items-center">
            <NuxtLink to="/">
                <img 
                    src="~/assets/images/avatar-min.webp" 
                    alt="Ansima Logo" 
                    class="w-[60px] h-[60px] rounded-full border-2 border-white" 
                />
            </NuxtLink>   
            
            <!-- Desktop Menu -->
            <ul class="hidden lg:flex items-center justify-center gap-4 list-none text-black dark:text-white text-lg">
                <li v-for="item in menuItems" :key="item.path" 
                    class="hover:bg-red_mine-500 hover:text-white px-4 py-1 rounded-md hover:shadow-md shadow-red_mine-500/50"
                >
                    <NuxtLink :to="item.path" class="flex items-center gap-2">
                        <UIcon :name="item.icon" class="w-6 h-6" />
                        {{ item.label }}
                    </NuxtLink>
                </li>
                <li>
                    <button @click="toggleDarkMode" class="flex items-center gap-2 hover:bg-red_mine-500 hover:text-white px-4 py-1 rounded-md">
                        <UIcon :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" class="w-6 h-6" />
                        {{ isDark ? 'Dark' : 'Light' }}
                    </button>
                </li>
                <li>
                    <UButton to="https://calendly.com/ansimapersic/30min" target="_blank" color="white" size="lg">
                        <UIcon name="i-heroicons-calendar-days" class="w-4 h-4 mr-2" />
                        Book a discovery call
                    </UButton>
                </li>
            </ul>

            <!-- Mobile Menu Button -->
            <button 
                @click="isMenuOpen = !isMenuOpen"
                class="lg:hidden text-black dark:text-white p-2 hover:bg-red_mine-500/10 rounded-md"
                aria-label="Toggle menu"
            >
                <UIcon 
                    :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" 
                    class="w-8 h-8"
                />
            </button>
        </div>

        <!-- Backdrop -->
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="isMenuOpen"
                class="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                @click="isMenuOpen = false"
            ></div>
        </Transition>

        <!-- Mobile Menu (update z-index to be above backdrop) -->
        <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform translate-y-full opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform translate-y-full opacity-0"
        >
            <div v-if="isMenuOpen" 
                class="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg rounded-t-2xl z-50"
            >
                <ul class="py-4 px-[20px] space-y-2 text-black dark:text-white">
                    <li v-for="item in menuItems" :key="item.path" 
                        class="hover:bg-red_mine-500 hover:text-white rounded-md hover:shadow-md shadow-red_mine-500/50"
                        @click="isMenuOpen = false"
                    >
                        <NuxtLink :to="item.path" class="flex items-center gap-2 px-4 py-3">
                            <UIcon :name="item.icon" class="w-6 h-6" />
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                    <li class="hover:bg-red_mine-500 hover:text-white rounded-md"
                        @click="toggleDarkMode"
                    >
                        <button class="flex items-center gap-2 px-4 py-3 w-full">
                            <UIcon :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'" class="w-6 h-6" />
                            {{ isDark ? 'Dark' : 'Light' }}
                        </button>
                    </li>
                    <li class="pt-12 pb-4">
                        <UButton to="https://calendly.com/ansimapersic/30min" block target="_blank" color="white" size="lg">
                            <UIcon name="i-heroicons-calendar-days" class="w-6 h-6 mr-2" />
                            Book a discovery call
                        </UButton>
                    </li>
                </ul>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
const isMenuOpen = ref(false)

const menuItems = [
    { label: 'About', path: '/about', icon: 'i-heroicons-user' },
    { label: 'Blog', path: '/blog', icon: 'i-heroicons-pencil-square' },
    { label: 'Projects', path: '/projects', icon: 'i-heroicons-briefcase' },
    { label: 'Tools', path: '/tools', icon: 'i-heroicons-wrench-screwdriver' }
]

// Close menu when route changes
watch(() => useRoute().path, () => {
    isMenuOpen.value = false
})

// Close menu when clicking outside
onMounted(() => {
    document.addEventListener('click', (e) => {
        const nav = document.querySelector('nav')
        if (!nav?.contains(e.target)) {
            isMenuOpen.value = false
        }
    })
})

const colorMode = useColorMode()
const toast = useToast()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    toggleDarkMode()
  }
})

const createConfirmToast = ({ title, description, confirmLabel, cancelLabel }) => {
    return new Promise((resolve) => {
        toast.add({
            title,
            description,
            timeout: 0,
            closable: false,
            actions: [
                {
                    label: cancelLabel,
                    click: () => {
                        resolve(false)
                    }
                },
                {
                    label: confirmLabel,
                    click: () => {
                        resolve(true)
                    },
                    color: 'red'
                }
            ]
        })
    })
}

const toggleDarkMode = async () => {
    if (colorMode.value === 'dark') {
        const confirmed = await createConfirmToast({
            title: 'Are you sure?',
            description: 'Light mode may harm your eyes! 👀',
            confirmLabel: "I'm feeling lucky!",
            cancelLabel: 'Stay in dark mode'
        })
        
        if (confirmed) {
            const success = Math.random() > 0.7 // 30% chance of success
            
            if (success) {
                colorMode.preference = 'light'
                toast.add({
                    title: 'Congratulations! 🎉',
                    description: 'You won the light mode lottery!',
                    icon: 'i-heroicons-sun-20-solid'
                })
            } else {
                toast.add({
                    title: 'Not this time! 😅',
                    description: 'Try again, we believe in you!',
                    icon: 'i-heroicons-moon-20-solid'
                })
            }
        }
    } else {
        // Switching to dark mode is always allowed
        colorMode.preference = 'dark'
    }
}
</script>

<style scoped>
li:has(>.router-link-active) {
    @apply bg-red_mine-500 text-white shadow-md shadow-red_mine-500/50;
}

/* Optional: Add backdrop blur when menu is open */
.fixed {
    @apply backdrop-blur-sm;
}
</style>