import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    { title: 'English', value: 'en' },
                    { title: 'Georgian', value: 'ka' },
                ],
            },
            initialValue: 'en',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'translationKey',
            title: 'Translation Key',
            description: 'Shared UUID between EN/KA versions of the same post.',
            type: 'string',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            description: 'A short summary of the blog post to show on the blog list page.',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.max(200).warning('Longer excerpts might be truncated on the front end.'),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ]
        }),
        defineField({
            name: 'publishDate',
            title: 'Publish Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
