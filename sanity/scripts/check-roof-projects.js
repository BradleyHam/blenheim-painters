// Import necessary dependencies
const { createClient } = require('@sanity/client')
require('dotenv').config({ path: '.env.local' })

// Initialize the Sanity client with your project details
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-10-18', // Use the current date in YYYY-MM-DD format
  useCdn: false // We need fresh data
})

// First, check all projects
async function getAllProjects() {
  const query = `*[_type == "project"] {
    _id,
    title,
    "categories": categories[]->{ title, colorClass }
  }`
  
  const result = await client.fetch(query)
  console.log('All projects:', JSON.stringify(result, null, 2))
  return result
}

// Check all categories
async function getAllCategories() {
  const query = `*[_type == "category"] {
    _id,
    title,
    colorClass
  }`
  
  const result = await client.fetch(query)
  console.log('All categories:', JSON.stringify(result, null, 2))
  return result
}

// Check specifically for roof projects with the current query
async function checkRoofProjects() {
  const query = `*[_type == "project" && title match "Roof*"] {
    _id,
    title,
    "categories": categories[]->{ title, colorClass }
  }`
  
  const result = await client.fetch(query)
  console.log('Roof projects by title:', JSON.stringify(result, null, 2))
  return result
}

// Try a simpler query
async function simplifiedRoofQuery() {
  const query = `*[_type == "project" && references(*[_type == "category" && title match "Roof*"][0]._id)] {
    _id,
    title,
    "categories": categories[]->{ title, colorClass }
  }`
  
  try {
    const result = await client.fetch(query)
    console.log('Roof projects with simplified query:', JSON.stringify(result, null, 2))
    return result
  } catch (error) {
    console.error('Error with simplified query:', error)
    return []
  }
}

// Run all checks
async function runChecks() {
  console.log('Checking for projects in Sanity database...')
  
  // Get all projects first
  const allProjects = await getAllProjects()
  console.log(`Found ${allProjects.length} total projects`)
  
  // Get all categories
  const allCategories = await getAllCategories()
  console.log(`Found ${allCategories.length} total categories`)
  
  // Check for roof projects with current query
  const roofProjects = await checkRoofProjects()
  console.log(`Found ${roofProjects.length} roof projects with current query`)
  
  // Try alternative query
  const altRoofProjects = await simplifiedRoofQuery()
  console.log(`Found ${altRoofProjects.length} roof projects with alternative query`)
}

runChecks()
  .catch(err => {
    console.error('Error running checks:', err)
    process.exit(1)
  }) 