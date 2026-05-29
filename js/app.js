/**
 * AI Tools Catalog — app.js
 * Core application logic: data, rendering, filtering, favorites, toasts
 */

/* ════════════════════════════════════════════════════════
   1. DEMO DATA — AI TOOLS DATABASE
   ════════════════════════════════════════════════════════ */
const AI_TOOLS = [
  {
    id: 1,
    name: "ChatGPT",
    category: "Text",
    emoji: "💬",
    description: "Versatile AI chatbot for writing, coding, brainstorming, and more. Powers millions of apps worldwide.",
    fullDescription: "ChatGPT by OpenAI is one of the world's most widely used AI assistants. Whether you need help drafting emails, debugging code, generating creative ideas, or analyzing complex topics, ChatGPT adapts to your needs with remarkable fluency. Its latest models support image understanding, file analysis, web browsing, and plugin integrations.",
    features: ["Multi-turn conversations", "Code generation & debugging", "Image understanding (GPT-4V)", "Web browsing", "Plugin ecosystem", "API access"],
    pros: ["Extremely versatile", "High-quality output", "Large knowledge base", "Active development"],
    cons: ["Can hallucinate facts", "Paid tier required for best models", "Rate limits on free plan"],
    price: "Freemium",
    priceDetail: "Free / $20/mo Pro",
    rating: 4.8,
    reviews: 12400,
    website: "https://chat.openai.com",
    tags: ["writing", "coding", "chatbot", "openai"],
    image: null,
    color: "#10a37f",
    reviewList: [
      { author: "Alex M.", date: "May 2025", rating: 5, text: "Absolutely transformed my workflow. I use it daily for writing and coding — saves hours every week.", color: "#7c3aed" },
      { author: "Sarah K.", date: "Apr 2025", rating: 4, text: "Great tool but the free tier is quite limited. Upgrading to Plus was worth it for the speed alone.", color: "#00dcc8" },
      { author: "James T.", date: "Mar 2025", rating: 5, text: "The coding assistance is phenomenal. Helped me debug a nasty async issue in minutes.", color: "#e040fb" }
    ]
  },
  {
    id: 2,
    name: "Midjourney",
    category: "Image Generation",
    emoji: "🎨",
    description: "State-of-the-art AI image generator producing breathtaking artwork from text prompts.",
    fullDescription: "Midjourney is the gold standard in AI image generation, known for its painterly, cinematic aesthetic. Artists, designers, and creators use it to produce professional-grade visuals for everything from book covers to marketing campaigns. Version 6 introduced photorealism and prompt coherence unlike any previous model.",
    features: ["Photorealistic renders", "Artistic style control", "v6 model available", "Discord & web interface", "Upscaling & variations", "Commercial license"],
    pros: ["Stunning visual quality", "Unique artistic style", "Active community", "Regular model updates"],
    cons: ["Subscription required", "Learning curve for prompts", "Discord-first UX"],
    price: "Paid",
    priceDetail: "From $10/mo",
    rating: 4.9,
    reviews: 8920,
    website: "https://midjourney.com",
    tags: ["images", "art", "design", "creative"],
    image: null,
    color: "#6366f1",
    reviewList: [
      { author: "Diana L.", date: "May 2025", rating: 5, text: "The quality is unmatched. My clients can't believe these are AI-generated.", color: "#7c3aed" },
      { author: "Carlos R.", date: "Apr 2025", rating: 5, text: "v6 is a massive leap. Photorealism is incredible now.", color: "#00dcc8" }
    ]
  },
  {
    id: 3,
    name: "GitHub Copilot",
    category: "Coding",
    emoji: "👨‍💻",
    description: "AI pair programmer that autocompletes code, suggests functions, and writes entire tests for you.",
    fullDescription: "GitHub Copilot integrates directly into your IDE and acts as a real-time coding companion. It understands context across your entire codebase, suggests completions, generates docstrings, writes unit tests, and can even explain unfamiliar code. Powered by OpenAI Codex and now Claude models.",
    features: ["Real-time code completion", "Multi-file context awareness", "Test generation", "Copilot Chat", "70+ language support", "IDE plugins (VS Code, JetBrains, Neovim)"],
    pros: ["Massive productivity boost", "Understands project context", "Excellent IDE integration", "Supports many languages"],
    cons: ["Monthly cost", "Occasionally suggests incorrect code", "Privacy concerns for proprietary code"],
    price: "Paid",
    priceDetail: "From $10/mo",
    rating: 4.7,
    reviews: 15600,
    website: "https://github.com/features/copilot",
    tags: ["coding", "ide", "autocomplete", "github"],
    image: null,
    color: "#f0f6ff",
    reviewList: [
      { author: "Priya S.", date: "May 2025", rating: 5, text: "I can't imagine coding without it anymore. Saves at least 2 hours a day.", color: "#7c3aed" },
      { author: "Tom W.", date: "Apr 2025", rating: 4, text: "Solid tool. Sometimes the suggestions are off but 80% of the time they're spot on.", color: "#00dcc8" }
    ]
  },
  {
    id: 4,
    name: "Notion AI",
    category: "Productivity",
    emoji: "📝",
    description: "AI writing and thinking assistant built directly into your Notion workspace.",
    fullDescription: "Notion AI brings the power of generative AI to your notes, docs, and projects — right where your knowledge already lives. Summarize long pages, generate action items from meeting notes, translate content, fix grammar, or brainstorm ideas without leaving your workspace.",
    features: ["Page summarization", "Action item extraction", "AI writing assistant", "Translation (30+ languages)", "Q&A over your workspace", "Meeting notes cleanup"],
    pros: ["Seamlessly integrated", "Works on existing content", "Team-friendly", "Constantly improving"],
    cons: ["Add-on cost to Notion", "Slower than standalone tools", "Best results with structured content"],
    price: "Freemium",
    priceDetail: "Free trial / $10/mo add-on",
    rating: 4.5,
    reviews: 6700,
    website: "https://notion.so/product/ai",
    tags: ["productivity", "notes", "workspace", "writing"],
    image: null,
    color: "#fff",
    reviewList: [
      { author: "Emma B.", date: "May 2025", rating: 5, text: "The meeting notes summary alone saves my team hours every week.", color: "#7c3aed" },
      { author: "Leo K.", date: "Mar 2025", rating: 4, text: "Good but can be slow on large workspaces.", color: "#00dcc8" }
    ]
  },
  {
    id: 5,
    name: "Perplexity AI",
    category: "Research",
    emoji: "🔍",
    description: "AI-powered search engine that gives cited, up-to-date answers instead of blue links.",
    fullDescription: "Perplexity reimagines search as a conversational research tool. Instead of a list of links, you get a synthesized answer with real-time source citations. Its Pro tier unlocks advanced models, image uploads, and longer context for deep research tasks. Perfect for students, journalists, and analysts.",
    features: ["Real-time web search", "Source citations", "Follow-up questions", "File & image analysis", "Focus modes (Academic, YouTube, Reddit)", "Export to PDF/Markdown"],
    pros: ["Always up-to-date", "Transparent sourcing", "Fast and accurate", "Free tier is generous"],
    cons: ["Pro required for best models", "Sources occasionally unreliable", "Limited creativity tasks"],
    price: "Freemium",
    priceDetail: "Free / $20/mo Pro",
    rating: 4.6,
    reviews: 9200,
    website: "https://perplexity.ai",
    tags: ["research", "search", "web", "citations"],
    image: null,
    color: "#20b2aa",
    reviewList: [
      { author: "Nina P.", date: "May 2025", rating: 5, text: "Replaced Google for most of my research. The citations are a game changer for academic work.", color: "#7c3aed" },
      { author: "Mark J.", date: "Apr 2025", rating: 4, text: "Great for current events. Sometimes misses niche topics though.", color: "#00dcc8" }
    ]
  },
  {
    id: 6,
    name: "Runway ML",
    category: "Video",
    emoji: "🎬",
    description: "Professional AI video generation and editing suite used by Hollywood studios.",
    fullDescription: "Runway is the leading AI video platform, offering text-to-video, image-to-video, inpainting, background removal, and motion tracking — all in the browser. Gen-3 Alpha produces cinematic quality short clips. Used by Netflix, Universal, and indie filmmakers worldwide.",
    features: ["Text-to-video (Gen-3)", "Image-to-video", "Inpainting & outpainting", "Background removal", "Motion tracking", "Frame interpolation"],
    pros: ["Professional quality output", "Constantly improving models", "Browser-based (no install)", "Extensive editing tools"],
    cons: ["Expensive credits system", "Short clip limits", "GPU queue times"],
    price: "Paid",
    priceDetail: "From $12/mo + credits",
    rating: 4.6,
    reviews: 4500,
    website: "https://runwayml.com",
    tags: ["video", "generation", "editing", "creative"],
    image: null,
    color: "#ff6b35",
    reviewList: [
      { author: "Olivia C.", date: "May 2025", rating: 5, text: "Gen-3 is genuinely cinematic. Used it for a client commercial.", color: "#7c3aed" },
      { author: "Ryan H.", date: "Apr 2025", rating: 4, text: "Credits burn fast but the quality justifies it for professional work.", color: "#00dcc8" }
    ]
  },
  {
    id: 7,
    name: "Copy.ai",
    category: "Marketing",
    emoji: "📣",
    description: "AI marketing copy generator for ads, social posts, emails, and campaign content at scale.",
    fullDescription: "Copy.ai is designed for marketing teams who need high-volume, on-brand content fast. Generate ad variations, email sequences, product descriptions, and social posts in seconds. Workflow automation lets you build multi-step content pipelines without code.",
    features: ["Ad copy generator", "Email sequence builder", "Social media templates", "Product descriptions", "Workflow automation", "Brand voice training"],
    pros: ["Fast content at scale", "170+ templates", "Multi-language support", "No code workflows"],
    cons: ["Output needs editing", "Brand voice training takes time", "Free tier is limited"],
    price: "Freemium",
    priceDetail: "Free / $49/mo Pro",
    rating: 4.3,
    reviews: 7800,
    website: "https://copy.ai",
    tags: ["marketing", "copywriting", "ads", "email"],
    image: null,
    color: "#9c27b0",
    reviewList: [
      { author: "Jen A.", date: "May 2025", rating: 4, text: "Cuts my ad copy time by 60%. Not always perfect but great starting point.", color: "#7c3aed" },
      { author: "Mike D.", date: "Mar 2025", rating: 5, text: "The workflow builder is underrated. Automated our entire email campaign.", color: "#00dcc8" }
    ]
  },
  {
    id: 8,
    name: "Figma AI",
    category: "Design",
    emoji: "🖼️",
    description: "AI design features baked into Figma — generate layouts, components, and content instantly.",
    fullDescription: "Figma's built-in AI suite lets designers move faster without leaving their canvas. Generate wireframe layouts from descriptions, auto-fill components with realistic content, rewrite UX copy, and remove backgrounds — all powered by AI and integrated with your design system.",
    features: ["Layout generation from text", "Content auto-fill", "Background removal", "UX copy rewriting", "Component suggestion", "Design-to-code"],
    pros: ["Native Figma integration", "Works with your design system", "No extra subscription needed (some tiers)", "Speeds up prototyping"],
    cons: ["Still maturing", "Requires Figma subscription", "Limited to Figma ecosystem"],
    price: "Freemium",
    priceDetail: "Included in Figma plans from $15/mo",
    rating: 4.4,
    reviews: 5300,
    website: "https://figma.com/ai",
    tags: ["design", "ui", "figma", "prototyping"],
    image: null,
    color: "#f24e1e",
    reviewList: [
      { author: "Chloe R.", date: "May 2025", rating: 4, text: "The layout generation is rough but saves time on wireframing. Getting better with each update.", color: "#7c3aed" },
      { author: "David N.", date: "Apr 2025", rating: 5, text: "Auto-fill with realistic content alone makes me faster on every project.", color: "#00dcc8" }
    ]
  },
  {
    id: 9,
    name: "Claude",
    category: "Text",
    emoji: "🤖",
    description: "Anthropic's thoughtful AI assistant known for nuanced reasoning, safety, and long-context tasks.",
    fullDescription: "Claude by Anthropic excels at nuanced analysis, long-document processing, and thoughtful writing. With a 200K token context window, it can read entire books, codebases, or legal documents in one go. Claude is preferred by researchers and professionals who need careful, well-reasoned output.",
    features: ["200K context window", "Document & PDF analysis", "Code review & generation", "Research synthesis", "Safety-focused design", "API access"],
    pros: ["Excellent long-form reasoning", "Handles huge documents", "Thoughtful and nuanced", "Strong safety record"],
    cons: ["Web features still expanding", "Less plugin ecosystem than GPT", "Slower for casual tasks"],
    price: "Freemium",
    priceDetail: "Free / $20/mo Pro",
    rating: 4.8,
    reviews: 8100,
    website: "https://claude.ai",
    tags: ["writing", "research", "coding", "analysis"],
    image: null,
    color: "#cc785c",
    reviewList: [
      { author: "Fatima S.", date: "May 2025", rating: 5, text: "The 200K context is a game changer for my legal research. Nothing else comes close.", color: "#7c3aed" },
      { author: "Ben L.", date: "Apr 2025", rating: 5, text: "Best model for nuanced writing tasks. The reasoning quality is excellent.", color: "#00dcc8" }
    ]
  },
  {
    id: 10,
    name: "Gamma",
    category: "Productivity",
    emoji: "📊",
    description: "AI presentation builder that turns prompts or docs into beautiful slide decks in seconds.",
    fullDescription: "Gamma reimagines presentations with AI at the core. Paste an outline, upload a document, or describe your topic, and Gamma generates a polished, interactive presentation. No design skills needed — just edit the content and you're done.",
    features: ["Text-to-presentation", "Document import", "Interactive elements", "One-click themes", "Analytics", "Export to PPT/PDF"],
    pros: ["Incredibly fast", "Beautiful default designs", "No design experience needed", "Generous free tier"],
    cons: ["Less customizable than PowerPoint", "Branding on free tier", "Requires internet connection"],
    price: "Freemium",
    priceDetail: "Free / $10/mo Plus",
    rating: 4.5,
    reviews: 11200,
    website: "https://gamma.app",
    tags: ["presentations", "slides", "productivity", "design"],
    image: null,
    color: "#7c3aed",
    reviewList: [
      { author: "Sophie T.", date: "May 2025", rating: 5, text: "Made a full pitch deck in 10 minutes. My VC was impressed by the polish.", color: "#7c3aed" },
      { author: "Ahmad K.", date: "Apr 2025", rating: 4, text: "Great for quick decks. Wish there was more layout control.", color: "#00dcc8" }
    ]
  },
  {
    id: 11,
    name: "ElevenLabs",
    category: "Text",
    emoji: "🎙️",
    description: "Ultra-realistic AI voice generation and cloning platform for creators and developers.",
    fullDescription: "ElevenLabs produces the most natural-sounding AI voices available. Clone any voice with as little as 30 seconds of audio, generate speech in 30+ languages, and use their API to power voice features in your app. Widely used for podcasts, audiobooks, and video dubbing.",
    features: ["Voice cloning", "30+ language support", "Emotion & pacing control", "Studio-quality output", "API access", "Sound effects generation"],
    pros: ["Industry-best voice quality", "Easy voice cloning", "Fast generation", "Generous API"],
    cons: ["Cloning raises ethical questions", "Credits system", "Best features are paid"],
    price: "Freemium",
    priceDetail: "Free / $5/mo Starter",
    rating: 4.7,
    reviews: 6400,
    website: "https://elevenlabs.io",
    tags: ["voice", "audio", "tts", "creative"],
    image: null,
    color: "#e91e63",
    reviewList: [
      { author: "Lisa M.", date: "May 2025", rating: 5, text: "Used it to narrate my audiobook. Listeners said they couldn't tell it was AI.", color: "#7c3aed" },
      { author: "Chris B.", date: "Apr 2025", rating: 5, text: "The voice cloning is eerie good. Built a custom assistant voice for my app in an hour.", color: "#00dcc8" }
    ]
  },
  {
    id: 12,
    name: "Stable Diffusion",
    category: "Image Generation",
    emoji: "🌌",
    description: "Open-source AI image generation model — run locally or via cloud, fully customizable.",
    fullDescription: "Stable Diffusion is the open-source powerhouse of AI image generation. Run it on your own hardware for unlimited free images, fine-tune it on custom datasets, and access thousands of community models on Civitai and HuggingFace. The ultimate creative freedom for technically inclined users.",
    features: ["Fully open source", "Local GPU execution", "Custom model fine-tuning", "ControlNet support", "10,000+ community models", "Inpainting & outpainting"],
    pros: ["Free to run locally", "Maximum customization", "Huge community & models", "No content restrictions (with care)"],
    cons: ["Requires technical setup", "GPU needed for best performance", "Steeper learning curve"],
    price: "Free",
    priceDetail: "Free (open source)",
    rating: 4.6,
    reviews: 18900,
    website: "https://stability.ai",
    tags: ["images", "open-source", "local", "customizable"],
    image: null,
    color: "#ff9800",
    reviewList: [
      { author: "Ivan R.", date: "May 2025", rating: 5, text: "Runs great on my 3090. Unlimited generations for free is unbeatable.", color: "#7c3aed" },
      { author: "Yuki T.", date: "Apr 2025", rating: 4, text: "The setup was tricky but ComfyUI made it much easier. Worth the effort.", color: "#00dcc8" }
    ]
  }
];

