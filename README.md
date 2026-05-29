# ⚡ AI Tools Catalog

> A modern, dark-themed catalog of AI tools for students and freelancers.

## 🚀 Live Demo

Deploy instantly to GitHub Pages — no build step required.

## 📁 Project Structure

```
ai-tools-catalog/
├── index.html          # Main catalog page
├── tool.html           # Tool detail page
├── login.html          # Auth page (sign in / register)
├── favorites.html      # Saved favorites
├── admin.html          # Admin dashboard
├── css/
│   └── style.css       # All styles (dark glassmorphism theme)
├── js/
│   └── app.js          # All JavaScript logic + demo data
└── assets/
    └── images/         # Tool images (optional)
```

## 🛠 Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, glassmorphism, animations
- **Vanilla JavaScript** — no frameworks, no build tools
- **localStorage** — persistent favorites across sessions

## ✨ Features

- 12 curated AI tools with full detail pages
- Category & price filtering
- Live search with highlight
- Favorites system (localStorage)
- Admin dashboard with charts
- Auth page with password strength indicator
- Toast notifications
- Responsive mobile menu
- Skeleton loading animations

## 🌐 Deploy to GitHub Pages

1. Fork or upload this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site is live at `https://username.github.io/ai-tools-catalog/`

## 📝 Adding New Tools

Edit the `AI_TOOLS` array in `js/app.js`:

```js
{
  id: 13,
  name: "New Tool",
  category: "Text",          // Text | Design | Productivity | Research | Marketing | Coding | Video | Image Generation
  emoji: "🚀",
  description: "Short description (used in cards)",
  fullDescription: "Full paragraph for tool detail page",
  features: ["Feature 1", "Feature 2"],
  pros: ["Pro 1", "Pro 2"],
  cons: ["Con 1"],
  price: "Freemium",         // Free | Freemium | Paid
  priceDetail: "$0 / $10/mo",
  rating: 4.5,
  reviews: 1200,
  website: "https://example.com",
  tags: ["tag1", "tag2"],
  image: null,               // or relative path to image
  color: "#00dcc8",
  reviewList: []
}
```

## 📄 License

MIT — free to use, modify, and deploy.
