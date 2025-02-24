import {defineField, defineType} from 'sanity'

export const indexPage = defineType({
    name: 'indexPage',
    title: 'Index Page',
    type: 'document',
    fields: [
        {
            name: 'pages',
            type: 'array',
            title: 'Select Pages',
            of: [
              { 
                type: 'reference', 
                to: [{ type: 'homePage' }, { type: 'paymentGatewayPage' },{ type: 'upiPage' },{ type: 'supportPage' },{ type: 'billPayPage' },{ type: 'giftCardPage' },{ type: 'aboutus' },{ type: 'footer' }, { type: 'servicesSection' }]
              }
            ],
          },
    ]
})