/* ════════════════════════════════════════════════════════
   2. STATE MANAGEMENT
   ════════════════════════════════════════════════════════ */
const State = {
  activeCategory: "All",
  activePriceFilter: "All",
  searchQuery: "",
  favorites: JSON.parse(localStorage.getItem("aic_favorites") || "[]"),

  setCategory(cat) { this.activeCategory = cat; App.render(); },
  setPrice(p)      { this.activePriceFilter = p; App.render(); },
  setSearch(q)     { this.searchQuery = q.toLowerCase(); App.render(); },

  toggleFavorite(id) {
    id = Number(id);
    const idx = this.favorites.indexOf(id);
    if (idx === -1) {
      this.favorites.push(id);
      Toast.show("Added to favorites ❤️", "success");
    } else {
      this.favorites.splice(idx, 1);
      Toast.show("Removed from favorites", "info");
    }
    localStorage.setItem("aic_favorites", JSON.stringify(this.favorites));
    // refresh fav buttons on page
    document.querySelectorAll(`.card-fav[data-id="${id}"]`).forEach(btn => {
      btn.classList.toggle("active", this.favorites.includes(id));
      btn.title = this.favorites.includes(id) ? "Remove from favorites" : "Add to favorites";
    });
  },

  isFav(id) { return this.favorites.includes(Number(id)); }
};

