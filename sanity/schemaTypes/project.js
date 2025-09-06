export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Project',
      description: 'Set as featured project on the projects page',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Interior', value: 'interior' },
          { title: 'Exterior', value: 'exterior' },
          { title: 'Both Interior & Exterior', value: 'both' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required(),
      description: 'Specify whether this is an interior or exterior project'
    },
    {
      name: 'date',
      title: 'Completion Date',
      type: 'string',
      description: 'e.g. "March 2025"'
    },
    {
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
      description: 'e.g. "3 weeks"'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Queenstown"'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      rows: 4
    },
    {
      name: 'solution',
      title: 'Our Solution',
      type: 'blockContent',
    },
    {
      name: 'results',
      title: 'The Results',
      type: 'blockContent',
    },
    {
      name: 'highlights',
      title: 'Project Highlights',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'materials',
      title: 'Materials Used',
      type: 'blockContent'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      description: 'Primary image used on project card and hero section',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'beforeImages',
      title: 'Before Images',
      description: 'Images showing the project before work was completed',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image'
            }
          }
        }
      ]
    },
    {
      name: 'afterImages',
      title: 'After Images',
      description: 'Images showing the completed project',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image'
            }
          }
        }
      ]
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 3
        },
        {
          name: 'author',
          title: 'Author',
          type: 'string'
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string'
        }
      ]
    },
    {
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }]
        }
      ],
      validation: Rule => Rule.unique()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
} 