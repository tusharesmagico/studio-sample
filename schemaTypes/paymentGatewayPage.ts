import {defineField, defineType} from 'sanity'

export const paymentGatewayPage = defineType({
    name: 'paymentGatewayPage',
  title: 'Payment Gateway Page',
  type: 'document',
  fields:[ defineField({
    name: 'title',
    title: 'Title',
    type: 'string',
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