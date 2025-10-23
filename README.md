# SecureYourGear

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.secureyourgear.com)](https://www.secureyourgear.com)
[![GitHub Pages](https://github.com/GitSolved/gitsolved.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/GitSolved/gitsolved.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

AI Security Research & CTF Challenges - A technical security blog focused on OWASP LLM vulnerabilities, CTF writeups, binary exploitation, and cybersecurity research. Visit the live site at [www.secureyourgear.com](https://www.secureyourgear.com).

## About

SecureYourGear provides technical security content including:

- **CTF Writeups**: Detailed solutions for Capture The Flag challenges (OverTheWire Bandit, etc.)
- **Binary Exploitation**: ROP chain development, ret2libc techniques, buffer overflows
- **AI Security**: LLM prompt injection, security implications of artificial intelligence
- **Security Operations**: SOC automation labs, threat detection, incident response workflows
- **Network Security**: VPN setup guides, secure networking practices
- **Red Teaming**: Penetration testing techniques and methodologies

## Tech Stack

- **Static Site Generator**: [Jekyll](https://jekyllrb.com/) 4.4+
- **Theme**: [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) (heavily customized)
- **Hosting**: GitHub Pages
- **Deployment**: Automated via GitHub Actions
- **Analytics**: Google Analytics

### Custom Features

- Pure black background with purple accent colors
- Custom typography and post title styling
- Animated site title with typing effect
- EXIF-stripped images for privacy
- Optimized for performance (minimal dependencies)

## Local Development

### Prerequisites

- Ruby 3.3+
- Bundler
- Jekyll 4.4+

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/GitSolved/gitsolved.github.io.git
   cd gitsolved.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open http://localhost:4000 in your browser

### Development Commands

```bash
# Serve with live reload (default)
bundle exec jekyll serve

# Serve with drafts visible
bundle exec jekyll serve --drafts

# Build site (outputs to _site/)
bundle exec jekyll build

# Build for production
JEKYLL_ENV=production bundle exec jekyll build
```

## Writing Posts

Posts are written in Markdown and stored in `_posts/` with the naming convention: `YYYY-MM-DD-title.md`

### Post Template

```yaml
---
title: "Your Post Title"
author: SecureYourGear Team
date: YYYY-MM-DD HH:MM:SS -0400
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
---

Your content here...
```

### Adding Images

Store post images in `/assets/img/posts/your-post-name/` and reference them:

```markdown
![Alt text](/assets/img/posts/your-post-name/image.png)
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions workflow (`.github/workflows/deploy.yml`).

**Deployment Process**:
1. Push commits to `main` branch
2. GitHub Actions builds the site with Jekyll
3. Site deploys to https://www.secureyourgear.com
4. Updates are live within 1-2 minutes

## Project Structure

```
.
├── _config.yml           # Jekyll configuration
├── _data/                # Data files (contact info, assets config)
├── _includes/            # Custom HTML partials (head.html)
├── _layouts/             # Custom page layouts (home.html)
├── _plugins/             # Jekyll plugins (lastmod hook)
├── _posts/               # Blog posts (Markdown)
├── _sass/                # Custom SCSS (variables-hook.scss)
├── _tabs/                # Static pages (About, Archives, etc.)
├── assets/
│   ├── css/              # Custom stylesheets
│   ├── img/              # Images and favicons
│   └── js/               # Custom JavaScript
├── .github/workflows/    # GitHub Actions CI/CD
└── index.html            # Homepage
```

## Customization

### Color Scheme

The site uses a custom pure black theme with purple accents. Colors are defined in:
- `_sass/variables-hook.scss` - Theme color variables
- `assets/css/custom.scss` - Component-specific styles

### Key Customizations

1. **Theme Colors**: Modified in `_sass/variables-hook.scss`
2. **Post Title Colors**: Blue titles defined in `assets/css/custom.scss`
3. **Site Title Animation**: Custom typing effect in `assets/js/typing-effect.js`
4. **Homepage Layout**: Custom layout in `_layouts/home.html` (removed author bylines)
5. **Head Includes**: Modified `_includes/head.html` for custom CSS loading order

## Contributing

This is a personal blog, but if you notice any issues:

1. Open an issue describing the problem
2. Submit a pull request with proposed fixes

## Security

- All images have EXIF metadata stripped to protect privacy
- No personal information or credentials committed to repository
- Git history has been sanitized of sensitive data

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [www.secureyourgear.com](https://www.secureyourgear.com)
- **Email**: samir@secureyourgear.com
- **LinkedIn**: [Samir Anastasio](https://www.linkedin.com/in/samiranastasio/)
- **GitHub**: [@GitSolved](https://github.com/GitSolved)
- **Twitter**: [@SecureYourGear](https://twitter.com/SecureYourGear)

---

Built with [Jekyll](https://jekyllrb.com/) and [Chirpy Theme](https://github.com/cotes2020/jekyll-theme-chirpy)
