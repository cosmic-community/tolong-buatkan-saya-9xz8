# Komik Persahabatan

![App Preview](https://imgix.cosmicjs.com/5baaead0-6e46-11f1-a7b1-a329933c1eaf-autopilot-photo-1529156069898-49953e39b3ac-1782138388925.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern comic script reader built with Next.js and [Cosmic](https://www.cosmicjs.com). This application brings to life a heartwarming comic story about friendship between a boy and two girls — featuring rich character profiles, detailed scenes with scripts, and complete episodes.

## Features

- 📖 **Episodes Browser** — Browse complete episodes with synopses and cover art
- 🎬 **Scene Viewer** — Read detailed scenes with full scripts, settings, and visual descriptions
- 👥 **Character Profiles** — Explore richly detailed character profiles with personalities and roles
- 🎨 **Modern Responsive Design** — Beautiful UI that works on all devices
- ⚡ **Server-Side Rendering** — Fast page loads with Next.js App Router
- 🔗 **Connected Content** — Episodes link to scenes, scenes link to characters

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3945c15b2ac5cef3dfd136&clone_repository=6a3946b55b2ac5cef3dfd18f)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Tolong buatkan saya sekerip komik tentang persahabatan cowok dan 2 cewek"

### Code Generation Prompt

> Build a Next.js application for a website called "Tolong buatkan saya". The content is managed in Cosmic CMS with the following object types: characters, scenes, episodes. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Tolong buatkan saya sekerip komik tentang persahabatan cowok dan 2 cewek

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Cosmic** — Headless CMS for content management
- **@cosmicjs/sdk** — Official Cosmic SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (Cosmic credentials are added automatically when deploying via Cosmic)

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

```typescript
// Fetch all episodes with connected scenes
const response = await cosmic.objects
  .find({ type: 'episodes' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(2)

// Fetch a single character
const character = await cosmic.objects
  .findOne({ type: 'characters', slug })
  .depth(1)
```

## Cosmic CMS Integration

This application leverages three content types from your Cosmic bucket:

- **Characters** (`characters`) — Character profiles with name, illustration, role, personality, and description
- **Scenes** (`scenes`) — Story scenes with title, order number, setting, script, visual description, reference image, and connected characters
- **Episodes** (`episodes`) — Complete episodes with title, synopsis, cover image, and connected scenes

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Connect your repository
2. Set build command to `bun run build`
3. Add environment variables
4. Deploy
<!-- README_END -->