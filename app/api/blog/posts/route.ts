
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // In a real application, this would fetch from your CMS or database
    // For now, we'll return the local data
    const postsModule = await import('../../../blog/data/posts.json');
    const { post1, posts } = postsModule.default;
    
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
