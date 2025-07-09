
import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Read the posts.json file from the file system
    const filePath = join(process.cwd(), 'app', 'blog', 'data', 'posts.json');
    const fileContents = readFileSync(filePath, 'utf8');
    const { post1, posts } = JSON.parse(fileContents);
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
