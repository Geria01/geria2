import { NextResponse } from 'next/server';

// Import the posts data directly
import postsData from '../../blog/data/posts.json';

export async function GET() {
  try {
    const { post1, posts } = postsData;

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