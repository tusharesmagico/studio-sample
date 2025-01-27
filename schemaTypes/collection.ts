import {defineField, defineType} from 'sanity'

export const collectionType = defineType({
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'posts',
        title: 'Posts',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'post' }],
          }
        ],
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'publishedAt',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        validation: (rule) => rule.required(),
      }),
    ],
  })