
import { z } from 'zod';

// Input sanitization
export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
}

// Validation schemas
export const blogPostSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(50000),
  category: z.enum(['Build', 'Remote Work', 'Hiring', 'Technology']),
  previewText: z.string().min(1).max(500),
});

export const emailSchema = z.object({
  email: z.string().email(),
});

export const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(2000),
});
