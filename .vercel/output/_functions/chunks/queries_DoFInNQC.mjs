import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: "easiiqae",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-03-08"
});
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const getBlogPostsQuery = `
  *[_type == "blogPost" && language == $locale] | order(publishDate desc) {
    title, slug, image, publishDate, excerpt,
    "author": author->name
  }
`;
const getSingleBlogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug && language == $locale][0] {
    ...,
    "author": author->{
      name,
      "imageUrl": image.asset->url
    },
    "translatedSlug": *[_type == "blogPost" && translationKey == ^.translationKey && language != $locale][0].slug.current
  }
`;

export { getBlogPostsQuery as a, getSingleBlogPostQuery as g, sanityClient as s, urlFor as u };
