
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';

const postSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  category: z.enum(['Build', 'Remote Work', 'Hiring', 'Technology']),
  previewText: z.string().min(1, 'Preview text is required').max(500, 'Preview text too long'),
  longText: z.string().min(1, 'Content is required').max(10000, 'Content too long'),
  image: z.string().url('Invalid image URL'),
  authorName: z.string().min(1, 'Author name is required').max(100, 'Author name too long'),
  authorAvatarUrl: z.string().url('Invalid author avatar URL'),
});

function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - in production, use a proper library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app/blog/data/posts.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    const response = NextResponse.json(data);
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Cache-Control', 'public, max-age=3600');
    
    return response;
  } catch (error) {
    console.error('Error reading posts:', error);
    return NextResponse.json({ message: 'Error loading posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    // Validate input
    const validatedData = postSchema.parse(body);
    
    // Sanitize HTML content
    const sanitizedPost = {
      ...validatedData,
      longText: sanitizeHtml(validatedData.longText),
      previewText: sanitizeHtml(validatedData.previewText),
      title: sanitizeHtml(validatedData.title),
      authorName: sanitizeHtml(validatedData.authorName),
    };

    const filePath = path.join(process.cwd(), 'app/blog/data/posts.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    const newPost = {
      id: data.posts.length + 1,
      ...sanitizedPost,
      date: new Date().toISOString().split('T')[0],
    };
    
    data.posts.unshift(newPost);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    const response = NextResponse.json({ message: 'Post created successfully', post: newPost });
    response.headers.set('X-Content-Type-Options', 'nosniff');
    
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        message: 'Invalid input data',
        errors: error.errors 
      }, { status: 400 });
    }
    
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
