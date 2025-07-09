
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { Search, Calendar, Clock, User, Tag } from 'lucide-react';

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
  featured?: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from API or CMS
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // This would typically fetch from your CMS API
      const response = await fetch('/api/blog/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        // Fallback to local data for now
        const postsModule = await import('./data/posts.json');
        const { post1, posts: otherPosts } = postsModule.default;
        const allPosts = [post1, ...otherPosts].map(post => ({
          ...post,
          readTime: estimateReadTime(post.longText),
          featured: post.id === 7 // Featured post
        }));
        setPosts(allPosts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      // Fallback to local data
      const postsModule = await import('./data/posts.json');
      const { post1, posts: otherPosts } = postsModule.default;
      const allPosts = [post1, ...otherPosts].map(post => ({
        ...post,
        readTime: estimateReadTime(post.longText),
        featured: post.id === 7
      }));
      setPosts(allPosts);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];

  useEffect(() => {
    let filtered = posts;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.previewText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm, posts]);

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

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Geria <span className="text-blue-400">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert perspectives on remote work, technology trends, and building world-class distributed teams.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg text-lg placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 border border-gray-300'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <Link href={`/blog/${featuredPost.id}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        width={800}
                        height={500}
                        className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime} min read
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed line-clamp-3">
                    {featuredPost.previewText}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={featuredPost.authorAvatarUrl}
                      alt={featuredPost.authorName}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{featuredPost.authorName}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(featuredPost.date)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {activeCategory === 'all' ? 'Latest Articles' : `${activeCategory} Articles`}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse all categories.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:-translate-y-1"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.previewText}
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.authorAvatarUrl}
                        alt={post.authorName}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.authorName}</p>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest insights on remote work, technology trends, and team building delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
