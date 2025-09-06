import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from a trusted source
    const authHeader = request.headers.get('Authorization')
    const secret = process.env.REVALIDATION_SECRET
    
    if (!secret) {
      console.warn('REVALIDATION_SECRET not set')
      return NextResponse.json({ error: 'Configuration error' }, { status: 500 })
    }
    
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the body to see what changed
    const body = await request.json()
    console.log('Revalidation triggered:', body)

    // Revalidate sitemap and related pages
    revalidatePath('/sitemap.xml')
    revalidatePath('/api/sitemap')
    
    // If it's a blog post change, revalidate blog pages
    if (body.type === 'blog' || body._type === 'post') {
      revalidatePath('/blog')
      if (body.slug) {
        revalidatePath(`/blog/${body.slug}`)
      }
    }
    
    // If it's a project change, revalidate project pages
    if (body.type === 'project' || body._type === 'project') {
      revalidatePath('/projects')
      if (body.slug) {
        revalidatePath(`/projects/${body.slug}`)
      }
    }

    return NextResponse.json({ 
      message: 'Sitemap revalidated successfully',
      timestamp: new Date().toISOString(),
      revalidated: true 
    })
  } catch (error) {
    console.error('Error revalidating sitemap:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Sitemap revalidation endpoint',
    usage: 'POST with Authorization header to trigger revalidation'
  })
} 