/* ════════════════════════════════════════════════════════
   3. FILTERING LOGIC
   ════════════════════════════════════════════════════════ */
function getFilteredTools() {
  return AI_TOOLS.filter(tool => {
    const matchCat   = State.activeCategory === "All" || tool.category === State.activeCategory;
    const matchPrice = State.activePriceFilter === "All" || tool.price === State.activePriceFilter;
    const matchSearch = !State.searchQuery ||
      tool.name.toLowerCase().includes(State.searchQuery) ||
      tool.description.toLowerCase().includes(State.searchQuery) ||
      tool.category.toLowerCase().includes(State.searchQuery) ||
      tool.tags.some(t => t.includes(State.searchQuery));
    return matchCat && matchPrice && matchSearch;
  });
}

/* ════════════════════════════════════════════════════════
   4. CARD RENDERER
   ════════════════════════════════════════════════════════ */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  let s = "";
  for (let i = 0; i < full; i++) s += "★";
  if (half) s += "½";
  while (s.replace("½","").length < 5) s += "☆";
  return s;
}

function highlight(text, query) {
  if (!query) return text;
  const re = new RegExp(`(${query})`, "gi");
  return text.replace(re, '<mark class="highlight">$1</mark>');
}

function createToolCard(tool) {
  const isFav = State.isFav(tool.id);
  const q = State.searchQuery;

  const card = document.createElement("article");
  card.className = "tool-card fade-up";
  card.style.animationDelay = `${Math.random() * 0.2}s`;

  card.innerHTML = `
    <div class="card-image">
      <div class="card-image-placeholder" style="--accent:${tool.color}">
        <span style="font-size:3rem">${tool.emoji}</span>
      </div>
      <span class="card-badge badge-${tool.price.toLowerCase()}">${tool.price}</span>
      <button class="card-fav ${isFav ? "active" : ""}"
              data-id="${tool.id}"
              title="${isFav ? "Remove from favorites" : "Add to favorites"}"
              aria-label="Toggle favorite">
        ${isFav ? "❤️" : "🤍"}
      </button>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="card-cat">${tool.category}</span>
        <div class="card-rating">
          <span style="color:var(--gold)">★</span>
          ${tool.rating}
          <span>(${(tool.reviews/1000).toFixed(1)}k)</span>
        </div>
      </div>
      <h3 class="card-name">${highlight(tool.name, q)}</h3>
      <p class="card-desc">${highlight(tool.description, q)}</p>
      <div class="card-footer">
        <a href="tool.html?id=${tool.id}" class="btn btn-primary btn-sm">View Details</a>
        <button class="btn btn-ghost btn-sm card-fav-btn" data-id="${tool.id}">
          ${isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  `;

  // Fav buttons — top-left icon + bottom button
  card.querySelectorAll("[data-id]").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      State.toggleFavorite(tool.id);
      // update both buttons in card
      const favIcon = card.querySelector(".card-fav");
      const favBtn  = card.querySelector(".card-fav-btn");
      const nowFav  = State.isFav(tool.id);
      favIcon.classList.toggle("active", nowFav);
      favIcon.innerHTML = nowFav ? "❤️" : "🤍";
      favBtn.innerHTML  = nowFav ? "❤️" : "🤍";
    });
  });

  return card;
}

