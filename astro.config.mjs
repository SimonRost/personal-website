// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Internationalization configuration
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  // Enable markdown content collections
  content: {
    // Define blog collections for different languages
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
      },
      'blog-de': {
        schema: {
          // Define the expected frontmatter schema for German blog posts
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
