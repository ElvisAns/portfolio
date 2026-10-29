<template>
    <main class="max-w-[1280px] mx-auto px-[20px] mt-[50px] text-black dark:text-white">
        <!-- Hero Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-6">
                    I build web applications from frontend to backend
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300">
                    Beyond the code, I manage servers, optimize websites for search engines, turn data into insights, and build products people are willing to pay for.
                </p>
                <UButton class="mt-4" to="https://calendly.com/ansimapersic/30min" target="_blank" size="lg">
                    <UIcon name="i-heroicons-calendar-days" class="w-4 h-4 mr-2" />
                    Book a discovery call
                </UButton>
            </div>
            <div class="relative">
                <img src="~/assets/images/event-pitching-healthlink.jpg" alt="Elvis at work" class="rounded-2xl shadow-xl w-full h-auto" />
                <!-- Decorative elements -->
                <div class="absolute -right-4 bg-primary-500/20 w-[100%] h-full rounded-2xl -z-10 bottom-6"></div>
            </div>
        </div>

        <!-- Introduction -->
        <div class="prose dark:prose-invert max-w-none mb-20">
            <p class="text-xl leading-relaxed mb-6">
                Hi! I'm Ansima, a full-stack developer. Most of my work is Laravel, Vue, Nuxt, React, and Next.js, and the server the site runs on, usually Linux or Cloudflare. For six years that has meant the interface, the API, and whatever has to stay up after launch.
            </p>
            <p class="text-xl leading-relaxed mb-6">
                I worked with <a href="https://outliant.com" target="_blank"
                    class="text-primary-500 hover:underline">Outliant (acquired by Ignite Visibility)</a> on production sites for brands including Apollo Theater, Blend360, Ideal Dental, and Gameday Men's Health. A lot of that work was SEO and Core Web Vitals.
                I also contribute to
                <a href="https://openhub.net/accounts/ElvisAns" target="_blank"
                    class="text-primary-500 hover:underline">
                    Tiki Wiki CMS
                </a>,
                an open-source PHP platform, where I build maintainer tools and dashboards from tracker data.
            </p>

            <!-- Added Achievement Image -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="relative">
                    <img src="~/assets/images/we_won_.jpg"
                        alt="TVET Youth Challenge Victory - Health Tracking Device Project"
                        class="rounded-2xl shadow-xl w-auto h-[200px]" />
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic pt-2">
                        Winning the TVET Youth Challenge in 2019 with our health tracking device project
                    </p>
                </div>
                <div class="relative">
                    <img src="~/assets/images/demo_day.jpg" alt="Demo day for CTLCO sarl"
                        class="rounded-2xl shadow-xl w-auto h-[200px]" />
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic pt-2">
                        Me at demo day for CTLCO sarl, 2021
                    </p>
                </div>
            </div>
        </div>
        <InternalAds />
        <!-- Principles -->
        <div class="mb-20">
            <h2 class="text-3xl font-bold mb-8">My Principles</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="dark:bg-gray-800 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-bullseye text-primary-500 text-2xl mb-5" aria-hidden="true"></i>
                    <span class="sr-only">Value-Driven Development</span>
                    <h3 class="text-xl font-semibold mb-3">Value-Driven Development</h3>
                    <p class="text-gray-400">
                        Focus on delivering tangible value without bias.
                    </p>
                </div>
                <div class="dark:bg-gray-800 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-check text-primary-500 text-2xl mb-5" aria-hidden="true"></i>
                    <span class="sr-only">Practical Solutions</span>
                    <h3 class="text-xl font-semibold mb-3">Practical Solutions</h3>
                    <p class="text-gray-400">
                        Provide functional solutions with straightforward technology stacks.Clients and users need a working product, no complicated stack!
                    </p>
                </div>
                <div class="dark:bg-gray-800 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-expand-arrows-alt text-primary-500 text-2xl mb-5" aria-hidden="true"></i>
                    <span class="sr-only">Scalable Architecture</span>
                    <h3 class="text-xl font-semibold mb-3">Scalable Architecture</h3>
                    <p class="text-gray-400">
                        Design with scalability in mind for future growth. 
                    </p>
                </div>
            </div>
        </div>
        <!-- Journey Timeline -->
        <div class="mb-20">
            <h2 class="text-3xl font-bold mb-8">My Journey</h2>
            <div class="space-y-8">
                <TimelineItem v-for="(item, index) in timeline" :key="index" :year="item.year" :title="item.title"
                    :description="item.description" />
            </div>
        </div>

        <!-- Personal Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
                <h2 class="text-3xl font-bold mb-6">What Keeps Me Going</h2>
                <div class="space-y-4">
                    <p class="flex items-center gap-3">
                        <i class="fas fa-music text-primary-500"></i>
                        Music lover (Amapiano, Gospel & Rumba)
                    </p>
                    <p class="flex items-center gap-3">
                        <i class="fas fa-dumbbell text-primary-500"></i>
                        Gym enthusiast (when I am not at the keyboard)
                    </p>
                    <p class="flex items-center gap-3">
                        <i class="fas fa-laugh-beam text-primary-500"></i>
                        Meme connoisseur
                    </p>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="text-center mb-20">
            <h2 class="text-3xl font-bold mb-8">Ready to Collaborate?</h2>
            <UButton class="mt-4" to="https://calendly.com/ansimapersic/30min" target="_blank" size="lg">
                <UIcon name="i-heroicons-calendar-days" class="w-4 h-4 mr-2" />
                Book a discovery call
            </UButton>
        </div>
    </main>
