import { NextResponse } from 'next/server';

// Import the posts data directly
import postsData from '../../../blog/data/posts.json';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { post1, posts } = postsData;
    const allPosts = [post1, ...posts];

    const post = allPosts.find(p => p.id === Number(params.id));

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const postWithReadTime = {
      ...post,
      readTime: estimateReadTime(post.longText)
    };

    const relatedPosts = allPosts
      .filter(p => p.id !== post.id && p.category === post.category)
      .slice(0, 3)
      .map(p => ({ ...p, readTime: estimateReadTime(p.longText) }));

    return NextResponse.json({
      post: postWithReadTime,
      relatedPosts
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

function estimateReadTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.replace(/<[^>]*>/g, '').split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}