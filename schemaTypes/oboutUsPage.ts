import {defineField, defineType} from 'sanity'

export const aboutUsPage = defineType({
  name: 'aboutus',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'firstParagraph',
      title: 'First Paragraph',
      type: 'text',
      rows: 3,
      description: 'Introduction paragraph for the About Us page',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondParagraph',
      title: 'Second Paragraph',
      type: 'text',
      rows: 3,
      description: 'Additional information paragraph',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'image',
            title: 'Member Image',
            type: 'image',
            options: {
              hotspot: true
            },
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'designation',
            title: 'Designation',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
          }),
          defineField({
            name: 'linkedin',
            title: 'LinkedIn Profile URL',
            type: 'url',
            validation: (rule) => rule.required(),
          })
        ]
      }]
    }),
    defineField({
      name: 'locations',
      title: 'Office Locations',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'name',
            title: 'Location Name',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'image',
            title: 'Location Image',
            type: 'image',
            options: {
              hotspot: true
            },
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'gradient',
            title: 'Gradient Style',
            type: 'string',
            options: {
              list: [
                { title: 'Mumbai', value: 'findUsCardMumbai' },
                { title: 'Bangalore', value: 'findUsCardBanglore' },
                { title: 'Delhi', value: 'findUsCardDelhi' }
              ]
            },
            validation: (rule) => rule.required(),
          })
        ]
      }]
    })
  ]
})