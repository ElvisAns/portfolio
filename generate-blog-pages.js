import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join,dirname } from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

// Resolve __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Step 1: Fetch meta titles and slugs from the API
function fetchMetaData(apiUrl) {
  return new Promise(async (resolve, reject) => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const metaData = await response.json();
        resolve(metaData);
      } catch (error) {
        reject({error: error.message });
      }
  });
}

// Step 2: Generate .vue files
function generateVueFiles(metaData, outputDir) {
  // Ensure the output directory exists
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  metaData.forEach(({ slug, title, description, social_image }) => {
    const filePath = join(outputDir, `${slug}.vue`);
    const vueTemplate = `
<template>
    <main v-if="article" class="max-w-[1280px] mx-auto px-[20px] mt-[40px] text-black dark:text-white">
        <div class="flex items-center gap-4 mb-12">
            <NuxtLink href="/blog" class="flex items-center gap-2">
                <UIcon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
                View all articles
            </NuxtLink>
        </div>
        <!-- Article Header -->
        <div class="mb-12">
            <div class="flex gap-2 mb-4">
                <UBadge v-for="tag in article.tags" :key="tag" color="primary" variant="soft">
                    {{ tag }}
                </UBadge>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ article.title }}</h1>
            <div class="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <span>{{ article.readable_publish_date }}</span>
                <span>{{ article.reading_time_minutes }} min read</span>
                <a :href="\`https://dev.to/elvisans/${slug}\`" target="_blank" class="flex items-center gap-1">
                    <i class="fas fa-heart text-red-500"></i>
                    {{ article.public_reactions_count }}
                </a>
            </div>
        </div>

        <!-- Cover Image -->
        <img v-if="article.cover_image" :src="article.cover_image" :alt="article.title"
            class="w-full h-[400px] object-cover rounded-xl mb-12" />

        <!-- Article Content -->
        <article class="prose dark:prose-invert prose-lg max-w-none mb-12">
            <div v-html="article.body_html"></div>
        </article>

        <!-- Share Buttons -->
        <div class="flex items-center gap-4 mb-12">
            <span class="text-sm">Share this article:</span>
            <a :href="\`https://twitter.com/intent/tweet?text=${title}&url=\${currentUrl}\`" target="_blank"
                class="text-primary-500 hover:text-primary-600">
                <i class="fab fa-twitter text-xl"></i>
            </a>
            <a :href="\`https://www.linkedin.com/sharing/share-offsite/?url=\${currentUrl}\`" target="_blank"
                class="text-primary-500 hover:text-primary-600">
                <i class="fab fa-linkedin text-xl"></i>
            </a>
        </div>
        <div class="flex items-center gap-4 mb-12 prose dark:prose-invert prose-lg">
            <p>You can like and comment this article on <a :href="\`https://dev.to/elvisans/${slug}\`"
                    target="_blank" class="text-primary-500 hover:text-primary-600">dev.to</a></p>
        </div>
    </main>

    <!-- Loading State -->
    <main v-else-if="pending" class="max-w-[1280px] mx-auto px-[20px] mt-[100px]">
        <div class="animate-pulse space-y-4">
            <div class="h-8 bg-gray-700/20 rounded w-3/4"></div>
            <div class="h-4 bg-gray-700/20 rounded w-1/4"></div>
            <div class="h-[400px] bg-gray-700/20 rounded-xl"></div>
            <div class="space-y-2">
                <div class="h-4 bg-gray-700/20 rounded w-full"></div>
                <div class="h-4 bg-gray-700/20 rounded w-5/6"></div>
                <div class="h-4 bg-gray-700/20 rounded w-4/6"></div>
            </div>
        </div>
    </main>
    <div class="flex items-center gap-4 mt-12 mb-12 w-full justify-center">
        <UButton size="xl" to="/blog"><i class="fas fa-arrow-left"></i> View all articles</UButton>
    </div>
    <InternalAds />
</template>

<script setup>
const router = useRouter()
import 'highlight.js/styles/github-dark.css' // or any other style you prefer
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import bash from 'highlight.js/lib/languages/bash'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import php from 'highlight.js/lib/languages/php'
import ruby from 'highlight.js/lib/languages/ruby'
import json from 'highlight.js/lib/languages/json'
import typescript from 'highlight.js/lib/languages/typescript'
import sql from 'highlight.js/lib/languages/sql'


const { setSeo } = useSeo()
setSeo({
    title: \`${title} | Ansima's Blog\`,
    description: \`${description}\`,
    image: \`${social_image}\`,
    type: 'article'
})

// Register the languages you want to support
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('php', php)
hljs.registerLanguage('ruby', ruby)
hljs.registerLanguage('json', json)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('sql', sql)

definePageMeta({
    middleware: ["blogs"]
})

const route = useRoute()
const article = ref(null)
const pending = ref(true)
const currentUrl = ref('')

// Function to apply syntax highlighting
const applySyntaxHighlighting = () => {
    nextTick(() => {
        document.querySelectorAll('pre').forEach((pre) => {
            pre.classList.add('code-block')

            // Extract the language from the second class name
            const language = pre.classList[1] || 'text'

            // Add as data attribute
            pre.setAttribute('data-language', language)

            // Highlight the code block
            pre.querySelectorAll('code').forEach((block) => {
                hljs.highlightElement(block)
            })
        })
    })
}

onMounted(async () => {
    try {
        const articleResponse = await fetch(\`https://dev.to/api/articles/elvisans/${slug}\`)
        article.value = await articleResponse.json()
        currentUrl.value = window.location.href
        // Apply syntax highlighting after content is loaded
        applySyntaxHighlighting()
    } catch (error) {
        console.error('Error fetching article:', error)
        navigateTo('/404')
    } finally {
        pending.value = false
    }
})

// Watch for article content changes and reapply highlighting
watch(() => article.value?.body_html, () => {
    if (article.value?.body_html) {
        applySyntaxHighlighting()
    }
})
</script>

<style>
/* Add any custom styling for the article content */
.prose img {
    @apply rounded-xl;
}

.prose pre {
    @apply rounded-xl;
}

.prose a {
    @apply text-primary-500;
}

/* Code block styling */
.code-block {
    position: relative;
    margin: 1.5em 0;
    background: #1a1a1a;
    border-radius: 0.5rem;
    overflow: hidden;
}

.copy-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
}

.copy-button:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* Highlight.js theme customization */
.hljs {
    padding: 1.5em !important;
    font-family: 'Fira Code', monospace;
    font-size: 0.9em;
    line-height: 1.5;
}

/* Now we can show just the language name */
.code-block::before {
    content: attr(data-language);
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    font-size: 0.75rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    z-index: 2;
}

/* TODO : this hack is to hide the copy button from the highlight.js panel, it should be removed when the issue is fixed */
.highlight__panel-action {
    display: none;
}

code:not(code.hljs),
.prose a {
    word-wrap: break-word;
}

code:not(code.hljs) {
    @apply bg-slate-900 p-1 rounded-md;
    color: white;
}
</style>
    `;

    // Write the .vue file
    writeFileSync(filePath, vueTemplate.trim());
    console.log(`Generated: ${filePath}`);
  });
}

// Step 3: Main function
async function main() {
  const perPage = 10; // Number of articles per page
  let page = 1; // Start from the first page
  const apiUrlBase = 'https://dev.to/api/articles?username=elvisans&per_page=';

  const outputDir = join(__dirname, 'pages/blog');
  let allMetaData = []; // Array to hold all fetched metadata

  while (true) {
    const apiUrl = `${apiUrlBase}${perPage}&page=${page}`;
    console.log(`Fetching meta data from: ${apiUrl}`);
    const metaData = await fetchMetaData(apiUrl);

    if (metaData.length === 0) {
      console.log('No more data found. Exiting.');
      break; // Exit the loop if no more data
    }

    allMetaData = allMetaData.concat(metaData); // Append new data to the array
    page++; // Move to the next page
  }

  console.log('Generating .vue files...');
  generateVueFiles(allMetaData, outputDir);

  console.log('All .vue files generated successfully.');
}

main().catch(console.error);
