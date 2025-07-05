
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import postsJson from './posts.json';
import Image from 'next/image';
import SearchIcon from '../../public/icons/search_icon.svg';

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

export default function BlogPage() {
  const { post1, posts } = postsJson;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  const allPosts = [post1, ...posts];
  const categories = ['all', ...Array.from(new Set(allPosts.map(post => post.category)))];

  useEffect(() => {
    let filtered = allPosts;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.previewText.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
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

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B1B1B] via-[#4B4B4B] to-[#1B1B1B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Geria Blog
            </h1>
            <p className="text-xl md:text-2xl text-[#FAFAFA]/80 mb-8 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on remote work, technology, and building distributed teams.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                  <SearchIcon className="h-5 w-5 text-[#4B4B4B]" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-4 text-[#1B1B1B] bg-white rounded-xl border-0 focus:ring-2 focus:ring-[#FFD700] focus:outline-none shadow-lg text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-[#4B4B4B]/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-[#FFD700] text-[#1B1B1B] shadow-lg transform scale-105'
                    : 'bg-[#FAFAFA] text-[#4B4B4B] hover:bg-[#FF4500] hover:text-white hover:scale-105 border border-[#4B4B4B]/20'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#4B4B4B]/10">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <Link href={`/blog/${filteredPosts[0].id}`}>
                    <Image
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      width={800}
                      height={500}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#FFD700] text-[#1B1B1B] text-sm font-semibold px-3 py-1 rounded-full">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-[#4B4B4B] text-sm">
                      {estimateReadTime(filteredPosts[0].longText)} min read
                    </span>
                  </div>
                  <Link href={`/blog/${filteredPosts[0].id}`}>
                    <h2 className="text-3xl font-bold text-[#1B1B1B] mb-4 hover:text-[#FFD700] transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                  </Link>
                  <p className="text-[#4B4B4B] text-lg mb-6 leading-relaxed">
                    {filteredPosts[0].previewText}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={filteredPosts[0].authorAvatarUrl}
                      alt={filteredPosts[0].authorName}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-[#1B1B1B]">{filteredPosts[0].authorName}</p>
                      <p className="text-[#4B4B4B] text-sm">{formatDate(filteredPosts[0].date)}</p>
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
            <h2 className="text-3xl font-bold text-[#1B1B1B]">
              {activeCategory === 'all' ? 'All Articles' : `${activeCategory} Articles`}
            </h2>
            <p className="text-[#4B4B4B]">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4B4B4B] text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#4B4B4B]/10">
                  <Link href={`/blog/${post.id}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#FF4500] text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[#4B4B4B] text-xs">
                        {estimateReadTime(post.longText)} min read
                      </span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold text-[#1B1B1B] mb-3 hover:text-[#FFD700] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-[#4B4B4B] mb-4 line-clamp-3">
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
                        <p className="font-semibold text-[#1B1B1B] text-sm">{post.authorName}</p>
                        <p className="text-[#4B4B4B] text-xs">{formatDate(post.date)}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gradient-to-r from-[#1B1B1B] to-[#4B4B4B] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-[#FAFAFA]/80 mb-6 max-w-2xl mx-auto">
            Get the latest insights on remote work, technology trends, and team building delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-[#1B1B1B] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <button className="bg-[#FFD700] text-[#1B1B1B] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF4500] hover:text-white transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
