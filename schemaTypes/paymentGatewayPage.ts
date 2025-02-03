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
    {name: "subText", type:'string'}
    
      ,
      defineField({
        name: 'heroImage', 
        title: 'Hero Image',
        type: 'image',
        validation: (rule) => rule.required()
      }),
    ]
  }),
  defineField({name: "brandsWeServe",
    title:"Brands We Serve"
    ,type:"object", 
  fields:[
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    
    }),
    defineField({
      name: 'subText',
      title: 'SubText',
      type: 'string',
    
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'reference',
      to:[{type:"logos"}]
    })
  ]
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