<template>
    <main class="max-w-[1280px] mx-auto px-[20px] mt-[50px] text-black dark:text-white">
        <!-- Hero Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <h1 class="text-4xl md:text-5xl font-bold mb-6">
                    I'm that fullstack guy, tech guru and entrepreneur to become
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300">
                    Since that day I smelled tech things, I have never been the same every single day
                </p>
                <UButton class="mt-4" to="https://calendly.com/ansimapersic/30min" target="_blank" size="lg">
                    <UIcon name="i-heroicons-calendar-days" class="w-4 h-4 mr-2" />
                    Book a discovery call
                </UButton>
            </div>
            <div class="relative">
                <img src="~/assets/images/me.jpg" alt="Elvis at work" class="rounded-2xl shadow-xl w-full h-auto" />
                <!-- Decorative elements -->
                <div class="absolute -right-4 bg-primary-500/20 w-[100%] h-full rounded-2xl -z-10 bottom-6"></div>
            </div>
        </div>

        <!-- Introduction -->
        <div class="prose dark:prose-invert max-w-none mb-20">
            <p class="text-xl leading-relaxed mb-6">
                Hi! I'm Ansima, a software engineer and entrepreneur. I've built my career at the
                intersection of web development and hardware, and I'm passionate about creating tech solutions
                that have real-world impact.
            </p>
            <p class="text-xl leading-relaxed mb-6">
                Currently, I'm working with <a href="https://outliant.com" target="_blank"
                    class="text-primary-500 hover:underline">Outliant</a>, an agency where we help businesses grow
                through marketing and web development.
                and I am also a core contributor at
                <a href="https://openhub.net/accounts/ElvisAns" target="_blank"
                    class="text-primary-500 hover:underline">
                    TikiCMS groupware
                </a>,
                an opensource PHP based Content Managed System.
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
                <div class="dark:bg-gray-900/50 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-bullseye text-primary-500 text-2xl mb-4"></i>
                    <h3 class="text-xl font-semibold mb-3">Value-Driven Development</h3>
                    <p class="text-gray-400">
                        Pay attention to the delivered value no biased preference
                    </p>
                </div>
                <div class="dark:bg-gray-900/50 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-rocket text-primary-500 text-2xl mb-4"></i>
                    <h3 class="text-xl font-semibold mb-3">Practical Solutions</h3>
                    <p class="text-gray-400">
                        Clients and users need a working product, no complicated stack
                    </p>
                </div>
                <div class="dark:bg-gray-900/50 bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                    <i class="fas fa-expand-arrows-alt text-primary-500 text-2xl mb-4"></i>
                    <h3 class="text-xl font-semibold mb-3">Scalable Architecture</h3>
                    <p class="text-gray-400">
                        Build with scalability in mind, a side project can become hard to manage
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
        description: 'Started with C & Arduino, building embedded systems on PIC'
    },
    {
        year: '2017',
        title: 'Web Development Journey',
        description: 'Learned HTML, CSS & PHP. Completed my first website project, followed by 4 more clients'
    },
    {
        year: '2018',
        title: 'First Major Project',
        description: 'Built an attendance system combining web development and Arduino skills'
    },
    {
        year: '2019',
        title: 'Professional Career Begins',
        description: 'First enterprise project: Vantoria, which helped CTLCO generate revenue in 2021 and later we started Atalaku Xpress'
    },
    {
        year: '2021',
        title: 'Entrepreneurial Venture',
        description: 'Started Kilo volt lab, a startup aimed at solving African problems with tech'
    },
    {
        year: '2022',
        title: 'International Collaboration',
        description: 'Joined Tiki project, first experience working with an international team'
    },
    {
        year: '2023',
        title: 'Career Growth',
        description: 'Joined Outliant as a full-time employee'
    },
    {
        year: '2024',
        title: 'Continuing the Journey',
        description: 'Excited and happy being with Outliant, looking forward to new challenges'
    }
]

// SEO
useHead({
    title: 'About Me | Ansima Elvis',
    meta: [
        { name: 'description', content: 'Software engineer and entrepreneur, specializing in web development and IoT solutions.' }
    ]
})
</script>