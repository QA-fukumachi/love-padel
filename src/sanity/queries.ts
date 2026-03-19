export const getBlogPostsQuery = `
  *[_type == "blogPost" && language == $locale] | order(publishDate desc) {
    title, slug, image, publishDate, excerpt,
    "author": author->name
  }
`;

export const getSingleBlogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug && language == $locale][0] {
    ...,
    "author": author->{
      name,
      "imageUrl": image.asset->url
    },
    "translatedSlug": *[_type == "blogPost" && translationKey == ^.translationKey && language != $locale][0].slug.current
  }
`;
