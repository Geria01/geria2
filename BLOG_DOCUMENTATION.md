
# Geria Blog Management Documentation

## Overview
This documentation provides a complete guide for managing the Geria blog system. The blog has been rebuilt with modern technologies and includes a user-friendly content management system.

## Features
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Social Media Integration**: Built-in sharing capabilities for all major platforms
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimizations
- **Content Management System**: Easy-to-use interface for non-technical users
- **Modern UI**: Clean, professional design following Geria's brand guidelines

## Adding New Blog Posts

### Method 1: Using the Admin Interface (Recommended)
1. Navigate to `/blog/admin` in your browser
2. Log in with your admin credentials
3. Click the "New Post" button
4. Fill in the post details:
   - **Title**: The main headline of your article
   - **Category**: Choose from Build, Remote Work, Hiring, or Technology
   - **Featured Image URL**: Link to your header image
   - **Preview Text**: Brief description (appears in blog list)
   - **Content**: Full article content using HTML formatting

### Method 2: Direct File Editing
1. Open `app/blog/data/posts.json`
2. Add your new post to the "posts" array
3. Follow the existing format with these required fields:
   - `id`: Unique number
   - `category`: Post category
   - `title`: Post headline
   - `image`: Featured image URL
   - `previewText`: Short description
   - `longText`: Full content with HTML
   - `date`: Publication date
   - `authorName`: Author's name
   - `authorAvatarUrl`: Author's profile image

## Content Formatting Guidelines

### HTML Tags to Use:
- `<h5>`: For subheadings
- `<p>`: For paragraphs
- `<strong>`: For bold text
- `<a href="url">`: For links
- `<ul>` and `<li>`: For bullet lists
- `<ol>` and `<li>`: For numbered lists
- `<br>`: For line breaks

### Example Content Structure:
```html
<p>Introduction paragraph here...</p>

<h5>First Subheading</h5>
<p>Content under the first section...</p>

<h5>Second Subheading</h5>
<p>More content here...</p>

<ul>
<li>First bullet point</li>
<li>Second bullet point</li>
</ul>
```

## Image Management

### Best Practices:
- Use high-quality images (minimum 800x400px for featured images)
- Ensure images are web-optimized (under 500KB)
- Use descriptive filenames
- Store images in your Azure Blob Storage or CDN

### Current Image Storage:
All images are stored at: `https://geriasa.blob.core.windows.net/assets/`

To add new images:
1. Upload to your Azure Blob Storage
2. Copy the full URL
3. Use this URL in the image field

## Social Media Optimization

### Automatic Features:
- **Social Sharing Buttons**: Automatically generated for each post
- **Meta Tags**: Generated from post title and preview text
- **Open Graph**: Optimized previews for Facebook/LinkedIn
- **Twitter Cards**: Enhanced Twitter sharing

### Customizing Social Preview:
- **Title**: Uses the post title
- **Description**: Uses the preview text (keep under 160 characters)
- **Image**: Uses the featured image

## SEO Best Practices

### Automatic Optimizations:
- Semantic HTML structure
- Meta descriptions from preview text
- Proper heading hierarchy
- Alt text for images
- Clean URL structure (`/blog/[id]`)

### Manual Optimizations:
- Write descriptive titles (50-60 characters)
- Create compelling preview text (150-160 characters)
- Use relevant keywords naturally
- Include internal links to other blog posts

## Managing Categories

### Current Categories:
- **Build**: Development and technical content
- **Remote Work**: Distributed team management
- **Hiring**: Recruitment and talent acquisition
- **Technology**: Tech trends and insights

### Adding New Categories:
1. Edit `app/blog/page.tsx`
2. Update the `categories` array
3. Update the BlogCMS component as well

## Performance Features

### Built-in Optimizations:
- **Image Optimization**: Automatic resizing and format optimization
- **Lazy Loading**: Images load as users scroll
- **Code Splitting**: JavaScript loads only when needed
- **Caching**: Optimized for fast loading

### Read Time Calculation:
- Automatically calculated based on content length
- Assumes 200 words per minute reading speed
- Displayed on both blog list and individual posts

## Deployment Process

### Automatic Deployment:
1. Make changes to blog content
2. Save files
3. Changes automatically deploy to production
4. No additional steps required

### Manual Deployment (if needed):
1. Navigate to the Deployments tab in Replit
2. Click "Deploy" to push changes live

## Troubleshooting

### Common Issues:

**Images not displaying:**
- Check image URL is accessible
- Ensure images are publicly available
- Verify correct file extension

**Formatting issues:**
- Validate HTML syntax
- Check for unclosed tags
- Use the preview feature before saving

**Social sharing not working:**
- Verify post has all required fields
- Check URL accessibility
- Clear social media cache if needed

### Getting Help:
1. Check this documentation first
2. Use the preview feature to test changes
3. Contact your development team for technical issues

## Security Notes

- Admin access is required for content management
- All content is validated before saving
- Image URLs are checked for security
- User permissions are properly managed

---

*Last updated: January 2025*
*For technical support, contact the Geria development team*
