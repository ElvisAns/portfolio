<template>
    <main class="max-w-[1280px] mx-auto px-[20px] mt-[50px] text-black dark:text-white">
        <!-- Hero Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-6">
                    Senior Full-Stack Engineer
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300">
                    I take web products from a rough problem to production, and build systems teams can own.
                </p>
                <UButton class="mt-4" to="mailto:ansimapersic@gmail.com" size="lg">
                    <UIcon name="i-heroicons-envelope" class="w-4 h-4 mr-2" />
                    Get in touch
                </UButton>
            </div>
            <div class="relative">
                <img src="~/assets/images/me.jpg" alt="Ansima Elvis" class="rounded-2xl shadow-xl w-full h-auto" />
                <!-- Decorative elements -->
                <div class="absolute -right-4 bg-primary-500/20 w-[100%] h-full rounded-2xl -z-10 bottom-6"></div>
            </div>
        </div>

        <!-- Introduction -->
        <div class="prose dark:prose-invert max-w-none mb-20">
            <p class="text-xl leading-relaxed mb-6">
                I'm Ansima, a full-stack engineer based in Kigali, Rwanda. For six years, I've shipped web products
                across frontend, backend, data, and deployment, primarily with Laravel, Vue, Nuxt, and Cloudflare.
                I can take over an existing prototype, make it reliable, and leave behind a codebase a team can maintain.
            </p>
            <p class="text-xl leading-relaxed mb-6">
                My recent work includes replacing a generated app with a codebase a company owns, building AI-assisted
                nutrition tools, moving serverless workloads to Cloudflare Workers, and integrating Stripe.
                I also shipped Website Importer on the Webflow Marketplace; it has more than 200 installs and has
                migrated over 100 sites.
            </p>
            <p class="text-xl leading-relaxed mb-6">
                I have shipped production websites for Apollo Theater, Blend360, Ideal Dental, and Gameday Men's Health
                with <a href="https://outliant.com" target="_blank"
                    class="text-primary-500 hover:underline">Outliant and Ignite Visibility</a>.
                I contribute to
                <a href="https://openhub.net/accounts/ElvisAns" target="_blank"
                    class="text-primary-500 hover:underline">
                    TikiCMS groupware
                </a>,
                where I build maintainer tools and improve reliability and performance.
            </p>

            <!-- Added Achievement Image -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="relative">
                    <img src="~/assets/images/we_won_.jpg"
                        alt="TVET Youth Challenge Victory - Health Tracking Device Project"
                        class="rounded-2xl shadow-xl w-auto h-[200px]" />
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic pt-2">
                        Winning the TVET Youth Challenge in 2019 with a health tracking device project
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
            <h2 class="text-3xl font-bold mb-8">How I Work</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="dark:bg-gray-800 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-bullseye text-primary-500 text-2xl mb-5" aria-hidden="true"></i>
                    <span class="sr-only">Start with the problem</span>
                    <h3 class="text-xl font-semibold mb-3">Start with the problem</h3>
                    <p class="text-gray-400">
                        Understand what users need, then ship the smallest useful solution.
                    </p>
                </div>
                <div class="dark:bg-gray-800 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-check text-primary-500 text-2xl mb-5" aria-hidden="true"></i>
                    <span class="sr-only">Build for the team</span>
                    <h3 class="text-xl font-semibold mb-3">Build for the team</h3>
                    <p class="text-gray-400">
                        Choose straightforward tools and leave code that other engineers can understand and maintain.
                    </p>
                </div>
                <div class="dark:bg-gray-800 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-expand-arrows-alt text-primary-500 text-2xl mb-5" aria-hidden="true"></i>
                    <span class="sr-only">Own production</span>
                    <h3 class="text-xl font-semibold mb-3">Own production</h3>
                    <p class="text-gray-400">
                        Take responsibility for deployment, reliability, and what happens after launch.
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
                        Gym enthusiast (when not busy building the future)
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
            <h2 class="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p class="text-gray-400 mb-4">I'm open to senior full-stack engineering roles and contract work.</p>
            <UButton class="mt-4" to="mailto:ansimapersic@gmail.com" size="lg">
                <UIcon name="i-heroicons-envelope" class="w-4 h-4 mr-2" />
                Get in touch
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
        year: 'Oct 2020–Feb 2022',
        title: 'Full-Stack Developer at CTLCo',
        description: 'Built Vantoria, a cloud HR and biometric attendance system. Led Atalaku Xpress, a bus fare platform with rechargeable cards, payment integrations, and QR payments. Local terminal manufacturing cut POS hardware cost by about 30%.'
    },
    {
        year: '2022–present',
        title: 'Software Developer at EvoluData',
        description: 'Contribute to Tiki Wiki CMS Groupware, building maintainer tools, improving reliability and performance, and extending the platform with live IoT dashboards and automation.'
    },
    {
        year: '2023–present',
        title: 'Technical Lead at Kilo Volts Lab',
        description: 'Lead development of HealthLink, a medical identity product with secure health profiles and medication reminders. Shipped Website Importer on the Webflow Marketplace, integrating Stripe for per-import payments; it has 200+ installs and 100+ migrated sites.'
    },
    {
        year: '2023–2025',
        title: 'Frontend Engineer at Outliant and Ignite Visibility',
        description: 'Shipped and maintained production sites for Apollo Theater, Blend360, Ideal Dental, and Gameday Men’s Health. Improved SEO and Core Web Vitals, and built internal tools to reduce repeat manual work.'
    },
    {
        year: 'May–Oct 2025',
        title: 'Software Developer at Axeptio',
        description: 'Maintained the React plugin that brings Axeptio consent into Webflow and helped move the integration from AWS to Cloudflare.'
    },
    {
        year: 'Jan–Apr 2026',
        title: 'Senior Full-Stack Developer at 8Limbs',
        description: 'Replaced a generated app with a codebase the company owns and shipped food and fridge scanners with daily nutrition tracking. Moved serverless functions to Cloudflare Workers, automated deploys, and added Stripe subscriptions and webhooks.'
    },
];

// SEO
useHead({
    title: 'About Me | Ansima Elvis',
    meta: [
        { name: 'description', content: 'Senior full-stack engineer in Kigali, Rwanda. Six years building and maintaining production web products with Laravel, Vue, Nuxt, and Cloudflare.' }
    ]
})
</script>