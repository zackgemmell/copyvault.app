# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static site using the Minima theme (v2.5). The site is configured for automatic deployment to GitHub Pages via GitHub Actions workflow.

## Development Commands

### Local Development
```bash
bundle exec jekyll serve
```
Starts a local development server with auto-regeneration. The server watches for file changes and rebuilds automatically. Note that changes to `_config.yml` require a server restart.

### Build
```bash
bundle exec jekyll build
```
Builds the site to the `_site` directory.

### Dependencies
```bash
bundle install
```
Install or update Ruby gem dependencies after modifying the Gemfile.

## Project Structure

- `_config.yml` - Site-wide configuration (title, description, plugins, theme)
- `_posts/` - Blog posts in markdown format (naming: `YYYY-MM-DD-title.markdown`)
- `_layouts/` - Custom layout templates (currently empty, using Minima defaults)
- `_site/` - Generated static site (excluded from git)
- `assets/` - Static assets (css, img subdirectories)
- `index.markdown` - Homepage using the `home` layout
- `about.markdown` - About page using the `page` layout

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
