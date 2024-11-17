export const useSeo = () => {
  const config = {
    title: 'Ansima - Full Stack Developer',
    description: 'I am a full stack developer and entrepreneur, I help businesses bring their ideas to life.',
    image: 'https://res.cloudinary.com/elvisansimapersic/image/upload/v1731804850/og-image-min_np6ezc.jpg',
    url: 'https://ansima.dev',
  }

  const setSeo = (overrides = {}) => {
    const seoConfig = { ...config, ...overrides }

    useSeoMeta({
      // General SEO
      title: seoConfig.title,
      description: seoConfig.description,
      
      // Open Graph / Facebook
      ogTitle: seoConfig.title,
      ogDescription: seoConfig.description,
      ogImage: seoConfig.image,
      ogUrl: seoConfig.url,
      ogType: 'website',
      
      // Twitter
      twitterTitle: seoConfig.title,
      twitterDescription: seoConfig.description,
      twitterImage: seoConfig.image,
      twitterCard: 'summary_large_image',
    })
  }

  return {
    setSeo
  }
} 