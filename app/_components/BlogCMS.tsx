
'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye, Calendar, Clock, Tag } from 'lucide-react';
import Image from 'next/image';

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

interface BlogCMSProps {
  isAuthenticated: boolean;
}

export default function BlogCMS({ isAuthenticated }: BlogCMSProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const categories = ['Build', 'Remote Work', 'Hiring', 'Technology'];

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = () => {
    setEditingPost({
      category: 'Build',
      title: '',
      image: '',
      previewText: '',
      longText: '',
      date: new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      authorName: 'Sophie Wood',
      authorAvatarUrl: 'https://geriasa.blob.core.windows.net/assets/female_avatar_ca3d045095.webp'
    });
    setIsEditing(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setIsEditing(true);
  };

  const handleSavePost = async () => {
    if (!editingPost) return;

    try {
      const method = editingPost.id ? 'PUT' : 'POST';
      const url = editingPost.id ? `/api/blog/posts/${editingPost.id}` : '/api/blog/posts';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingPost),
      });

      if (response.ok) {
        fetchPosts();
        setIsEditing(false);
        setEditingPost(null);
      }
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleDeletePost = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const estimateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.replace(/<[^>]*>/g, '').split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">Please log in to access the content management system.</p>
      </div>
    );
  }

  if (isEditing && editingPost) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingPost.id ? 'Edit Post' : 'Create New Post'}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Eye className="h-4 w-4" />
              {showPreview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={handleSavePost}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditingPost(null);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
          </div>
        </div>

        {showPreview ? (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {editingPost.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {editingPost.title || 'Untitled Post'}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src={editingPost.authorAvatarUrl || ''}
                alt={editingPost.authorName || ''}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{editingPost.authorName}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {editingPost.date}
                  <Clock className="h-4 w-4 ml-3 mr-1" />
                  {estimateReadTime(editingPost.longText || '')} min read
                </div>
              </div>
            </div>
            {editingPost.image && (
              <Image
                src={editingPost.image}
                alt={editingPost.title || ''}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: editingPost.longText || '' }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editingPost.title || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter post title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={editingPost.category || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={editingPost.image || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preview Text
                </label>
                <textarea
                  value={editingPost.previewText || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, previewText: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description for the blog list..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content (HTML)
              </label>
              <textarea
                value={editingPost.longText || ''}
                onChange={(e) => setEditingPost({ ...editingPost, longText: e.target.value })}
                rows={20}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                placeholder="Write your blog content here using HTML..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Use HTML tags for formatting. Use &lt;h5&gt; for subheadings, &lt;p&gt; for paragraphs, etc.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Blog Content Management</h2>
        <button
          onClick={handleCreatePost}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Post
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={60}
                        height={40}
                        className="rounded object-cover mr-4"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900 line-clamp-1">
                          {post.title}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2">
                          {post.previewText}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditPost(post)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Content Management Guide</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Use the "New Post" button to create new blog articles</li>
          <li>• Click the edit icon to modify existing posts</li>
          <li>• Use the preview feature to see how your post will look</li>
          <li>• Images should be uploaded to your CDN and referenced by URL</li>
          <li>• Use HTML formatting for rich content (headings, links, lists, etc.)</li>
        </ul>
      </div>
    </div>
  );
}
