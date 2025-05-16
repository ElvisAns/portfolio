<template>
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm border border-blue-100 my-4 max-w-3xl mx-auto mb-12">
    <div class="flex items-center justify-between">
      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-blue-900">
          {{ title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ description }}
        </p>
        <div class="flex gap-2 mt-3">
          <a 
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            {{ buttonText }}
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
      <div class="hidden md:block">
        <UIcon name="i-heroicons-briefcase" class="w-16 h-16 text-blue-500 opacity-80" />
      </div>
    </div>
    <div class="mt-3 text-xs text-gray-500">
      {{ smallDescription }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  placement: {
    type: String,
    default: 'content'
  },
  title: {
    type: String,
    default: 'Are you a job seeker? 🎯'
  },
  description: {
    type: String,
    default: 'Find remote programming jobs, get AI-powered cover letters, and track your applications - all in one place!'
  },
  buttonText: {
    type: String,
    default: 'Explore Jobs'
  },
  link: {
    type: String,
    default: 'https://awesome-careers.com'
  },
  smallDescription: {
    type: String,
    default: 'AI cover letter writer • Daily updates • Remote jobs'
  }
})
</script> 
