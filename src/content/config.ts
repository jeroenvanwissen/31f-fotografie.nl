import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        date: z.date().transform((str) => new Date(str)),
        title: z.string(),
        categories: z.array(z.string().optional()),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        socials: z.object({
            instagram: z.string().optional(),
            mastodon: z.string().optional(),
        }).optional()
    })
});

export const collections = {
    'post': postCollection,
};
