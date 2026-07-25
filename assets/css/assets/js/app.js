// La Liko Store - Dynamic Inventory App
let currentLang = 'es'; 
let currentCurrency = 'CRC'; 
const exchangeRate = 500; // ₡500 per $1 USD

const i18n = {
  es: {
    navFeatured: "Destacados",
    navCatalog: "Catálogo",
    navCta: "Ordenar",
    heroBadge: "Express Santa Ana & San José",
    heroTitle: "Licores Premium, Snacks & Entrega Rápida.",
    heroSubtitle: "Vinos, cervezas frías, licores finos, bocadillos y mezcladores directos a tu casa o evento.",
    heroBtnExplore: "Explorar Menú",
    featuredTitle: "Lo Más Pedido en Santa Ana",
    catalogTitle: "Nuestros Productos",
    catalogSubtitle: "Precios oficiales de La Liko Store con opción express.",
    orderBtn: "Pedir por WhatsApp",
    waMsg: "Hola La Liko Store! Me gustaría ordenar:"
  },
  en: {
    navFeatured: "Featured",
    navCatalog: "Catalog",
    navCta: "Order Now",
    heroBadge: "Express Santa Ana & San José",
    heroTitle: "Premium Spirits, Snacks & Fast Express.",
    heroSubtitle: "Fine wines, cold beers, premium liquors, mixers, and snacks delivered straight to you.",
    heroBtnExplore: "Explore Menu",
    featuredTitle: "Top Ordered in Santa Ana",
    catalogTitle: "Our Products",
    catalogSubtitle: "Official La Liko Store prices with express delivery.",
    orderBtn: "Order via WhatsApp",
    waMsg: "Hello La Liko Store! I would like to order:"
  }
};

// Complete La Liko Store Inventory from Spreadsheet
const products = [
  // --- WINE ---
  {
    id: 1,
    title: { es: "Marqués de Cáceres Tinto Crianza Rioja", en: "Marqués de Cáceres Red Crianza Rioja" },
    size: "750 ml",
    abv: "14%",
    category: "wine",
    priceCRC: 15840,
    featured: true,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Vino Tinto", en: "Red Wine" }
  },
  {
    id: 2,
    title: { es: "Vino Rucio Sangría", en: "Vino Rucio Sangría" },
    size: "1 L",
    abv: "7%",
    category: "wine",
    priceCRC: 4356,
    featured: false,
    image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Sangría", en: "Sangria" }
  },
  {
    id: 3,
    title: { es: "Vino Casillero del Diablo Malbec", en: "Casillero del Diablo Malbec Wine" },
    size: "750 ml",
    abv: "",
    category: "wine",
    priceCRC: 9240,
    featured: false,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Vino Tinto", en: "Red Wine" }
  },
  {
    id: 4,
    title: { es: "Vino Frontera Merlot", en: "Frontera Merlot Wine" },
    size: "750 ml",
    abv: "",
    category: "wine",
    priceCRC: 6996,
    featured: false,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Vino Tinto", en: "Red Wine" }
  },
  {
    id: 5,
    title: { es: "Vino Frontera Sauvignon Blanc", en: "Frontera Sauvignon Blanc Wine" },
    size: "750 ml",
    abv: "",
    category: "wine",
    priceCRC: 6996,
    featured: false,
    image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Vino Blanco", en: "White Wine" }
  },
  {
    id: 6,
    title: { es: "Peñasol Sangría Blanca Original", en: "Peñasol White Sangria Original" },
    size: "1 L",
    abv: "7%",
    category: "wine",
    priceCRC: 4422,
    featured: false,
    image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Sangría", en: "Sangria" }
  },

  // --- TEQUILA & MEZCAL ---
  {
    id: 7,
    title: { es: "Tequila Gran Malo Joven", en: "Gran Malo Joven Tequila" },
    size: "750 ml",
    abv: "40%",
    category: "tequila",
    priceCRC: 26400,
    featured: true,
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Tequila", en: "Tequila" }
  },
  {
    id: 8,
    title: { es: "Horchata Mezcal 400", en: "Horchata Mezcal 400" },
    size: "750 ml",
    abv: "",
    category: "tequila",
    priceCRC: 31020,
    featured: true,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Mezcal", en: "Mezcal" }
  },
  {
    id: 9,
    title: { es: "Conejos Espadín Tamarindo", en: "Conejos Espadín Tamarind Mezcal" },
    size: "750 ml",
    abv: "30%",
    category: "tequila",
    priceCRC: 15840,
    featured: false,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Mezcal Artesanal", en: "Artisanal Mezcal" }
  },
  {
    id: 10,
    title: { es: "Tequila 1800 Silver", en: "1800 Silver Tequila" },
    size: "750 ml",
    abv: "",
    category: "tequila",
    priceCRC: 75900,
    featured: false,
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Tequila Premium", en: "Premium Tequila" }
  },
  {
    id: 11,
    title: { es: "Don Julio Tequila Añejo", en: "Don Julio Añejo Tequila" },
    size: "750 ml",
    abv: "",
    category: "tequila",
    priceCRC: 22440,
    featured: true,
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Destacado", en: "Featured" }
  },
  {
    id: 12,
    title: { es: "Gran Malo Licor Con Tequila / El Jimador", en: "Gran Malo Tequila Liqueur / El Jimador" },
    size: "750 ml",
    abv: "",
    category: "tequila",
    priceCRC: 19140,
    featured: false,
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Tequila", en: "Tequila" }
  },

  // --- BEER & CIDER ---
  {
    id: 13,
    title: { es: "Imperial Cerveza Light", en: "Imperial Light Beer" },
    size: "350 ml",
    abv: "",
    category: "beer",
    priceCRC: 1122,
    featured: false,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Fría", en: "Cold" }
  },
  {
    id: 14,
    title: { es: "Imperial Cerveza Regular", en: "Imperial Regular Beer" },
    size: "350 ml",
    abv: "4.5%",
    category: "beer",
    priceCRC: 1122,
    featured: true,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Popular CR", en: "Top CR" }
  },
  {
    id: 15,
    title: { es: "Heineken Cerveza Lager", en: "Heineken Lager Beer" },
    size: "355 ml",
    abv: "5%",
    category: "beer",
    priceCRC: 1400,
    featured: false,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Importada", en: "Imported" }
  },
  {
    id: 16,
    title: { es: "Heineken Cerveza Original", en: "Heineken Original Beer" },
    size: "330 ml",
    abv: "",
    category: "beer",
    priceCRC: 1848,
    featured: false,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Importada", en: "Imported" }
  },
  {
    id: 17,
    title: { es: "Pilsen Cerveza Rubia Regular", en: "Pilsen Regular Blonde Beer" },
    size: "350 ml",
    abv: "4.4%",
    category: "beer",
    priceCRC: 1122,
    featured: false,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Nacional", en: "Local" }
  },
  {
    id: 18,
    title: { es: "Imperial Cerveza Ultra", en: "Imperial Ultra Beer" },
    size: "350 ml",
    abv: "4%",
    category: "beer",
    priceCRC: 1122,
    featured: false,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Low Cal", en: "Low Cal" }
  }
];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  setupToggles();
  renderFeatured();
  renderProducts('all');
  setupFilterListeners();
  
  if (window.lucide) {
    lucide.createIcons();
  }
});

