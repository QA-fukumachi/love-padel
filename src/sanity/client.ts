import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'your_project_id',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
    return builder.image(source);
}
