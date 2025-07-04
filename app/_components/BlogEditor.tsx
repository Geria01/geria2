
'use client';
import React, { useState, useRef } from 'react';

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
}

interface BlogEditorProps {
  post: BlogPost | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

export default function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [category, setCategory] = useState(post?.category || '');
  const [image, setImage] = useState(post?.image || '');
  const [previewText, setPreviewText] = useState(post?.previewText || '');
  const [longText, setLongText] = useState(post?.longText || '');
  const [published, setPublished] = useState(post?.published || false);
  const [scheduledDate, setScheduledDate] = useState(post?.scheduledDate || '');
  const [isDraft, setIsDraft] = useState(false);
  
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setLongText(editorRef.current.innerHTML);
    }
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      formatText('insertImage', url);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload to a service like Cloudinary
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const newPost: BlogPost = {
      id: post?.id || Date.now(),
      title,
      category,
      image,
      previewText,
      longText,
      date: new Date().toLocaleDateString('en-GB', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      authorName: 'Admin User',
      authorAvatarUrl: 'https://geriasa.blob.core.windows.net/assets/female_avatar_ca3d045095.webp',
      published: !isDraft && published,
      scheduledDate: scheduledDate || undefined
    };
    onSave(newPost);
  };

  const saveDraft = () => {
    setIsDraft(true);
    handleSave();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {post ? 'Edit Post' : 'New Post'}
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={saveDraft}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Save Draft
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {published ? 'Update' : 'Publish'}
              </button>
              <button
                onClick={onCancel}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter post title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview Text
                </label>
                <textarea
                  value={previewText}
                  onChange={(e) => setPreviewText(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description for post preview..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                
                {/* Toolbar */}
                <div className="border border-gray-300 rounded-t-md p-2 bg-gray-50 flex flex-wrap gap-2">
                  <button
                    onClick={() => formatText('bold')}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Bold"
                  >
                    <strong>B</strong>
                  </button>
                  <button
                    onClick={() => formatText('italic')}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Italic"
                  >
                    <em>I</em>
                  </button>
                  <button
                    onClick={() => formatText('underline')}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Underline"
                  >
                    <u>U</u>
                  </button>
                  <div className="border-l border-gray-300 mx-1"></div>
                  <button
                    onClick={() => formatText('formatBlock', 'h3')}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Heading"
                  >
                    H3
                  </button>
                  <button
                    onClick={() => formatText('formatBlock', 'h5')}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Subheading"
                  >
                    H5
                  </button>
                  <div className="border-l border-gray-300 mx-1"></div>
                  <button
                    onClick={() => formatText('insertUnorderedList')}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Bullet List"
                  >
                    •
                  </button>
                  <button
                    onClick={() => formatText('insertOrderedList')}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Numbered List"
                  >
                    1.
                  </button>
                  <div className="border-l border-gray-300 mx-1"></div>
                  <button
                    onClick={() => {
                      const url = prompt('Enter link URL:');
                      if (url) formatText('createLink', url);
                    }}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Insert Link"
                  >
                    🔗
                  </button>
                  <button
                    onClick={insertImage}
                    className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Insert Image"
                  >
                    🖼️
                  </button>
                </div>

                {/* Editor */}
                <div
                  ref={editorRef}
                  contentEditable
                  dangerouslySetInnerHTML={{ __html: longText }}
                  onInput={(e) => setLongText(e.currentTarget.innerHTML)}
                  className="min-h-[400px] p-4 border border-t-0 border-gray-300 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  style={{ whiteSpace: 'pre-wrap' }}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select category</option>
                  <option value="Technology">Technology</option>
                  <option value="Remote Work">Remote Work</option>
                  <option value="Hiring">Hiring</option>
                  <option value="Build">Build</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Image
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400"
                >
                  {image ? (
                    <img src={image} alt="Preview" className="w-full h-32 object-cover rounded" />
                  ) : (
                    <div className="text-gray-500">
                      <div className="text-2xl mb-2">📷</div>
                      <p>Click to upload image</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="mr-2"
                  />
                  Publish immediately
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Schedule for later
                </label>
                <input
                  type="datetime-local"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
