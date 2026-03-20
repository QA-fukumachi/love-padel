import { sanityClient } from "../sanity/client";

export const GET = async () => {
    // Query Sanity for all blog posts, selecting only the necessary fields
    const query = `*[_type == "blogPost"] { "slug": slug.current, language, _updatedAt }`;
    const posts = await sanityClient.fetch(query);

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${posts
      .map(
          (post: any) => `
  <url>
    <loc>https://lovepadel.ge/${post.language}/blog/${post.slug}</loc>
    <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>
  </url>`
      )
      .join("")}
</urlset>`;

    // Return the generated XML
    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            // Cache control to help with performance
            "Cache-Control": "public, max-age=600, s-maxage=600"
        },
    });
};
