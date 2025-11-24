import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    assistant: z.string().optional(),
  }),
});

export const collections = { blog };
