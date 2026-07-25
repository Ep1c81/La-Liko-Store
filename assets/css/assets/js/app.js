// Sample Dynamic Product Data for La Liko Store
const products = [
  {
    id: 1,
    title: "Don Julio 1942 Añejo Tequila",
    category: "featured",
    price: "$180.00",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "Johnnie Walker Blue Label",
    category: "featured",
    price: "$230.00",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    tag: "Premium Choice"
  },
  {
    id: 3,
    title: "Dom Pérignon Vintage Champagne",
    category: "new",
    price: "$260.00",
    image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?q=80&w=800&auto=format&fit=crop",
    tag: "New Arrival"
  }
];

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  renderProducts('all');
  setupFilterListeners();
});

function renderProducts(filter) {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col";
    
    card.innerHTML = `
      <div class="relative h-64 overflow-hidden bg-zinc-950">
        <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <span class="absolute top-4 left-4 bg-amber-500 text-zinc-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
          ${product.tag}
        </span>
      </div>
      <div class="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 class="text-xl font-bold text-white mb-2">${product.title}</h3>
          <p class="text-amber-400 font-extrabold text-2xl mb-4">${product.price}</p>
        </div>
        <button onclick="orderProduct('${product.title}')" class="w-full py-3 rounded-xl font-semibold bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-white transition-all flex items-center justify-center gap-2">
          <span>Order via WhatsApp</span>
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

function setupFilterListeners() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      buttons.forEach(b => b.classList.remove("active-filter"));
      e.target.classList.add("active-filter");
      renderProducts(e.target.dataset.category);
    });
  });
}

function orderProduct(productName) {
  const message = encodeURIComponent(`Hello La Liko Store! I would like to order: ${productName}`);
  // Replace with actual phone number
  window.open(`https://wa.me/?text=${message}`, '_blank');
}