/* ════════════════════════════════════════════════════════
   5. MAIN APP MODULE
   ════════════════════════════════════════════════════════ */
const App = {
  grid: null,

  init() {
    this.grid = document.getElementById("toolsGrid");
    if (!this.grid) return; // not on index page

    this.initHeader();
    this.initFilters();
    this.initSearch();
    this.showSkeletons(8);
    setTimeout(() => this.render(), 600); // simulate load
  },

  render() {
    if (!this.grid) return;
    const tools = getFilteredTools();
    this.grid.innerHTML = "";

    if (tools.length === 0) {
      this.grid.innerHTML = `
        <div class="no-results">
          <div class="icon">🔭</div>
          <h3>No tools found</h3>
          <p>Try adjusting your search or filters.</p>
          <button class="btn btn-ghost" onclick="App.resetFilters()">Reset Filters</button>
        </div>`;
      return;
    }

    tools.forEach(tool => this.grid.appendChild(createToolCard(tool)));
  },

  resetFilters() {
    State.activeCategory = "All";
    State.activePriceFilter = "All";
    State.searchQuery = "";
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.toggle("active", b.dataset.cat === "All"));
    document.querySelectorAll(".price-btn").forEach(b => b.classList.toggle("active", b.dataset.price === "All"));
    const si = document.getElementById("heroSearch");
    if (si) si.value = "";
    const fi = document.getElementById("filterSearch");
    if (fi) fi.value = "";
    this.render();
  },

  showSkeletons(n) {
    this.grid.innerHTML = Array(n).fill(0).map(() => `
      <div class="skeleton-card">
        <div class="skeleton skeleton-img"></div>
        <div class="skeleton-body">
          <div class="skeleton skeleton-line short"></div>
          <div class="skeleton skeleton-line medium" style="margin-top:8px"></div>
          <div class="skeleton skeleton-line" style="margin-top:8px"></div>
          <div class="skeleton skeleton-line" style="margin-top:8px"></div>
        </div>
      </div>`).join("");
  },

  initHeader() {
    // Sticky header shadow
    const header = document.querySelector(".header");
    if (header) {
      window.addEventListener("scroll", () =>
        header.classList.toggle("scrolled", window.scrollY > 20), { passive: true }
      );
    }

    // Mobile menu
    const ham   = document.getElementById("hamburger");
    const mMenu = document.getElementById("mobileMenu");
    if (ham && mMenu) {
      ham.addEventListener("click", () => {
        ham.classList.toggle("open");
        mMenu.classList.toggle("open");
      });
      // Close on link click
      mMenu.querySelectorAll("a").forEach(a =>
        a.addEventListener("click", () => {
          ham.classList.remove("open");
          mMenu.classList.remove("open");
        })
      );
    }

    // Highlight active nav link
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a, .mobile-menu a").forEach(a => {
      if (a.getAttribute("href") === path || (path === "" && a.getAttribute("href") === "index.html"))
        a.classList.add("active");
    });
  },

  initFilters() {
    // Category buttons
    document.querySelectorAll(".cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        State.setCategory(btn.dataset.cat);
      });
    });

    // Price toggle
    document.querySelectorAll(".price-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".price-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        State.setPrice(btn.dataset.price);
      });
    });
  },

  initSearch() {
    const inputs = ["heroSearch", "filterSearch"].map(id => document.getElementById(id)).filter(Boolean);
    inputs.forEach(input => {
      input.addEventListener("input", debounce(e => {
        inputs.forEach(i => { if (i !== e.target) i.value = e.target.value; });
        State.setSearch(e.target.value);
      }, 300));
    });
  }
};