</template>

<script setup>
const timeline = [
    {
        year: '2016',
        title: 'The Beginning',
        description: 'Started exploring programming with C and Arduino, focusing on building embedded systems using PIC microcontrollers.'
    },
    {
        year: '2017',
        title: 'Web Development Journey',
        description: 'Learned HTML, CSS, and PHP. Successfully completed my first website project and delivered additional websites for clients.'
    },
    {
        year: '2018',
        title: 'First Major Project',
        description: 'Developed an attendance system that combined my skills in web development and Arduino.'
    },
    {
        year: '2020–2022',
        title: 'Full-stack developer, CTL Company',
        description: 'Built Vantoria, a cloud HR platform with biometric attendance, and Atalaku Xpress. Designed the backend, the APIs, and the frontend, led technical delivery, and cut hardware cost by manufacturing the terminals locally. Goma.'
    },
    {
        year: '2022–now',
        title: 'Freelance web developer, Evoludata',
        description: 'Contributing to <a class="text-primary-500 underline" href="https://openhub.net/accounts/ElvisAns">Tiki Wiki</a>, a large open-source PHP CMS. Building maintainer tools, including a debugger and UI modules, and improving reliability and performance. Remote.'
    },
    {
        year: '2023–2025',
        title: 'Frontend engineer, Outliant / Ignite Visibility',
        description: 'Built marketing websites in Webflow and JavaScript for international clients, including Apollo Theater, Blend360, Ideal Dental, and Gameday Men’s Health. Optimized SEO and Core Web Vitals, and built internal tools and automation so repeat delivery work was not done by hand. Remote.'
    },
    {
        year: '2023–now',
        title: 'Technical founder, Kilo Volts Lab',
        description: 'Building and deploying <a class="text-primary-500 underline" href="https://gethealth.link">HealthLink</a>, a cloud platform for instant access to a patient medical record. Full-stack on Laravel and Vue, plus the VPS, CI/CD, and the production systems. Remote.'
    },
    {
        year: '2025',
        title: 'Software developer, Axeptio',
        description: 'Maintained the React plugin that runs Axeptio consent inside Webflow, and helped move that integration from AWS to Cloudflare. May to October, remote.'
    },
    {
        year: '2026',
        title: 'Senior full-stack developer, 8Limbs Inc',
        description: 'Replaced the Lovable-generated 8 Limbs app with a codebase the company owns, and shipped AI nutrition tools: a food scanner, a fridge scanner, and daily intake tracking. Moved serverless functions from Supabase to Cloudflare Workers, automated deploys, lowered infrastructure cost, and added Stripe subscriptions. January to April, Canada, remote.'
    }
];

// SEO
useHead({
    title: 'About Me | Ansima Elvis',
    meta: [
        { name: 'description', content: 'Full-stack developer who builds web applications, manages servers, improves SEO, turns data into insights, and ships products people pay for.' }
    ]
})
</script>