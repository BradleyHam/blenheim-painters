import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source) => {
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder
    .image(source)
    .auto('format')
    .fit('max')
} 