/* ════════════════════════════════════════════════════════
   6. TOOL DETAIL PAGE
   ════════════════════════════════════════════════════════ */
const ToolPage = {
  init() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const tool = AI_TOOLS.find(t => t.id === id);

    if (!tool) {
      document.getElementById("toolContent").innerHTML = `
        <div class="no-results" style="padding:120px 24px">
          <div class="icon">🔍</div>
          <h3>Tool not found</h3>
          <p>The tool you're looking for doesn't exist.</p>
          <a href="index.html" class="btn btn-primary">Browse Catalog</a>
        </div>`;
      return;
    }

    document.title = `${tool.name} — AI Tools Catalog`;
    App.initHeader();

    // Update meta
    const el = id => document.getElementById(id);

    el("toolEmoji").textContent    = tool.emoji;
    el("toolName").textContent     = tool.name;
    el("toolCat").textContent      = tool.category;
    el("toolBadge").textContent    = tool.price;
    el("toolBadge").className      = `card-badge badge-${tool.price.toLowerCase()}`;
    el("toolRating").textContent   = `★ ${tool.rating} (${(tool.reviews/1000).toFixed(1)}k reviews)`;
    el("toolDesc").textContent     = tool.fullDescription;
    el("toolPrice").textContent    = tool.priceDetail;
    el("toolWebsite").href         = tool.website;
    el("toolWebsite").textContent  = `Visit ${tool.name} →`;

    // Features
    el("toolFeatures").innerHTML = tool.features.map(f => `<li>${f}</li>`).join("");

    // Pros & cons
    el("toolPros").innerHTML = tool.pros.map(p => `<li>${p}</li>`).join("");
    el("toolCons").innerHTML = tool.cons.map(c => `<li>${c}</li>`).join("");

    // Reviews
    el("toolReviews").innerHTML = tool.reviewList.map(r => `
      <div class="review-card fade-up">
        <div class="review-header">
          <div class="reviewer-info">
            <div class="reviewer-avatar" style="background:${r.color}">
              ${r.author.charAt(0)}
            </div>
            <div>
              <div class="reviewer-name">${r.author}</div>
              <div class="reviewer-date">${r.date}</div>
            </div>
          </div>
          <div class="review-stars">${"★".repeat(r.rating)}</div>
        </div>
        <p class="review-text">${r.text}</p>
      </div>`).join("");

    // Fav button
    const favBtn = el("favBtn");
    if (favBtn) {
      const updateFavBtn = () => {
        const isFav = State.isFav(tool.id);
        favBtn.innerHTML = `${isFav ? "❤️" : "🤍"} ${isFav ? "Saved" : "Save to Favorites"}`;
      };
      updateFavBtn();
      favBtn.addEventListener("click", () => {
        State.toggleFavorite(tool.id);
        updateFavBtn();
      });
    }

    // Back button
    el("backBtn")?.addEventListener("click", () => history.back());
  }
};

