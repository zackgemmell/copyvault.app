# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static site using the Minima theme (v2.5) with Tailwind CSS v3 for styling. The site is configured for automatic deployment to GitHub Pages via GitHub Actions workflow.

## Development Commands

### Local Development
```bash
npm run serve
```
Starts the Tailwind CSS watcher and Jekyll development server concurrently. The server watches for file changes and rebuilds automatically. Note that changes to `_config.yml` require a server restart.

Alternatively, run commands separately:
```bash
npm run watch:css         # Watch and rebuild Tailwind CSS
bundle exec jekyll serve  # Start Jekyll server
```

### Build
```bash
npm run build
```
Builds Tailwind CSS and the Jekyll site to the `_site` directory.

Or build separately:
```bash
npm run build:css         # Build Tailwind CSS only
bundle exec jekyll build  # Build Jekyll only
```

### Dependencies
```bash
bundle install  # Install Ruby gem dependencies
npm install     # Install Node.js dependencies
```
Install or update dependencies after modifying the Gemfile or package.json.

## Project Structure

- `_config.yml` - Site-wide configuration (title, description, plugins, theme)
- `_posts/` - Blog posts in markdown format (naming: `YYYY-MM-DD-title.markdown`)
- `_layouts/` - Custom layout templates (currently empty, using Minima defaults)
- `_includes/` - Custom includes (overrides Minima's head.html to include Tailwind CSS)
- `_site/` - Generated static site (excluded from git)
- `assets/css/input.css` - Tailwind CSS input file with @tailwind directives
- `assets/css/output.css` - Generated Tailwind CSS (auto-generated, excluded from git)
- `assets/` - Static assets (css, img subdirectories)
- `index.markdown` - Homepage using the `home` layout
- `about.markdown` - About page using the `page` layout
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration for Tailwind
- `package.json` - Node.js dependencies and build scripts

## Tailwind CSS

This project uses Tailwind CSS v3 for styling. All Tailwind utility classes are available for use in your HTML, Markdown, and layout files.

### Using Tailwind Classes
You can use Tailwind classes directly in your Markdown files and layouts:
```html
<div class="container mx-auto px-4">
  <h1 class="text-4xl font-bold text-blue-600">Hello World</h1>
</div>
```

### Configuration
The Tailwind configuration is in `tailwind.config.js`. The content paths are configured to scan:
- `_layouts/**/*.html`
- `_includes/**/*.html`
- `_posts/**/*.{md,markdown}`
- `./*.{html,md,markdown}`

### Build Process
Tailwind CSS is compiled from `assets/css/input.css` to `assets/css/output.css`. The output file is automatically included in the site's `<head>` via the custom `_includes/head.html` file.

The GitHub Actions workflow automatically builds Tailwind CSS during deployment.

## Content Management

### Blog Posts
Posts must be named `YYYY-MM-DD-title.MARKUP` and placed in `_posts/`. Each post requires front matter with at minimum:
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS -0700
categories: category1 category2
---
```

### Pages
Pages use front matter to specify layout and permalink:
```yaml
---
layout: page
title: "Page Title"
permalink: /custom-url/
---
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via `.github/workflows/jekyll-gh-pages.yml`. The workflow builds and deploys without requiring local build artifacts to be committed.
