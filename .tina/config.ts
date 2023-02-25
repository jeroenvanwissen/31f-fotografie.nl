import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || '', // Get this from tina.io
  token: process.env.TINA_TOKEN || '', // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "photos",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/post",
        fields: [
          {
            label: "Draft",
            name: "draft",
            type: "boolean",            
          },
          {
            label: "Date",
            name: "date",
            type: "datetime",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'categories',
            label: 'Categories',
            list: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            label: "Image",
            name: "image",
            type: "object",
            fields: [
              {
                label: "Image src",
                name: "url",
                type: "image"
              },            
              {
                label: "Image Alt",
                name: "alt",
                type: "string"
              },   
          ]},
          {
            label: "Socials",
            name: "socials",
            type: "object",
            fields: [
              {
                label: "Instagram",
                name: "instagram",
                type: "string"
              },            
              {
                label: "Mastodon",
                name: "mastodon",
                type: "string"
              },   
          ]},
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
