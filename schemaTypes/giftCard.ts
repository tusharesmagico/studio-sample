import {defineField, defineType} from 'sanity'

export const giftCardPage = defineType({
    name: 'giftCardPage',
  title: 'Gift Card Page',
  type: 'document',
  fields:[ defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'heroBanner',
    title: 'Hero Banner',
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
      {
        name: 'text2',
        type: 'string',
      },
      {
        name: 'startIndexOfGradientText2',
        type: 'number',
      },
      {
        name: 'endingIndexOfGradientText2',
        type: 'number',
      },
    {name: "subText", type:'string'},
    {
      name: "experienceOnTataNeuButtonLink",
      type: 'string'
    }
      ,
      defineField({
        name: 'heroImage', 
        title: 'Hero Image',
        type: 'image',
        validation: (rule) => rule.required()
      }),
    ]
  }),
  defineField({
    name: 'services',
    title: 'Services',
    type: 'reference',
    to: [{ type: 'servicesSection' }],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'logos',
    title: 'Brand Logos',
    type: 'reference',
    to: [{ type: 'logos' }],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'bestInClass',
    title: 'BEST IN CLASS',
    type: 'reference',
    to: [{ type: 'infoCards' }],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'slider',
    title: 'Slider',
    type: 'reference',
    to: [{ type: 'slider' }],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'steps',
    title: 'Steps to pay',
    type: 'reference',
    to: [{ type: 'steps' }],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'slider2',
    title: 'Slider 2',
    type: 'reference',
    to: [{ type: 'slider' }],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'testimonial',
    title: 'Testimonials',
    type: 'reference',
    to: [{ type: 'testimonial' }],
    validation: (rule) => rule.required(),
  })
  ,
  defineField({
    name: 'faq',
    title: 'FAQ',
    type: 'reference',
    to: [{ type: 'faq' }],
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'slug',
    type: 'slug',
    options: {source: 'title'},
    validation: (rule) => rule.required(),
  }),
]
})