/* ════════════════════════════════════════════════════════
   7. FAVORITES PAGE
   ════════════════════════════════════════════════════════ */
const FavoritesPage = {
  init() {
    App.initHeader();
    this.render();
  },

  render() {
    const grid  = document.getElementById("favGrid");
    const empty = document.getElementById("emptyState");
    if (!grid) return;

    const favTools = AI_TOOLS.filter(t => State.isFav(t.id));

    if (favTools.length === 0) {
      grid.style.display    = "none";
      empty.style.display   = "block";
    } else {
      grid.style.display    = "grid";
      empty.style.display   = "none";
      grid.innerHTML = "";
      favTools.forEach(tool => grid.appendChild(createToolCard(tool)));
    }
  }
};

/* ════════════════════════════════════════════════════════
   8. AUTH PAGES
   ════════════════════════════════════════════════════════ */
const AuthPage = {
  init() {
    App.initHeader();

    const loginForm    = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
      loginForm.addEventListener("submit", e => {
        e.preventDefault();
        Toast.show("Logged in successfully! 🎉", "success");
        setTimeout(() => window.location.href = "index.html", 1000);
      });
    }

    if (registerForm) {
      registerForm.addEventListener("submit", e => {
        e.preventDefault();
        Toast.show("Account created! Welcome aboard 🚀", "success");
        setTimeout(() => window.location.href = "index.html", 1000);
      });
    }

    // Tab switching
    document.querySelectorAll(".auth-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.target;
        document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".auth-panel").forEach(p => p.style.display = "none");
        tab.classList.add("active");
        document.getElementById(target).style.display = "block";
      });
    });
  }
};