function formatPrice(priceCRC) {
  if (currentCurrency === 'CRC') {
    return `₡${priceCRC.toLocaleString()}`;
  }
  const priceUSD = priceCRC / exchangeRate;
  return `$${priceUSD.toFixed(2)}`;
}

function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const featuredItems = products.filter(p => p.featured);

  featuredItems.forEach(item => {
    const titleText = item.title[currentLang];
    const tagText = item.tag[currentLang];
    const priceText = formatPrice(item.priceCRC);
    const metaDetails = item.abv ? `${item.size} • ${item.abv}` : item.size;

    const card = document.createElement("div");
    card.className = "bg-zinc-900 border border-amber-500/20 rounded-xl overflow-hidden p-4 flex flex-col justify-between";
    card.innerHTML = `
      <div class="relative h-44 mb-3 overflow-hidden rounded-lg bg-zinc-950">
        <img src="${item.image}" alt="${titleText}" class="w-full h-full object-cover" />
        <span class="absolute top-2 left-2 bg-amber-500 text-zinc-950 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase">
          ${tagText}
        </span>
      </div>
      <div>
        <h4 class="font-bold text-sm text-white mb-1 line-clamp-1">${titleText}</h4>
        <p class="text-xs text-zinc-400 mb-2">${metaDetails}</p>
        <p class="text-amber-400 font-black text-lg mb-3">${priceText}</p>
        <button onclick="orderProduct('${titleText}', '${priceText}')" class="w-full py-2 rounded-lg text-xs font-bold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors">
          ${i18n[currentLang].orderBtn}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderProducts(filter) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const titleText = product.title[currentLang];
    const tagText = product.tag[currentLang];
    const priceText = formatPrice(product.priceCRC);
    const metaDetails = product.abv ? `${product.size} • Alc. ${product.abv}` : product.size;

    const card = document.createElement("div");
    card.className = "product-card bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between";
    
    card.innerHTML = `
      <div class="relative h-60 overflow-hidden bg-zinc-950">
        <img src="${product.image}" alt="${titleText}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <span class="absolute top-4 left-4 bg-amber-500 text-zinc-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          ${tagText}
        </span>
      </div>
      <div class="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 class="text-xl font-bold text-white mb-1">${titleText}</h3>
          <p class="text-xs font-semibold text-zinc-400 mb-3">${metaDetails}</p>
          <p class="text-amber-400 font-extrabold text-2xl mb-4">${priceText}</p>
        </div>
        <button onclick="orderProduct('${titleText}', '${priceText}')" class="w-full py-3 rounded-xl font-semibold bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-white transition-all flex items-center justify-center gap-2 cursor-pointer">
          <span>${i18n[currentLang].orderBtn}</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}

function setupToggles() {
  const langBtn = document.getElementById("toggle-lang");
  const langLabel = document.getElementById("lang-label");
  const currBtn = document.getElementById("toggle-currency");
  const currLabel = document.getElementById("curr-label");

  if (langBtn) {
    langBtn.onclick = () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      if (langLabel) langLabel.textContent = currentLang === 'es' ? '🇲🇽 ES' : '🇺🇸 EN';
      renderFeatured();
      renderProducts('all');
    };
  }

  if (currBtn) {
    currBtn.onclick = () => {
      currentCurrency = currentCurrency === 'CRC' ? 'USD' : 'CRC';
      if (currLabel) currLabel.textContent = currentCurrency === 'CRC' ? '₡ CRC' : '$ USD';
      renderFeatured();
      renderProducts('all');
    };
  }
}

function setupFilterListeners() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.onclick = (e) => {
      buttons.forEach(b => b.classList.remove("active-filter"));
      e.target.classList.add("active-filter");
      renderProducts(e.target.dataset.category);
    };
  });
}

function orderProduct(title, price) {
  const msgText = i18n[currentLang].waMsg;
  const message = encodeURIComponent(`${msgText}\n- ${title} (${price})`);
  window.open(`https://wa.me/?text=${message}`, '_blank');
}
