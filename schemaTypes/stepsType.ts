import {defineField, defineType, SanityDocument} from 'sanity'

// Define the step interface
interface Step {
  stepNumber: number
  title: string
  description: string
  image: any // You can use a more specific Sanity image type if available
  girlImage: any
}

// Define the document interface extending SanityDocument
interface StepsDocument extends SanityDocument {
  steps?: Step[]  // Make steps optional since it might not exist on the document
}

export const stepsType = defineType({
  name: 'steps',
  title: 'Steps',
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
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Step Icon/Image',
              type: 'image',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'girlImage',
              title: 'Girl Image',
              type: 'image',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            
            }),
            defineField({
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
              validation: (rule) => 
                rule.required()
                    .integer()
                    .min(1)
                    .custom(async (stepNumber, context) => {
                      const doc = context.document as StepsDocument
                      if (!doc?.steps) return true
                      
                      const stepsWithSameNumber = doc.steps.filter(
                        (step: Step) => step?.stepNumber === stepNumber
                      )
                      if (stepsWithSameNumber.length > 1) {
                        return 'Step number must be unique'
                      }
                      return true
                    })
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
  orderings: [
    {
      title: 'Step Number',
      name: 'stepNumberAsc',
      by: [
        {field: 'steps[].stepNumber', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      stepCount: 'steps.length'
    },
    prepare({title, subtitle, stepCount = 0}) {
      return {
        title: title || 'Untitled Steps Section',
        subtitle: `${stepCount} steps | ${subtitle || ''}`,
      }
    }
  }
})