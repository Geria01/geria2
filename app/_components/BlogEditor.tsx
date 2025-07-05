
'use client';
import React, { useState, useRef, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  previewText: string;
  longText: string;
  date: string;
  authorName: string;
  authorAvatarUrl: string;
  published: boolean;
  scheduledDate?: string;
  tags?: string[];
}

interface BlogEditorProps {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

export default function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [formData, setFormData] = useState<BlogPost>({
    id: post?.id || 0,
    title: post?.title || '',
    category: post?.category || '',
    image: post?.image || '',
    previewText: post?.previewText || '',
    longText: post?.longText || '',
    date: post?.date || new Date().toLocaleDateString(),
    authorName: post?.authorName || 'Sophie Wood',
    authorAvatarUrl: post?.authorAvatarUrl || 'https://geriasa.blob.core.windows.net/assets/female_avatar_ca3d045095.webp',
    published: post?.published || false,
    scheduledDate: post?.scheduledDate || '',
    tags: post?.tags || []
  });

  const [imagePreview, setImagePreview] = useState(formData.image);
  const [tagInput, setTagInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const categories = ['Technology', 'Remote Work', 'Hiring', 'Build', 'Engineering'];

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = formData.longText;
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = () => {
    if (contentRef.current) {
      setFormData(prev => ({
        ...prev,
        longText: contentRef.current!.innerHTML
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      
      // In a real app, you would upload to a cloud service here
      // For now, we'll just use the preview URL
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          image: previewUrl
        }));
        setIsUploading(false);
      }, 1000);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (contentRef.current) {
      const updatedPost = {
        ...formData,
        longText: contentRef.current.innerHTML,
        date: post ? formData.date : new Date().toLocaleDateString()
      };
      
      onSave(updatedPost);
    }
  };

  const insertFormatting = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    handleContentChange();
  };

  const estimateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.replace(/<[^>]*>/g, '').split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              {post ? 'Edit Post' : 'Create New Post'}
            </h1>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, published: !prev.published }))}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  formData.published 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                }`}
              >
                {formData.published ? 'Published' : 'Draft'}
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Preview Text</label>
              <textarea
                name="previewText"
                value={formData.previewText}
                onChange={handleInputChange}
                rows={3}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description of the post..."
              />
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Featured Image</h2>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isUploading ? 'Uploading...' : 'Upload Image'}
                </button>
              </div>
              {imagePreview && (
                <div className="flex-shrink-0">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {formData.tags?.map(tag => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                placeholder="Add a tag..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Add Tag
              </button>
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Content</h2>
            
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 mb-4 p-4 bg-gray-50 rounded-lg">
              <button
                type="button"
                onClick={() => insertFormatting('bold')}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                <strong>B</strong>
              </button>
              <button
                type="button"
                onClick={() => insertFormatting('italic')}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                <em>I</em>
              </button>
              <button
                type="button"
                onClick={() => insertFormatting('underline')}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                <u>U</u>
              </button>
              <button
                type="button"
                onClick={() => insertFormatting('formatBlock', 'h3')}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                H3
              </button>
              <button
                type="button"
                onClick={() => insertFormatting('formatBlock', 'h5')}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                H5
              </button>
              <button
                type="button"
                onClick={() => insertFormatting('insertUnorderedList')}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                • List
              </button>
              <button
                type="button"
                onClick={() => insertFormatting('insertOrderedList')}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                1. List
              </button>
              <button
                type="button"
                onClick={() => {
                  const url = prompt('Enter URL:');
                  if (url) insertFormatting('createLink', url);
                }}
                className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                🔗 Link
              </button>
            </div>

            {/* Editor */}
            <div
              ref={contentRef}
              contentEditable
              onInput={handleContentChange}
              className="min-h-[400px] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 prose max-w-none"
              style={{ outline: 'none' }}
            />
            
            <div className="mt-4 text-sm text-gray-500">
              Estimated read time: {estimateReadTime(formData.longText)} minutes
            </div>
          </div>

          {/* Author Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Author Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author Name</label>
                <input
                  type="text"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author Avatar URL</label>
                <input
                  type="url"
                  name="authorAvatarUrl"
                  value={formData.authorAvatarUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  Status: <span className={`font-semibold ${formData.published ? 'text-green-600' : 'text-yellow-600'}`}>
                    {formData.published ? 'Published' : 'Draft'}
                  </span>
                </p>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                {post ? 'Update Post' : 'Create Post'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
