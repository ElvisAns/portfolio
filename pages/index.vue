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
                    <a class="text-lg" href="https://drive.google.com/file/d/1sXzWSib5oYmb8QLQCY8-TGTXYO8doXGl/view?usp=sharing"
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[100px] md:gap-8">
            <!-- Projects Section -->
            <div>
                <h2 class="text-3xl font-bold text-left mb-6">Projects</h2>
                <div class="grid gap-4">
                    <UCard v-for="project in projects" :key="project.title"
                        class="group relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/20">
                        <template #header>
                            <div class="flex justify-between items-center">
                                <h3 class="text-xl font-semibold">{{ project.title }} <span
                                        class="text-primary-500 text-7xl">.</span> {{ project.date }}</h3>
                                <i
                                    class="fas fa-expand text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </div>
                        </template>
                        <p class="text-sm text-gray-400">{{ project.shortDescription }}</p>

                        <!-- Hover Overlay -->
                        <div role="button" aria-label="View Details"
                            @click="hasModal ? openModal(project) : window.open(project.link, '_blank')"
                            class="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <span v-if="project.hasModal"
                                class="bg-black/80 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                                <i class="fas fa-search text-xs"></i>
                                View Details
                            </span>
                            <a v-else :href="project.link" target="_blank"
                                class="bg-black/80 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                                <i class="fas fa-external-link-alt text-xs"></i>
                                View Live
                            </a>
                        </div>
                    </UCard>
                </div>
            </div>

            <!-- Tools Section -->
            <div>
                <h2 class="text-3xl font-bold text-left mb-6">Tools I have built</h2>
                <div class="grid gap-4">
                    <UCard v-for="tool in tools" :key="tool.title"
                        class="group relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/20">
                        <template #header>
                            <div class="flex justify-between items-center">
                                <h3 class="text-xl font-semibold">{{ tool.title }} <span
                                        class="text-primary-500 text-7xl">.</span> {{ tool.date }}</h3>
                                <i
                                    class="fas fa-expand text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </div>
                        </template>
                        <p class="text-sm text-gray-400">{{ tool.shortDescription }}</p>

                        <!-- Hover Overlay -->
                        <div role="button" aria-label="View Details"
                            @click="tool.hasModal ? openModal(tool) : window.open(tool.link, '_blank')"
                            class="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <span v-if="tool.hasModal"
                                class="bg-black/80 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                                <i class="fas fa-search text-xs"></i>
                                View Details
                            </span>
                            <a v-else :href="tool.link" target="_blank"
                                class="bg-black/80 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                                <i class="fas fa-external-link-alt text-xs"></i>
                                View Live
                            </a>
                        </div>
                    </UCard>
                </div>
            </div>

            <!-- Modal -->
            <UModal v-model="isModalOpen" :ui="{ width: 'max-w-3xl' }">
                <UCard v-if="selectedItem">
                    <template #header>
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-bold">{{ selectedItem.title }}</h3>
                            <UButton icon="i-lucide-external-link" variant="ghost" :to="selectedItem.link"
                                target="_blank" v-if="selectedItem.link" />
                        </div>
                    </template>

                    <div class="space-y-12">
                        <!-- Project/Tool Image -->
                        <img v-if="selectedItem.image" :src="selectedItem.image" :alt="selectedItem.title"
                            class="w-full rounded-lg" />
                        <!-- Description -->
                        <div>
                            <h4 class="font-semibold mb-2">Description</h4>
                            <p class="desc-p" v-html="selectedItem.description"></p>
                        </div>

                        <!-- Tech Stack -->
                        <div v-if="selectedItem.techStack">
                            <h4 class="font-semibold mb-2">Tech Stack</h4>
                            <div class="flex flex-wrap gap-2">
                                <UBadge v-for="tech in selectedItem.techStack" :key="tech" color="primary">
                                    {{ tech }}
                                </UBadge>
                            </div>
                        </div>

                        <!-- Challenges -->
                        <!--<div v-if="selectedItem.challenges" class="max-h-[30vh]">
                            <h4 class="font-semibold mb-2">Challenges & Solutions</h4>
                            <ul class="list-disc list-inside space-y-2">
                                <li v-for="challenge in selectedItem.challenges" :key="challenge">
                                    {{ challenge }}
                                </li>
                            </ul>
                        </div>-->
                        <div class="flex justify-end">
                            <a v-if="selectedItem.link" :href="selectedItem.link" target="_blank" class="w-full">
                                View more details <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </UCard>
            </UModal>
        </div>
    </main>
</template>

