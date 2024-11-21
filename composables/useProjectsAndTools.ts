
import tiki_iot from '~/assets/images/projects/tiki_iot.png'
import vantoria from '~/assets/images/projects/vantoria_device.jpg'
import atalaku from '~/assets/images/projects/atalaku.jpg'
import school_management from '~/assets/images/projects/school_management.png'
import healthlink from '~/assets/images/projects/hl.png'
import faktshare from '~/assets/images/projects/fakt.png'
import image_magnet from '~/assets/images/projects/image-magnet.png'
import voice_powered_expense_tracker from '~/assets/images/projects/voice.png'
import chatbot from '~/assets/images/projects/chatbot.png'

type ToolAndProject = {
    title: string
    description: string
    link: string,
    shortDescription: string,
    techStack: string[],
    challenges: string[],
    date: string,
    inProgress: boolean,
    hasModal: boolean,
    image?: string,
    status?: string,
    sourceCode?: string
}

export const useProjectsAndTools = (): { tools: ToolAndProject[], projects: ToolAndProject[] } => {

    const tools: ToolAndProject[] = [
        {
            title: 'Webflow Local Bridge',
            shortDescription: 'Development tool for Webflow Developers',
            description: 'CLI tool to streamline the management of your Webflow Custom Scripts from the confort of your local development environment',
            link: 'https://webflow-local-bridge-website.vercel.app/',
            techStack: ['Webflow API', 'Express.js', 'Commander.js'],
            challenges: [
                'API integration',
                'Local development environment',
                'Synchronization with Webflow'
            ],
            date: '2024',
            inProgress: false,
            hasModal: true,
            status: 'completed',
            sourceCode: 'https://github.com/ElvisAns/webflow_local_bridge'
        },
        {
            title: 'AI Chatbot',
            shortDescription: 'Train your personal assistant and build a chatbot to talk for you',
            description: 'A customizable chatbot platform with embeddable widget support. Users can train their chatbots, deploy multiple instances, and integrate them via JavaScript. Features include customizable welcome messages, embedded answers, and prompt configuration.',
            link: 'https://ai-chatbot-demo.pages.dev/',
            techStack: ['Nuxt.js', 'Cloudflare Vectorize', 'Llama - Text Generation'],
            challenges: [
                'Implementing real-time communication',
                'Optimizing AI response times',
                'Creating a secure embedding system',
                'Building a scalable subscription model'
            ],
            date: '2024',
            inProgress: true,
            hasModal: false,
            status: 'in-progress',
            image: chatbot,
            sourceCode: 'https://github.com/ElvisAns/ai-chatbot-demo'
        },
        {
            title: 'Vue Predictive Search',
            shortDescription: 'Vue autosuggest component',
            description: 'VuePredictiveSearch is a Vue.js component that provides a simple yet powerful predictive search feature (autosuggest) for your web applications',
            link: 'https://www.npmjs.com/package/vue-predictive-search',
            techStack: ['Vue.js', 'Github Actions'],
            challenges: [
                'Optimizing search performance',
                'Implementing keyboard navigation',
                'Creating a flexible API'
            ],
            date: '2024',
            inProgress: false,
            hasModal: false,
            status: 'completed',
            sourceCode: 'https://github.com/ElvisAns/VuePredictiveSearch'
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
            image: faktshare,
            status: 'completed',
            sourceCode: 'https://github.com/ElvisAns/fakt-share'
        },
        {
            title: 'Voice Powered Expense Tracker',
            shortDescription: 'Track expenses using voice commands',
            description: 'An innovative expense tracking application that uses voice recognition to log and categorize expenses.',
            link: 'https://my-wallet-ai.vercel.app/',
            techStack: ['Nuxt.js', 'Firebase'],
            challenges: [
                'Accurate voice recognition',
                'Natural language processing',
                'Real-time processing'
            ],
            date: '2023',
            inProgress: false,
            hasModal: true,
            status: 'completed',
            image: voice_powered_expense_tracker,
            sourceCode: 'https://github.com/ElvisAns/voice-powered-expense-tracker'
        },
    ]

    const projects: ToolAndProject[] = [
        {
            title: 'HealthLink',
            shortDescription: 'QR code health bracelets',
            description: 'HealthLink is a medical bracelet with a QR code that allows healthcare professionals to quickly and securely access your information. No matter where you are, your data is protected and available when needed, especially in an emergency.',
            link: 'https://gethealth-link.com',
            techStack: ['PHP/Laravel', 'Inertia.js', 'Vuejs'],
            challenges: [
                'API integration',
                'Secure patient data',
                'User-friendly interface'
            ],
            date: '2023 - Present',
            inProgress: false,
            hasModal: true,
            image: healthlink
        },
        {
            title: 'Atalaku Xpress',
            shortDescription: 'Electronic payment system for public transport',
            description: 'For security and revenue maximization in public transport: a device equipped with an electronic card payment system. These cards can be recharged and used for paying bus fares. The Atalaku Xpress device is a compact and portable solution that can be easily integrated into existing bus fleets. The web application help users to manage their cards and transactions and it include features like peer to peer transfer, QR code payment and more...',
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
            title: 'Image Magnet',
            shortDescription: 'Tool to download images from websites',
            description: 'A web crawler that efficiently extracts images from websites, with features for filtering, organizing, and bulk downloading.',
            link: 'https://image-magnet.com',
            techStack: ['Nuxt.js', 'Containerization'],
            challenges: [
                'Implementing efficient web crawling',
                'Handling different image formats',
                'Managing concurrent downloads'
            ],
            date: '2023',
            inProgress: false,
            hasModal: false,
            status: 'completed',
            image: image_magnet
        },
        {
            title: 'Tiki IoT',
            shortDescription: 'A new Tiki Wiki Feature that help you build IoT realtime dashboard without writing code',
            description: 'IoT platform powered by Tiki Trackers, enabling real-time dashboard creation and automation without coding. Features include real-time monitoring, automated actions, and visual flow builder.',
            link: 'https://dev.tiki.org/Internet-of-Things',
            techStack: ['PHP', "JavaScript"],
            challenges: [
                'Real-time data synchronization',
                'User-friendly interface for non-technical users',
                'Scalable automation system'
            ],
            date: '2024',
            inProgress: true,
            image: tiki_iot,
            hasModal: true,
            sourceCode: 'https://gitlab.com/tikiwiki/tiki/-/merge_requests/4178'
        },
        {
            title: 'School Management System',
            shortDescription: 'Complete school management solution',
            description: 'A web application for managing student finance and attendance at schools, including payment tracking and attendance monitoring. The web app is deployed on private server for each school. You can contact me to get a demo access.',
            link: 'https://schoolmanagement.hcesinvestment.com/',
            techStack: ['PHP/CodeIgniter', 'jQuery', 'Material Design'],
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
            title: 'Vantoria Attendance',
            shortDescription: 'Smart attendance tracking system',
            description: 'Attendance system consisting of validator and a cloud server to allow attendance tracking and reporting in primary offices',
            link: 'https://web.archive.org/web/20240104161722/https://ctlcosarl.com/blog/lire/La_techonologie_de_chez_nous,_lancement_officiel_des_produits_HI-Tech_de_la_CTLCo_sarl',
            techStack: ['PHP/CodeIgniter', 'Embedded Systems'],
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
    ]

    return {
        projects,
        tools
    }
}
