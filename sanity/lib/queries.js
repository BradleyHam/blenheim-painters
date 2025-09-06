export const allProjectsQuery = `*[_type == "project"] | order(date desc) {
  _id,
  title,
  slug,
  date,
  duration,
  location,
  description,
  mainImage,
  projectType,
  "categories": categories[]->{ title, colorClass }
}`

export const featuredProjectQuery = `*[_type == "project" && featured == true][0] {
  _id,
  title,
  slug,
  date,
  duration,
  location,
  description,
  highlights,
  mainImage,
  projectType,
  "categories": categories[]->{ title, colorClass }
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  date,
  duration,
  location,
  description,
  challenge,
  projectType,
  "solution": solution[] {
    ...,
    _type == "block" => {
      ...,
      "children": children[] {
        ...,
        _type == "span" => {
          ...,
          "text": text
        }
      }
    }
  },
  results,
  tags,
  highlights,
  materials,
  testimonial,
  mainImage,
  beforeImages[] {
    "src": image.asset->url,
    alt,
    caption
  },
  afterImages[] {
    "src": image.asset->url,
    alt,
    caption
  },
  "categories": categories[]->{ title, colorClass },
  "relatedProjects": relatedProjects[]->{ 
    title, 
    slug,
    "image": mainImage.asset->url
  }
}`

export const projectPathsQuery = `*[_type == "project" && defined(slug.current)][].slug.current`

// New queries for filtering by project type
export const interiorProjectsQuery = `*[_type == "project" && (projectType == "interior" || projectType == "both")] | order(date desc)[0...3] {
  _id,
  title,
  slug,
  date,
  location,
  description,
  mainImage,
  projectType,
  "categories": categories[]->{ title, colorClass }
}`

export const exteriorProjectsQuery = `*[_type == "project" && (projectType == "exterior" || projectType == "both")] | order(date desc)[0...3] {
  _id,
  title,
  slug,
  date,
  location,
  description,
  mainImage,
  projectType,
  "categories": categories[]->{ title, colorClass }
}`

export const roofProjectsQuery = `*[_type == "project" && title match "Roof*"] | order(date desc)[0...3] {
  _id,
  title,
  slug,
  date,
  location,
  description,
  mainImage,
  projectType,
  "categories": categories[]->{ title, colorClass }
}`

export const recentProjectsQuery = `*[_type == "project"] | order(date desc)[0...3] {
  _id,
  title,
  slug,
  date,
  location,
  description,
  mainImage,
  projectType,
  "categories": categories[]->{ title, colorClass }
}` 