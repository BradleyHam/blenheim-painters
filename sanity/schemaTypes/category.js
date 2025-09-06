export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'colorClass',
      title: 'Badge Color Class',
      description: 'Tailwind CSS class for badge color (e.g., "bg-navy" or "bg-gold")',
      type: 'string',
      options: {
        list: [
          { title: 'Navy', value: 'bg-navy hover:bg-navy-light text-white' },
          { title: 'Gold', value: 'bg-gold hover:bg-gold-dark text-white' }
        ]
      },
      initialValue: 'bg-navy hover:bg-navy-light text-white'
    }
  ]
} 