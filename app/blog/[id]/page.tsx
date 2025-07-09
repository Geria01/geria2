
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

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
  readTime?: number;
}

interface ShareButtonProps {
  platform: string;
  url: string;
  title: string;
  description: string;
}

function ShareButton({ platform, url, title, description }: ShareButtonProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`
  };

  const handleShare = () => {
    const shareUrl = shareUrls[platform as keyof typeof shareUrls];
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const icons = {
    twitter: <Twitter className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    whatsapp: <span className="text-lg">📱</span>,
    email: <Mail className="h-5 w-5" />,
    copy: <LinkIcon className="h-5 w-5" />
  };

  const colors = {
    twitter: 'hover:bg-blue-500 hover:text-white',
    facebook: 'hover:bg-blue-600 hover:text-white',
    linkedin: 'hover:bg-blue-700 hover:text-white',
    whatsapp: 'hover:bg-green-500 hover:text-white',
    email: 'hover:bg-gray-600 hover:text-white',
    copy: 'hover:bg-gray-600 hover:text-white'
  };

  if (platform === 'copy') {
    return (
      <button
        onClick={copyToClipboard}
        className={`flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg transition-colors border border-gray-300 ${colors[platform]}`}
      >
        {icons[platform]}
        <span className="capitalize">Copy Link</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg transition-colors border border-gray-300 ${colors[platform as keyof typeof colors]}`}
    >
      {icons[platform as keyof typeof icons]}
      <span className="capitalize">{platform}</span>
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
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-blue-600 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

interface BlogPostPageProps {
  params: { id: string };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setCurrentUrl(window.location.href);
    fetchPost();
  }, [params.id]);

  const fetchPost = async () => {
    try {
      // Try to fetch from API first
      const response = await fetch(`/api/blog/posts/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
        setRelatedPosts(data.relatedPosts);
      } else {
        // Fallback to local data
        const postsModule = await import('../data/posts.json');
        const { post1, posts } = postsModule.default;
        const allPosts = [post1, ...posts];
        
        const foundPost = allPosts.find((p: BlogPost) => p.id === Number(params.id));
        if (foundPost) {
          const postWithReadTime = {
            ...foundPost,
            readTime: estimateReadTime(foundPost.longText)
          };
          setPost(postWithReadTime);
          
          const related = allPosts
            .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
            .slice(0, 3)
            .map(p => ({ ...p, readTime: estimateReadTime(p.longText) }));
          setRelatedPosts(related);
        }
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

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

  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReadingProgressBar />

      <article className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-semibold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
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
                <p className="font-semibold text-gray-900 text-lg">{post.authorName}</p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(post.date)}
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share this article
              </h3>
              <div className="flex flex-wrap gap-3">
                <ShareButton platform="twitter" url={currentUrl} title={post.title} description={post.previewText} />
                <ShareButton platform="facebook" url={currentUrl} title={post.title} description={post.previewText} />
                <ShareButton platform="linkedin" url={currentUrl} title={post.title} description={post.previewText} />
                <ShareButton platform="whatsapp" url={currentUrl} title={post.title} description={post.previewText} />
                <ShareButton platform="email" url={currentUrl} title={post.title} description={post.previewText} />
                <ShareButton platform="copy" url={currentUrl} title={post.title} description={post.previewText} />
              </div>
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
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.longText }}
          />
        </div>

        {/* Share Again */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Found this helpful? Share it with your network
            </h3>
            <div className="flex flex-wrap gap-3">
              <ShareButton platform="twitter" url={currentUrl} title={post.title} description={post.previewText} />
              <ShareButton platform="facebook" url={currentUrl} title={post.title} description={post.previewText} />
              <ShareButton platform="linkedin" url={currentUrl} title={post.title} description={post.previewText} />
              <ShareButton platform="email" url={currentUrl} title={post.title} description={post.previewText} />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">More in {post.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article 
                  key={`related-${relatedPost.id}-${index}`} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:-translate-y-1"
                >
                  <Link href={`/blog/${relatedPost.id}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedPost.readTime} min read
                      </div>
                    </div>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {relatedPost.title}
                      </h4>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {relatedPost.previewText}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Author Bio Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <Image
                src={post.authorAvatarUrl}
                alt={post.authorName}
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{post.authorName}</h4>
                <p className="text-gray-600 leading-relaxed">
                  Content strategist and writer specializing in remote work, technology trends, and team building. 
                  Passionate about helping companies build effective distributed teams.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
