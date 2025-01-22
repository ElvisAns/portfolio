import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrl } from '#sitemap/types'

export default defineSitemapEventHandler(async () => {
    const [devToPosts] = await Promise.all([
        $fetch<{ slug: string }[]>('https://dev.to/api/articles?username=elvisans') // a[{loc:xxxx},...]
            .then(posts => posts.map(p => ({
                loc: `/blog/${p.slug}`,
                // make sure the post ends up in the posts sitemap
                _sitemap: 'posts',
            } satisfies SitemapUrl))),
        /*$fetch<{ path: string }[]>('https://api.example.com/pages') // any other blog source eg. Medium
          .then(posts => posts.map(p => ({
            loc: p.path,
            // make sure the post ends up in the posts sitemap
            _sitemap: 'pages',
          } satisfies SitemapUrl))),
        */
    ])
    return [...devToPosts]
})
