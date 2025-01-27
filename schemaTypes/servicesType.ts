import {defineField, defineType} from 'sanity'

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Main Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Sub Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Service Name',
            type: 'string',
            validation: (rule) => rule.required(),
          },
          {
            name: 'icon',
            title: 'Service Icon',
            type: 'image',
            validation: (rule) => rule.required(),
            options: {
              hotspot: true,
            },
          },
          {
            name: 'displayOrder',
            title: 'Display Order',
            type: 'number',
          },
        ],
        preview: {
          select: {
            title: 'name',
            media: 'icon',
          },
        },
      }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})