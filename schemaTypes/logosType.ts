import {defineField, defineType} from 'sanity'

export const logosType = defineType({
  name: 'logos',
  title: 'Logos',
  type: 'document',
  fields: [
    
    defineField({
      name: 'logos',
      type: 'array',
      of : [
        {
         type: "image"   
        }
      ]
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
