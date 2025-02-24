import {defineField, defineType} from 'sanity'

export const sliderType = defineType({
  name: 'slider',
  title: 'Slider',
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
      name: 'sliderItems',
      title: 'Slider Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (rule) => rule.required(),
            }),
            
            defineField({
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subText',
              title: 'Sub Text',
              type: 'string',
            
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ]
        }
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'sliderItems.0.image'
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Slider',
        subtitle: subtitle || '',
        media,
      }
    }
  }
})