<script setup>
import kvoltslab from '~/assets/images/brands/kvoltslab.png'
import outliant from '~/assets/images/brands/outliant.jpg'
import blend360 from '~/assets/images/brands/blend360_logo.jpg'
import evoludata from '~/assets/images/brands/evoludata.png'
import myidealdental from '~/assets/images/brands/myidealdental.png'
import greenrack from '~/assets/images/brands/green_rack_solar_contracting_logo.jpg'
import premierpharma from '~/assets/images/brands/premier_pharma.svg'
import apollo from '~/assets/images/brands/appollo.webp'
import ctlco from '~/assets/images/brands/ctlcosarl.png'
import groupsupra from '~/assets/images/brands/group_supra.png'

import tiki_iot from '~/assets/images/projects/tiki_iot.png'
import vantoria from '~/assets/images/projects/vantoria_device.jpg'
import atalaku from '~/assets/images/projects/atalaku.jpg'
import school_management from '~/assets/images/projects/school_management.png'
import healthlink from '~/assets/images/projects/hl.png'
import faktshare from '~/assets/images/projects/fakt.png'

const { setSeo } = useSeo()
setSeo({
    title: 'Home | Ansima - Full Stack Developer',
})

const brands = [
    {
        name: 'Kilo Volts Lab',
        url: 'https://kvolts-lab.com',
        image: kvoltslab,
        whiteBg: false
    },
    {
        name: 'Outliant',
        url: 'https://outliant.com',
        image: outliant,
        whiteBg: false
    },
    {
        name: 'Blend360',
        url: 'https://blend360.com',
        image: blend360,
        whiteBg: false
    },
    {
        name: 'Evoludata',
        url: 'https://evoludata.com',
        image: evoludata,
        whiteBg: false
    },
    {
        name: 'My Ideal Dental',
        url: 'https://myidealdental.com',
        image: myidealdental,
        whiteBg: false
    },
    {
        name: 'Green Rack Solar Contracting',
        url: 'https://greenracksolar.com/',
        image: greenrack,
        whiteBg: false
    },
    {
        name: 'Premier Pharma',
        url: 'https://www.premierpharma.com/',
        image: premierpharma,
        whiteBg: true
    },
    {
        name: 'Apollo Theater',
        url: 'https://www.apollotheater.org/',
        image: apollo,
        whiteBg: true
    },
    {
        name: 'Ctlco',
        url: 'https://web.archive.org/web/20240104161504/https://ctlcosarl.com/',
        image: ctlco,
        whiteBg: true
    },
    {
        name: "Group Supra",
        url: "https://groupesupra.com",
        image: groupsupra,
        whiteBg: false
    }
]

const isModalOpen = ref(false)
const selectedItem = ref(null)

const tools = [
    {
        title: 'AI Chatbot',
        shortDescription: 'Train your personal assistant and build a chatbot to talk for you',
        description: 'A customizable chatbot platform with embeddable widget support. Users can train their chatbots, deploy multiple instances, and integrate them via JavaScript. Features include customizable welcome messages, embedded answers, and prompt configuration.',
        link: 'https://github.com/ElvisAns/ai-chatbot-demo',
        techStack: ['Nuxt.js', 'Cloudflare AI'],
        challenges: [
            'Implementing real-time communication',
            'Optimizing AI response times',
            'Creating a secure embedding system',
            'Building a scalable subscription model'
        ],
        date: '2024',
        inProgress: true,
        hasModal: false
    },
    {
        title: 'Image Magnet',
        shortDescription: 'Extract images from websites efficiently',
        description: 'A web crawler that efficiently extracts images from websites, with features for filtering, organizing, and bulk downloading.',
        link: 'https://image-magnet.com',
        techStack: ['Node.js', 'Web Scraping', 'Image Processing'],
        challenges: [
            'Implementing efficient web crawling',
            'Handling different image formats',
            'Managing concurrent downloads'
        ],
        date: '2023',
        inProgress: false,
        hasModal: false
    },
    {
        title: 'Vue Predictive Search',
        shortDescription: 'Smart search component for Vue applications',
        description: 'A Vue.js component that provides predictive search functionality with customizable suggestions and keyboard navigation.',
        link: 'https://www.npmjs.com/package/vue-predictive-search',
        techStack: ['Vue.js', 'Github Actions'],
        challenges: [
            'Optimizing search performance',
            'Implementing keyboard navigation',
            'Creating a flexible API'
        ],
        date: '2024',
        inProgress: false,
        hasModal: false
    },
    {
        title: 'Fakt Share',
        shortDescription: 'Fakt share is a social learning platform',
        description: 'FaktShare is a social learning platform that combines the fun of sharing facts with the convenience of a social media interface. Users can discover, share and interact with snippets of knowledge across multiple categories, making learning engaging and accessible. Learn more about it <a href="https://ai.google.dev/competition/projects/fakt-share" target="_blank">https://ai.google.dev/competition/projects/fakt-share</a>',
        link: 'https://fakt-share.vercel.app/',
        techStack: ['Nuxt.js', 'Vercel', 'Gemini API', "Firebase"],
        challenges: [
            'Building a social learning platform',
            'Integrating AI models',
            'Building a scalable system'
        ],
        date: '2024',
        inProgress: false,
        hasModal: true,
        image: faktshare
    },
    {
        title: 'Voice Powered Expense Tracker',
        shortDescription: 'Track expenses using voice commands',
        description: 'An innovative expense tracking application that uses voice recognition to log and categorize expenses.',
        link: 'https://github.com/ElvisAns/voice-powered-expense-tracker',
        techStack: ['Nuxt.js', 'Firebase'],
        challenges: [
            'Accurate voice recognition',
            'Natural language processing',
            'Real-time processing'
        ],
        date: '2023',
        inProgress: false,
        hasModal: true
    },
]

