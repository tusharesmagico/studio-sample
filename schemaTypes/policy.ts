import {defineField, defineType} from 'sanity'

export const redressalMechanismType = defineType({
  name: 'redressalMechanism',
  title: 'Redressal Mechanism',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string'
          }),
          defineField({
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{ type: 'string' }]
          })
        ]
      }]
    }),
    defineField({
      name: 'tableData1',
      title: 'Has Table Data',
      type: 'boolean',
      initialValue: true
    }),
    // defineField({
    //   name: 'tableData',
    //   title: 'Table Data',
    //   type: 'array',
    //   of: [{
    //     type: 'array',
    //     of: [{
    //       type: 'object',
    //       fields: [
    //         defineField({
    //           name: 'columns',
    //           title: 'Column Data',
    //           type: 'array',
    //           of: [{
    //             type: 'object',
    //             fields: [
    //               defineField({
    //                 name: 'key',
    //                 title: 'Column Key',
    //                 type: 'string'
    //               }),
    //               defineField({
    //                 name: 'value',
    //                 title: 'Column Value',
    //                 type: 'string'
    //               })
    //             ]
    //           }]
    //         }),
    //         defineField({
    //           name: 'colSpan',
    //           title: 'Column Spans',
    //           type: 'object',
    //           fields: [
    //             defineField({
    //               name: 'spans',
    //               title: 'Column Spans',
    //               type: 'array',
    //               of: [{
    //                 type: 'object',
    //                 fields: [
    //                   defineField({
    //                     name: 'key',
    //                     title: 'Column Key',
    //                     type: 'string'
    //                   }),
    //                   defineField({
    //                     name: 'span',
    //                     title: 'Span Value',
    //                     type: 'number'
    //                   })
    //                 ]
    //               }]
    //             })
    //           ]
    //         })
    //       ]
    //     }]
    //   }]
    // })
  ]
})