// La Liko Store - Dynamic Currency & Multilingual App State
let currentLang = 'es'; // 'es' | 'en'
let currentCurrency = 'CRC'; // 'CRC' | 'USD'
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
    catalogTitle: "Catálogo Completo",
    catalogSubtitle: "Selecciona una categoría para ver productos y precios.",
    orderBtn: "Pedir por WhatsApp",
    waMsg: "Hola La Liko Store! Me gustaría solicitar el siguiente pedido:"
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
    catalogTitle: "Full Catalog",
    catalogSubtitle: "Select a category to view items and prices.",
    orderBtn: "Order via WhatsApp",
    waMsg: "Hello La Liko Store! I would like to place an order for:"
  }
};

// Real La Liko Store Menu Catalog with Images & Local Prices
const products = [
  // Licores / Spirits
  {
    id: 1,
    title: { es: "Cacique Guaro Tradicional 1L", en: "Cacique Guaro Traditional 1L" },
    category: "liquor",
    priceCRC: 9500,
    featured: true,
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Popular Costa Rica", en: "CR Favorite" }
  },
  {
    id: 2,
    title: { es: "Tequila Don Julio 1942 750ml", en: "Don Julio 1942 Tequila 750ml" },
    category: "liquor",
    priceCRC: 90000,
    featured: true,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Ultra Premium", en: "Ultra Premium" }
  },
  {
    id: 3,
    title: { es: "Ron Flor de Caña 12 Años 750ml", en: "Flor de Caña 12 Year Rum 750ml" },
    category: "liquor",
    priceCRC: 17500,
    featured: false,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Recomendado", en: "Recommended" }
  },

  // Cervezas / Beers
  {
    id: 4,
    title: { es: "Cerveza Imperial Pack (6 Latas)", en: "Imperial Beer 6-Pack (Cans)" },
    category: "beer",
    priceCRC: 6000,
    featured: true,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Fría Express", en: "Cold Express" }
  },
  {
    id: 5,
    title: { es: "Cerveza Heineken Pack (6 Botellas)", en: "Heineken Beer 6-Pack (Bottles)" },
    category: "beer",
    priceCRC: 7000,
    featured: false,
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Importada", en: "Imported" }
  },

  // Mezcladores / Mixers
  {
    id: 6,
    title: { es: "Coca-Cola Sin Azúcar 2.5L", en: "Coca-Cola Zero Sugar 2.5L" },
    category: "mixers",
    priceCRC: 2570,
    featured: false,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Mezclador", en: "Mixer" }
  },
  {
    id: 7,
    title: { es: "Ocean Spray Jugo de Arándano 1L", en: "Ocean Spray Cranberry Juice 1L" },
    category: "mixers",
    priceCRC: 5995,
    featured: false,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Mezclador", en: "Mixer" }
  },

  // Snacks
  {
    id: 8,
    title: { es: "Pringles Original 149g", en: "Pringles Original 149g" },
    category: "snacks",
    priceCRC: 2450,
    featured: true,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Snack Top", en: "Top Snack" }
  },
  {
    id: 9,
    title: { es: "Maní Fiesta Mix Pro 300g", en: "Fiesta Mix Pro Peanuts 300g" },
    category: "snacks",
    priceCRC: 2500,
    featured: false,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=800&auto=format&fit=crop",
    tag: { es: "Snack", en: "Snack" }
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

    const card = document.createElement("div");
    card.className = "bg-zinc-900 border border-amber-500/20 rounded-xl overflow-hidden p-4 flex flex-col justify-between";
    card.innerHTML = `
      <div class="relative h-40 mb-3 overflow-hidden rounded-lg bg-zinc-950">
        <img src="${item.image}" alt="${titleText}" class="w-full h-full object-cover" />
        <span class="absolute top-2 left-2 bg-amber-500 text-zinc-950 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase">
          ${tagText}
        </span>
      </div>
      <div>
        <h4 class="font-bold text-sm text-white mb-1 line-clamp-1">${titleText}</h4>
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
          <h3 class="text-xl font-bold text-white mb-2">${titleText}</h3>
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
      updateStaticTexts();
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

function updateStaticTexts() {
  const t = i18n[currentLang];
  
  const navFeatured = document.getElementById("nav-featured");
  const navCatalog = document.getElementById("nav-catalog");
  const navCta = document.getElementById("nav-cta");
  const heroBadge = document.getElementById("hero-badge");
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroBtnExplore = document.getElementById("hero-btn-explore");
  const featuredTitle = document.getElementById("section-featured-title");
  const catalogTitle = document.getElementById("catalog-title");
  const catalogSubtitle = document.getElementById("catalog-subtitle");

  if (navFeatured) navFeatured.textContent = t.navFeatured;
  if (navCatalog) navCatalog.textContent = t.navCatalog;
  if (navCta) navCta.textContent = t.navCta;
  if (heroTitle) heroTitle.innerHTML = `${t.heroTitle.split('.')[0]}<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">${t.heroTitle.split('.')[1] || ''}</span>`;
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
  if (heroBtnExplore) heroBtnExplore.textContent = t.heroBtnExplore;
  if (catalogTitle) catalogTitle.textContent = t.catalogTitle;
  if (catalogSubtitle) catalogSubtitle.textContent = t.catalogSubtitle;
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