const projects = [
    {
        title: 'Tiki IoT',
        shortDescription: 'Build IoT realtime dashboard without writing code',
        description: 'IoT platform powered by Tiki Trackers, enabling real-time dashboard creation and automation without coding. Features include real-time monitoring, automated actions, and visual flow builder. Use cases : <a href="https://dev.tiki.org/Internet-of-Things" target="_blank">https://dev.tiki.org/Internet-of-Things</a>',
        link: 'https://gitlab.com/tikiwiki/tiki/-/merge_requests/4178',
        techStack: ['PHP', "JavaScript"],
        challenges: [
            'Real-time data synchronization',
            'User-friendly interface for non-technical users',
            'Scalable automation system'
        ],
        date: '2024',
        inProgress: true,
        image: tiki_iot,
        hasModal: true
    },
    {
        title: 'School Management System',
        shortDescription: 'Complete school management solution',
        description: 'Comprehensive system for managing student finance and attendance at schools, including payment tracking and attendance monitoring.',
        link: 'https://schoolmanagement.hcesinvestment.com/',
        techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        challenges: [
            'Complex financial calculations',
            'Real-time attendance tracking',
            'Multi-user access control'
        ],
        date: '2021',
        inProgress: false,
        hasModal: true,
        image: school_management
    },
    {
        title: 'Atalaku Xpress',
        shortDescription: 'Electronic payment system for public transport',
        description: 'Security and revenue maximization solution for public transport with electronic card payment system, supporting multiple payment methods including mobile money.',
        link: 'https://web.archive.org/web/20240104161722/https://ctlcosarl.com/blog/lire/La_techonologie_de_chez_nous,_lancement_officiel_des_produits_HI-Tech_de_la_CTLCo_sarl',
        techStack: ['PHP/CodeIgniter', 'API Integration', 'Embedded Systems'],
        challenges: [
            'Secure payment processing',
            'API integration',
            "Embedded system setup and integration"
        ],
        date: '2022',
        inProgress: false,
        hasModal: true,
        image: atalaku
    },
    {
        title: 'Vantoria Attendance',
        shortDescription: 'Smart attendance tracking system',
        description: 'Attendance system consisting of validator and a cloud server to allow attendance tracking and reporting in primary offices',
        link: 'https://web.archive.org/web/20240104161722/https://ctlcosarl.com/blog/lire/La_techonologie_de_chez_nous,_lancement_officiel_des_produits_HI-Tech_de_la_CTLCo_sarl',
        techStack: ['Arduino', 'PHP/CodeIgniter', 'SMS Integration'],
        challenges: [
            'Fingerprint reader integration',
            'System with no allowed downtime',
            'Automated reporting system'
        ],
        date: '2021',
        inProgress: false,
        hasModal: true,
        image: vantoria
    },
    {
        title: 'HealthLink',
        shortDescription: 'QR code health bracelets',
        description: 'Quick access to patient information using QR code bracelets',
        link: 'https://gethealth-link.com',
        techStack: ['PHP/Laravel', 'Inertia.js', 'Vuejs'],
        date: '2023 - Present',
        inProgress: false,
        hasModal: true,
        image: healthlink
    },
    {
        title: 'Webflow Local Bridge',
        shortDescription: 'Development tool for Webflow',
        description: 'Coding tool designed specifically for Webflow developers to enhance development workflow.',
        link: 'https://webflow-local-bridge-website.vercel.app/',
        techStack: ['Webflow API', 'Development Tools', 'Web Technologies'],
        challenges: [
            'API integration',
            'Local development environment',
            'Synchronization with Webflow'
        ],
        date: '2024',
        inProgress: false,
        hasModal: true
    }
]

const openModal = (item) => {
    selectedItem.value = item
    isModalOpen.value = true
}
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