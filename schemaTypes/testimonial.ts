import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'userName',
              title: 'User Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'voc',
              title: 'Voice of Customer',
              type: 'text',
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
      testimonialCount: 'testimonials.length'
    },
    prepare({title, subtitle, testimonialCount = 0}) {
      return {
        title: title || 'Untitled Testimonial Section',
        subtitle: `${testimonialCount} testimonials | ${subtitle || ''}`,
      }
    }
  }
})