import {defineField, defineType} from 'sanity'




export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      description: 'Main title of the hero banner (e.g., "Digital Payments")',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'highlightedPhrase',
      title: 'Highlighted Phrase',
      type: 'string',
      description: 'Highlighted text that appears prominently (e.g., "Anytime, Anywhere!")',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'mobileGradientLine1',
      title: 'Mobile Gradient Line 1',
      type: 'string',
      description: 'First line of gradient text for mobile view (e.g., "Anytime")',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'mobileGradientLine2',
      title: 'Mobile Gradient Line 2',
      type: 'string',
      description: 'Second line of gradient text for mobile view (e.g., "Anywhere!")',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Main descriptive text below the title',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Main hero image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for accessibility',
          validation: (rule) => rule.required()
        })
      ],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Status Section',
      type: 'object',
      fields: [
        defineField({
          name: 'visible',
          title: 'Show Status Section',
          type: 'boolean',
          initialValue: true
        }),
        defineField({
          name: 'items',
          title: 'Status Items',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({
                name: 'value',
                title: 'Values',
                type: 'string'
              }),
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string'
              })
            ]
          }]
        })
      ]
    }),
    defineField({
      name: 'qrBanner',
      title: 'Scan to Download Banner',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'string',
        },
        {
          name: 'startIndexOfGradientText',
          type: 'number',
        },
        {
          name: 'endingIndexOfGradientText',
          type: 'number',
        },
        {name: "playStoreLink",
          type: 'string'},
        {
          name: "appStoreLink",
          type: 'string'
        }
        ,
        defineField({
          name: 'qrImage',
          title: 'QR Image',
          type: 'image',
          validation: (rule) => rule.required()
        }),
      ]
    }),
    defineField({
      name: 'slider',
      title: 'Slider',
      type: 'reference',
      to: [{ type: 'slider' }],
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slider2',
      title: 'Slider 2',
      type: 'reference',
      to: [{ type: 'slider' }],
      validation: (rule) => rule.required()
    })
  ]
 
})