/* ════════════════════════════════════════════════════════
   9. ADMIN PAGE
   ════════════════════════════════════════════════════════ */
const AdminPage = {
  init() {
    App.initHeader();
    this.renderStats();
    this.renderTable();

    document.querySelectorAll(".sidebar-link").forEach(link => {
      link.addEventListener("click", () => {
        document.querySelectorAll(".sidebar-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    // Add tool modal
    const addBtn = document.getElementById("addToolBtn");
    const modal  = document.getElementById("addToolModal");
    const closeBtn = document.getElementById("modalClose");

    if (addBtn && modal) {
      addBtn.addEventListener("click", () => modal.classList.add("open"));
      closeBtn?.addEventListener("click", () => modal.classList.remove("open"));
      modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("open"); });
    }

    document.getElementById("addToolForm")?.addEventListener("submit", e => {
      e.preventDefault();
      Toast.show("Tool added successfully! ✅", "success");
      modal?.classList.remove("open");
    });
  },

  renderStats() {
    const total     = AI_TOOLS.length;
    const freeCount = AI_TOOLS.filter(t => t.price === "Free").length;
    const paid      = AI_TOOLS.filter(t => t.price === "Paid").length;
    const avgRating = (AI_TOOLS.reduce((s,t)=>s+t.rating,0)/total).toFixed(1);

    document.getElementById("statTotal")  && (document.getElementById("statTotal").textContent  = total);
    document.getElementById("statFree")   && (document.getElementById("statFree").textContent   = freeCount);
    document.getElementById("statPaid")   && (document.getElementById("statPaid").textContent   = paid);
    document.getElementById("statRating") && (document.getElementById("statRating").textContent = avgRating);
  },

  renderTable() {
    const tbody = document.getElementById("adminTableBody");
    if (!tbody) return;
    tbody.innerHTML = AI_TOOLS.map(t => `
      <tr>
        <td>${t.emoji} <strong>${t.name}</strong></td>
        <td>${t.category}</td>
        <td><span class="card-badge badge-${t.price.toLowerCase()}" style="position:static">${t.price}</span></td>
        <td>★ ${t.rating}</td>
        <td>${(t.reviews/1000).toFixed(1)}k</td>
        <td>
          <button class="btn btn-ghost btn-sm" onclick="Toast.show('Edit coming soon', 'info')">Edit</button>
          <button class="btn btn-ghost btn-sm" style="color:var(--pink)" onclick="Toast.show('Delete blocked in demo', 'error')">Delete</button>
        </td>
      </tr>`).join("");
  }
};

/* ════════════════════════════════════════════════════════
   10. TOAST NOTIFICATION SYSTEM
   ════════════════════════════════════════════════════════ */
const Toast = {
  container: null,

  get el() {
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.className = "toast-container";
      document.body.appendChild(this.container);
    }
    return this.container;
  },

  show(message, type = "info", duration = 3000) {
    const icons = { success: "✅", error: "❌", info: "ℹ️" };
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${message}</span>`;
    this.el.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("removing");
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

/* ════════════════════════════════════════════════════════
   11. UTILS
   ════════════════════════════════════════════════════════ */
function debounce(fn, delay) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

/* ════════════════════════════════════════════════════════
   12. PAGE ROUTER — auto-detect & init correct module
   ════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";

  if (path === "index.html" || path === "" || path === "/") {
    App.init();
  } else if (path === "tool.html") {
    ToolPage.init();
  } else if (path === "favorites.html") {
    FavoritesPage.init();
  } else if (path === "login.html") {
    AuthPage.init();
  } else if (path === "admin.html") {
    AdminPage.init();
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });
});

/* ════════════════════════════════════════════════════════
   13. EXPORT FOR HTML PAGES (global access)
   ════════════════════════════════════════════════════════ */
window.App     = App;
window.State   = State;
window.Toast   = Toast;
window.AI_TOOLS = AI_TOOLS;
