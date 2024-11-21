<template>
    <footer class="py-8 border-t border-gray-800 mt-[100px]">
        <div class="max-w-[1280px] mx-auto px-[20px]">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <!-- About Section -->
                <div>
                    <h3 class="text-xl font-bold mb-4 dark:text-white text-black">Ansima Elvis</h3>
                    <p class="text-gray-400 mb-4">
                        Full-Stack Developer & Entrepreneur building modern web applications and IoT solutions.
                    </p>
                    <div class="flex space-x-4 dark:text-gray-400 text-gray-800">
                        <a href="https://www.linkedin.com/in/cibalinda-elvis/" 
                            target="_blank" 
                            class="hover:text-primary-500 transition-colors"
                        >
                            <i class="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="https://github.com/ElvisAns" 
                            target="_blank" 
                            class="hover:text-primary-500 transition-colors"
                        >
                            <i class="fab fa-github text-xl"></i>
                        </a>
                        <a href="https://x.com/elvis_cibalinda" 
                            target="_blank" 
                            class="hover:text-primary-500 transition-colors"
                        >
                            <i class="fab fa-x-twitter text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-xl font-bold mb-4 dark:text-white text-black">Quick Links</h3>
                    <ul class="space-y-2 dark:text-gray-400 text-gray-800">
                        <li>
                            <NuxtLink to="/about" class="hover:text-primary-500 transition-colors">
                                About Me
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/projects" class="hover:text-primary-500 transition-colors">
                                Projects
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/tools" class="hover:text-primary-500 transition-colors">
                                Tools
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog" class="hover:text-primary-500 transition-colors">
                                Blog
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="text-xl font-bold mb-4 dark:text-white text-black">Get in Touch</h3>
                    <ul class="space-y-2 dark:text-gray-400 text-gray-800">
                        <li class="flex items-center space-x-2">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:ansimapersic@gmail.com" class="hover:text-primary-500 transition-colors">
                                ansimapersic[at]gmail.com
                            </a>
                        </li>
                        <li class="flex items-center space-x-2">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>The World</span>
                        </li>
                        <li>
                            <a href="https://kvolts-lab.com" 
                                target="_blank" 
                                class="hover:text-primary-500 transition-colors flex items-center space-x-2"
                            >
                                <i class="fas fa-building"></i>
                                <span>Kilo Volts Lab</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1sXzWSib5oYmb8QLQCY8-TGTXYO8doXGl/view?usp=sharing"
                                target="_blank"
                                class="hover:text-primary-500 transition-colors flex items-center space-x-2"
                            >
                                <i class="fas fa-file-pdf"></i>
                                <span>Resume</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-gray-800 text-center dark:text-gray-400 text-gray-800">
                <p>© {{ new Date().getFullYear() }} Ansima Elvis. All rights reserved.</p>
                <p class="mt-2 text-sm">
                    Built with ❤️
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
// No additional logic needed
</script>

<style scoped>
/* Optional: Add hover animations */
.hover\:text-primary-500:hover i {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
}
</style> 