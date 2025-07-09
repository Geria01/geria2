import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Read the posts.json file from the file system
    const filePath = join(process.cwd(), 'app', 'blog', 'data', 'posts.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const { post1, posts } = JSON.parse(fileContents);

    const allPosts = [post1, ...posts].map(post => ({
      ...post,
      readTime: estimateReadTime(post.longText),
      featured: post.id === 7 // Mark featured post
    }));

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

function estimateReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.replace(/<[^>]*>/g, '').split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}