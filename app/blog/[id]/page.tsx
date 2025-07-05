'use client';

import Link from 'next/link';
import Image from 'next/image';
import postsJson from "../posts.json";
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  image: string;
  previewText: string;
  longText: string;
  date: string;
  authorName: string;
  authorAvatarUrl: string;
}

function ShareButton({ platform, url, title }: { platform: string; url: string; title: string }) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
  };

  const handleShare = () => {
    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const icons = {
    twitter: '𝕏',
    facebook: '📘',
    linkedin: '💼',
    whatsapp: '📱',
    email: '✉️'
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 bg-[#FAFAFA] hover:bg-[#FFD700] rounded-lg transition-colors border border-[#4B4B4B]/20"
    >
      <span>{icons[platform as keyof typeof icons]}</span>
      <span className="capitalize text-[#1B1B1B]">{platform}</span>
    </button>
  );
}

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#4B4B4B]/20 z-50">
      <div 
        className="h-full bg-[#FFD700] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

interface BlogPostPageProps {
  params: { id: string };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentUrl(window.location.href);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  const { post1, posts } = postsJson;
  const allPosts = [post1, ...posts];
  const post = allPosts.find((p: BlogPost) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1B1B1B] mb-4">Post Not Found</h1>
          <p className="text-[#4B4B4B] mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="bg-[#FFD700] text-[#1B1B1B] px-6 py-3 rounded-lg hover:bg-[#FF4500] transition-colors font-semibold">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const estimateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.replace(/<[^>]*>/g, '').split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <ReadingProgressBar />

      <article className="min-h-screen bg-[#FAFAFA]">
        {/* Header */}
        <header className="bg-white border-b border-[#4B4B4B]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link href="/blog" className="inline-flex items-center text-[#FFD700] hover:text-[#FF4500] mb-8 font-semibold">
              <span className="mr-2">←</span>
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#FFD700] text-[#1B1B1B] text-sm font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-[#4B4B4B] text-sm">
                {estimateReadTime(post.longText)} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <Image
                src={post.authorAvatarUrl}
                alt={post.authorName}
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-[#1B1B1B] text-lg">{post.authorName}</p>
                <p className="text-[#4B4B4B]">{formatDate(post.date)}</p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-wrap gap-3">
              <ShareButton platform="twitter" url={currentUrl} title={post.title} />
              <ShareButton platform="facebook" url={currentUrl} title={post.title} />
              <ShareButton platform="linkedin" url={currentUrl} title={post.title} />
              <ShareButton platform="whatsapp" url={currentUrl} title={post.title} />
              <ShareButton platform="email" url={currentUrl} title={post.title} />
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1B1B1B] prose-p:text-[#4B4B4B] prose-p:leading-relaxed prose-a:text-[#FFD700] prose-a:no-underline hover:prose-a:text-[#FF4500]"
            dangerouslySetInnerHTML={{ __html: post.longText }}
          />
        </div>

        {/* Share Again */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#4B4B4B]/20">
          <div className="bg-white rounded-xl p-6 border border-[#4B4B4B]/10">
            <h3 className="text-lg font-semibold text-[#1B1B1B] mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              <ShareButton platform="twitter" url={currentUrl} title={post.title} />
              <ShareButton platform="facebook" url={currentUrl} title={post.title} />
              <ShareButton platform="linkedin" url={currentUrl} title={post.title} />
              <ShareButton platform="whatsapp" url={currentUrl} title={post.title} />
              <ShareButton platform="email" url={currentUrl} title={post.title} />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#4B4B4B]/20">
            <h3 className="text-2xl font-bold text-[#1B1B1B] mb-8">Related Articles</h3>
            {/* the key prop was incorrect and producing duplicate keys. Added index as a value in the key */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article key={`related-post-${relatedPost.id}-${index}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#4B4B4B]/10">
                  <Link href={`/blog/${relatedPost.id}`}>
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#FF4500] text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-[#4B4B4B] text-xs">
                        {estimateReadTime(relatedPost.longText)} min read
                      </span>
                    </div>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <h4 className="text-lg font-bold text-[#1B1B1B] mb-3 hover:text-[#FFD700] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </Link>
                    <p className="text-[#4B4B4B] text-sm line-clamp-3">
                      {relatedPost.previewText}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}