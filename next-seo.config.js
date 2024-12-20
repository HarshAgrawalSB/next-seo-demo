const seoConfig = {
    // The default title for your site.
    title: "NextJs Seo Practise",
    // A template for the title, allowing you to add a suffix or prefix.
    titleTemplate: "%s | My Website",
    // The default title for pages that don't specify their own title.
    defaultTitle: "NextJs Seo Practise",
    // The default description for your site.
    description: "Best practises for seo optimisation in nextjs",
    // Open Graph settings for better social media integration.
    openGraph: {
        // The type of content (e.g., website, article).
        type: 'website',
        // The locale of your content.
        locale: 'en_US',
        // The canonical URL of your site.
        url: '<https://www.mywebsite.com/>',
        // The name of your site.
        site_name: 'My Website',
        // The default title for Open Graph.
        title: 'My Website',
        // The default description for Open Graph.
        description: 'This is the default description of my website.',
        // Images that will be used when your content is shared.
        images: [
            {
                url: '<https://www.mywebsite.com/og-image.jpg>',
                width: 1200,
                height: 630,
                alt: 'Og Image Alt',
            },
        ],
    }
}