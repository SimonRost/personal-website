// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable markdown content collections
  content: {
    // Define a blog collection that uses markdown files
    collections: {
      'blog': {
        schema: {
          // Define the expected frontmatter schema for blog posts
          title: String,
          date: String, 
          image: String,
          categories: Array,
          excerpt: String,
          readTime: Number,
        }
      }
    }
  }
});