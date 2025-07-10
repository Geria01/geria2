
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
  name: z.string().min(1).max(100).regex(/^[a-zA-Z\s'-]+$/, 'Invalid name format'),
  email: z.string().email(),
  message: z.string().min(1).max(2000),
});

// Rate limiting helper
export class RateLimiter {
  private attempts = new Map<string, number[]>();
  
  isRateLimited(key: string, windowMs: number = 60000, maxAttempts: number = 5): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(key) || [];
    const validAttempts = userAttempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return true;
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    return false;
  }
}
