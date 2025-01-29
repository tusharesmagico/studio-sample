import {defineField, defineType} from 'sanity'

export const supportPageSchema = defineType({
  name: 'supportPage',
  title: 'Support Page',
  type: 'document',
  fields: [

    defineField({
      name: 'section1',
      title: 'Section 1',
      type: 'object',
      fields: [
        {
          name: 'mainTitle',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'mainDescription',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'iconImage',
          type: 'image',
        },
        {
          name: 'cardTitle',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'cardDescription',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'emailAddress',
          type: 'string',
          validation: Rule => Rule.required(),
        }
      ]
    }),

    // Grievance Support Levels
    defineField({
      name: 'grievanceSupport',
      title: 'Grievance Support',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'string',
        },
        {
          name: 'subText',
          type: 'string',
        },
        {
          name: 'infoText',
          type: 'string',
        },
        {
          name: 'levels',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'level',
                type: 'number',
                validation: Rule => Rule.required(),
              },
              {
                name: 'hyperlink',
                type: 'string',
                validation: Rule => Rule.required(),
              },
              {
                name: 'email',
                type: 'string',
                validation: Rule => Rule.required(),
              },
              {
                name: 'days',
                type: 'text', // Using text instead of string for multi-line content
                validation: Rule => Rule.required(),
              }
            ]
          }],
          validation: Rule => Rule.required(),
        }
      ]
    }),

    // Section 3 Fields
    defineField({
      name: 'section3',
      title: 'Section 3',
      type: 'object',
      fields: [
        {
          name: 'nodalOfficerTitle',
          type: 'string',
          validation: Rule => Rule.required(),
        },
        {
          name: 'paymentAggregator',
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'name',
              type: 'string',
              validation: Rule => Rule.required(),
            }
          ]
        },
        {
          name: 'prepaidInstruments',
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'name',
              type: 'string',
              validation: Rule => Rule.required(),
            }
          ]
        },
        {
          name: 'email',
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'address',
              type: 'string',
              validation: Rule => Rule.required(),
            }
          ]
        },
        {
          name: 'officeAddress',
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'address',
              type: 'string',
              validation: Rule => Rule.required(),
            }
          ]
        },
        {
          name: 'infoBoxText',
          type: 'text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'reportFraud',
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'description',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'email',
              type: 'string',
              validation: Rule => Rule.required(),
            }
          ]
        }
      ]
    })
  ]
})