export default defineNuxtRouteMiddleware(async (to, from) => {
    if (import.meta.server) {
        const { path } = to;
        const sitemap = await $fetch("/sitemap.xml");
        if(!sitemap.includes(path)){
            return navigateTo("/404"); // Use actual 404 page path
         }
         return;
    }
})
