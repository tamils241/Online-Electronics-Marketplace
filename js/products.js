/* =========================================================
   STACKLY ELECTRONICS MARKETPLACE
   PRODUCT DATA
   Shared product database used by all pages
========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Stackly Pro X Smartphone",
    category: "Smartphones",
    price: 49999,
    oldPrice: 59999,
    rating: 5,
    reviews: 124,
    badge: "-20%",
    badgeType: "sale",
    image: "images/products/Pro X Smartphone.webp",
    tag: "flash",
    description:
      "Flagship-grade 6.7\" AMOLED display, 200MP camera system, 5G support and all-day battery. Experience next-generation mobile computing in your pocket.",
    features: [
      "6.7\" 120Hz AMOLED display",
      "200MP triple camera system",
      "8GB RAM + 256GB storage",
      "5000mAh battery with 65W fast charging",
      "5G + Wi-Fi 6 connectivity",
    ],
  },
  {
    id: 2,
    name: "Stackly UltraBook 14",
    category: "Laptops",
    price: 74999,
    oldPrice: 84999,
    rating: 5,
    reviews: 89,
    badge: "HOT",
    badgeType: "hot",
    image: "images/products/UltraBook 14.webp",
    tag: "trending",
    description:
      "A feather-light 14\" ultrabook with an 11th-gen processor, stunning 2.8K display and 16-hour battery life for professionals on the move.",
    features: [
      "14\" 2.8K OLED display",
      "Intel Core i7, 16GB RAM, 512GB SSD",
      "1.1kg ultra-light aluminium body",
      "16-hour battery life",
      "Thunderbolt 4 + Wi-Fi 6",
    ],
  },
  {
    id: 3,
    name: "Stackly NoiseCancel Pro",
    category: "Headphones",
    price: 6499,
    oldPrice: 7999,
    rating: 5,
    reviews: 210,
    badge: "-15%",
    badgeType: "sale",
    image: "images/products/NoiseCancel Pro.webp",
    tag: "flash",
    description:
      "Premium over-ear headphones with active noise cancellation, studio-grade sound and 40 hours of wireless playback.",
    features: [
      "Hybrid active noise cancellation",
      "40mm custom drivers, Hi-Res audio",
      "40-hour battery with quick charge",
      "Multipoint Bluetooth 5.3",
      "Foldable, travel-friendly design",
    ],
  },
  {
    id: 4,
    name: "Stackly Tab Ultra 11",
    category: "Tablets",
    price: 32999,
    oldPrice: 37999,
    rating: 4,
    reviews: 156,
    badge: "NEW",
    badgeType: "new",
    image: "images/products/Tab Ultra 11.webp",
    tag: "trending",
    description:
      "An 11\" 2K tablet with quad speakers, optional stylus support and a paper-matte display for work and entertainment.",
    features: [
      "11\" 2K 120Hz display",
      "Dolby Atmos quad speakers",
      "8GB RAM + 128GB storage",
      "Compatible with Stylus + keyboard",
      "1TB expandable storage",
    ],
  },
  {
    id: 5,
    name: "Stackly Watch S2",
    category: "Smart Watches",
    price: 7499,
    oldPrice: 9999,
    rating: 4,
    reviews: 340,
    badge: "-25%",
    badgeType: "sale",
    image: "images/products/Watch S2.webp",
    tag: "best",
    description:
      "Track every heartbeat, step and workout with advanced health sensors on a bright always-on AMOLED display.",
    features: [
      "1.43\" AMOLED always-on display",
      "Heart rate, SpO2 & sleep tracking",
      "110+ sports modes",
      "5ATM water resistance",
      "10-day battery life",
    ],
  },
  {
    id: 6,
    name: "Stackly Mirrorless Camera X1",
    category: "Cameras",
    price: 65999,
    oldPrice: 72999,
    rating: 5,
    reviews: 63,
    badge: "HOT",
    badgeType: "hot",
    image: "images/products/Mirrorless Camera X1.webp",
    tag: "trending",
    description:
      "A 26MP APS-C mirrorless camera with 4K 60fps video, in-body stabilisation and an intuitive touchscreen interface.",
    features: [
      "26.1MP APS-C CMOS sensor",
      "4K 60fps 10-bit video",
      "5-axis in-body image stabilisation",
      "Dual SD card slots",
      "Wi-Fi + Bluetooth sharing",
    ],
  },
  {
    id: 7,
    name: "Stackly Smart TV QLED 55\"",
    category: "TVs & Displays",
    price: 54999,
    oldPrice: 64999,
    rating: 4,
    reviews: 198,
    badge: "-15%",
    badgeType: "sale",
    image: "images/products/Smart TV QLED.webp",
    tag: "flash",
    description:
      "Cinematic QLED picture with 4K resolution, local dimming and a smart OS with all your favourite streaming apps built in.",
    features: [
      "55\" 4K QLED panel",
      "Dolby Vision + Dolby Atmos",
      "120Hz refresh rate",
      "Built-in Google TV",
      "Voice remote included",
    ],
  },
  {
    id: 8,
    name: "Stackly Gaming Console Pro",
    category: "Gaming",
    price: 44999,
    oldPrice: 49999,
    rating: 5,
    reviews: 276,
    badge: "HOT",
    badgeType: "hot",
    image: "images/products/Gaming Console Pro.webp",
    tag: "best",
    description:
      "Play the biggest games in stunning 4K with ultra-fast SSD loading, ray tracing and an immersive haptic controller.",
    features: [
      "4K 60fps gaming with ray tracing",
      "1TB ultra-fast SSD",
      "Haptic feedback controller",
      "Backward compatible library",
      "Wi-Fi 6 + Bluetooth 5.2",
    ],
  },
  {
    id: 9,
    name: "Stackly Mechanical Keyboard K87",
    category: "Computer Accessories",
    price: 4499,
    oldPrice: 5499,
    rating: 4,
    reviews: 412,
    badge: "-18%",
    badgeType: "sale",
    image: "images/products/Mechanical Keyboard K87.webp",
    tag: "trending",
    description:
      "A hot-swappable 87-key mechanical keyboard with RGB backlighting, PBT keycaps and responsive linear switches.",
    features: [
      "Hot-swappable mechanical switches",
      "Full RGB per-key lighting",
      "Double-shot PBT keycaps",
      "Tri-mode: wired/2.4G/Bluetooth",
      "20+ hour battery",
    ],
  },
  {
    id: 10,
    name: "Stackly Smart Bulb Starter Kit",
    category: "Smart Home",
    price: 1999,
    oldPrice: 2799,
    rating: 4,
    reviews: 530,
    badge: "-28%",
    badgeType: "sale",
    image: "images/products/Smart Bulb Starter Kit_11zon.webp",
    tag: "flash",
    description:
      "Bring voice-controlled, colour-changing lighting to any room with this 2-pack starter kit and free app.",
    features: [
      "16 million colours + warm white",
      "Works with Alexa & Google Assistant",
      "App scheduling & routines",
      "No hub required",
      "Energy-efficient LED",
    ],
  },
  {
    id: 11,
    name: "Stackly Party Speaker 360",
    category: "Speakers",
    price: 8999,
    oldPrice: 10999,
    rating: 4,
    reviews: 184,
    badge: "-18%",
    badgeType: "sale",
    image: "images/products/Party Speaker 360.webp",
    tag: "best",
    description:
      "Room-filling 360° sound with dynamic LED light show, deep bass and a rugged waterproof body for parties anywhere.",
    features: [
      "360° immersive sound",
      "Dynamic LED light show",
      "IPX6 waterproof",
      "24-hour playtime",
      "TWS pairing for stereo",
    ],
  },
  {
    id: 12,
    name: "Stackly Wi-Fi 6 Router AX3000",
    category: "Networking",
    price: 3999,
    oldPrice: 4999,
    rating: 5,
    reviews: 267,
    badge: "NEW",
    badgeType: "new",
    image: "images/products/Wi-Fi 6 Router AX3000.webp",
    tag: "trending",
    description:
      "Whole-home Wi-Fi 6 coverage with OFDMA, MU-MIMO and easy mesh expansion — perfect for gaming and 4K streaming.",
    features: [
      "AX3000 dual-band Wi-Fi 6",
      "Covers up to 2,500 sq ft",
      "OFDMA + MU-MIMO",
      "4 gigabit LAN ports",
      "App-based parental controls",
    ],
  },
  {
    id: 13,
    name: "Stackly Fold Smartphone F2",
    category: "Smartphones",
    price: 89999,
    oldPrice: 99999,
    rating: 4,
    reviews: 97,
    badge: "-10%",
    badgeType: "sale",
    image: "images/products/Fold Smartphone F2.webp",
    tag: "trending",
    description:
      "A foldable 7.6\" experience that fits in your pocket, with a versatile camera system and multitasking software.",
    features: [
      "7.6\" foldable AMOLED",
      "Multi-window multitasking",
      "50MP triple camera",
      "4400mAh battery",
      "Slim hinge design",
    ],
  },
  {
    id: 14,
    name: "Stackly Gaming Laptop G15",
    category: "Laptops",
    price: 94999,
    oldPrice: 104999,
    rating: 5,
    reviews: 121,
    badge: "HOT",
    badgeType: "hot",
    image: "images/products/Gaming Laptop G15.webp",
    tag: "best",
    description:
      "A powerhouse 15.6\" gaming laptop with RTX graphics, 165Hz display and vapour-chamber cooling.",
    features: [
      "15.6\" 165Hz FHD display",
      "RTX 4060 8GB GPU",
      "Intel Core i7 13th gen",
      "16GB RAM + 1TB SSD",
      "RGB keyboard + Wi-Fi 6E",
    ],
  },
  {
    id: 15,
    name: "Stackly True Wireless Buds Air",
    category: "Headphones",
    price: 2999,
    oldPrice: 3999,
    rating: 4,
    reviews: 890,
    badge: "-25%",
    badgeType: "sale",
    image: "images/products/True Wireless Buds Air.webp",
    tag: "flash",
    description:
      "Crystal-clear calls and punchy bass in a feather-light design with ANC and a pocketable charging case.",
    features: [
      "Active noise cancellation",
      "32-hour total battery with case",
      "Quad-mic AI call clarity",
      "Low-latency gaming mode",
      "IPX5 sweat resistant",
    ],
  },
  {
    id: 16,
    name: "Stackly 4K Action Camera",
    category: "Cameras",
    price: 12999,
    oldPrice: 15999,
    rating: 4,
    reviews: 230,
    badge: "-19%",
    badgeType: "sale",
    image: "images/products/4K Action Camera.webp",
    tag: "trending",
    description:
      "Capture every adventure in ultra-smooth 4K with hypersmooth stabilisation and a rugged waterproof body.",
    features: [
      "4K 60fps video",
      "HyperSmooth stabilisation",
      "Waterproof to 10m",
      "Touchscreen + voice control",
      "Built-in mounting system",
    ],
  },
  {
    id: 17,
    name: "Stackly Soundbar 5.1",
    category: "Speakers",
    price: 15999,
    oldPrice: 18999,
    rating: 4,
    reviews: 143,
    badge: "-15%",
    badgeType: "sale",
    image: "images/products/Soundbar 5.1.webp",
    tag: "best",
    description:
      "Cinematic 5.1-channel surround sound with a wireless subwoofer and room-calibrating EQ for your home theatre.",
    features: [
      "5.1 channel 400W output",
      "Wireless subwoofer",
      "Dolby Digital + DTS",
      "HDMI eARC + optical",
      "Bluetooth streaming",
    ],
  },
  {
    id: 18,
    name: "Stackly Monitor 27\" 2K",
    category: "TVs & Displays",
    price: 17999,
    oldPrice: 20999,
    rating: 5,
    reviews: 178,
    badge: "NEW",
    badgeType: "new",
    image: "images/products/Monitor.webp",
    tag: "trending",
    description:
      "A colour-accurate 27\" 2K monitor with 165Hz refresh for creators and gamers alike, with height-adjustable stand.",
    features: [
      "27\" 2K QHD 165Hz",
      "98% DCI-P3 colour gamut",
      "1ms response time",
      "USB-C 90W power delivery",
      "Height/pivot adjustable stand",
    ],
  },
  {
    id: 19,
    name: "Stackly Handheld Gaming Console",
    category: "Gaming",
    price: 24999,
    oldPrice: 28999,
    rating: 4,
    reviews: 205,
    badge: "-14%",
    badgeType: "sale",
    image: "images/products/Handheld Gaming Console.webp",
    tag: "flash",
    description:
      "Play your PC library anywhere on a 7\" 120Hz screen with comfortable ergonomics and long battery life.",
    features: [
      "7\" 120Hz OLED display",
      "AMD APU + 16GB RAM",
      "512GB NVMe SSD",
      "Hall-effect analog sticks",
      "2-6 hour battery",
    ],
  },
  {
    id: 20,
    name: "Stackly Wireless Mouse M1 Pro",
    category: "Computer Accessories",
    price: 1499,
    oldPrice: 1999,
    rating: 4,
    reviews: 720,
    badge: "-25%",
    badgeType: "sale",
    image: "images/products/Wireless Mouse M1 Pro.webp",
    tag: "trending",
    description:
      "An ultra-precise wireless mouse with 26K DPI sensor, 8 programmable buttons and 80-hour battery life.",
    features: [
      "26,000 DPI optical sensor",
      "8 programmable buttons",
      "80-hour battery, USB-C charging",
      "Tri-mode connection",
      "66g ultralight design",
    ],
  },
  {
    id: 21,
    name: "Stackly Smart Doorbell HD",
    category: "Smart Home",
    price: 5999,
    oldPrice: 7499,
    rating: 4,
    reviews: 312,
    badge: "-20%",
    badgeType: "sale",
    image: "images/products/Smart Doorbell HD.webp",
    tag: "trending",
    description:
      "See and speak to visitors from anywhere with crisp 2K video, night vision and smart motion alerts.",
    features: [
      "2K QHD video doorbell",
      "Colour night vision",
      "Two-way talk",
      "Smart motion detection",
      "Cloud + local storage",
    ],
  },
  {
    id: 22,
    name: "Stackly Pro Gaming Mouse Pad",
    category: "Gaming",
    price: 999,
    oldPrice: 1299,
    rating: 4,
    reviews: 1540,
    badge: "HOT",
    badgeType: "hot",
    image: "images/products/Pro Gaming Mouse Pad.webp",
    tag: "best",
    description:
      "Extra-large stitched gaming surface with a smooth micro-texture for precise, gliding mouse control.",
    features: [
      "900 x 400mm XL size",
      "5mm anti-slip base",
      "Micro-textured control surface",
      "RGB edge lighting",
      "Machine washable",
    ],
  },
  {
    id: 23,
    name: "Stackly Smart Lock Pro",
    category: "Smart Home",
    price: 8499,
    oldPrice: 9999,
    rating: 5,
    reviews: 167,
    badge: "-15%",
    badgeType: "sale",
    image: "images/products/Smart Lock Pro.webp",
    tag: "best",
    description:
      "Keyless entry with fingerprint, PIN, app and voice control — with tamper alerts and remote access logs.",
    features: [
      "Fingerprint + PIN + app unlock",
      "Grade 2 security rating",
      "Remote access & logs",
      "Voice assistant support",
      "Rechargeable battery",
    ],
  },
  {
    id: 24,
    name: "Stackly Wi-Fi Range Extender",
    category: "Networking",
    price: 1499,
    oldPrice: 1999,
    rating: 4,
    reviews: 645,
    badge: "-25%",
    badgeType: "sale",
    image: "images/products/Wi-Fi Range Extender.webp",
    tag: "flash",
    description:
      "Eliminate dead zones with a compact dual-band extender that boosts coverage up to 1,500 sq ft.",
    features: [
      "Dual-band 1200Mbps",
      "Up to 1,500 sq ft coverage",
      "Smart signal indicator",
      "One-tap WPS setup",
      "Ethernet port for gaming",
    ],
  },
  {
    id: 25,
    name: "Stackly TurboCharge 65W",
    category: "Computer Accessories",
    price: 1299,
    oldPrice: 1999,
    rating: 4.5,
    reviews: 312,
    badge: "-35%",
    badgeType: "sale",
    image: "images/products/TurboCharge 65W.webp",
    tag: "flash",
    description:
      "Ultra-compact GaN charger that powers laptops, phones and tablets at blazing 65W speeds with triple-port output.",
    features: [
      "GaN II 65W fast charging",
      "2x USB-C + 1x USB-A ports",
      "Laptop-ready 65W output",
      "Foldable plug, pocket size",
      "Built-in surge protection",
    ],
  },
];

const CATEGORIES = [
  { name: "Smartphones", icon: "fa-mobile-screen", count: 120 },
  { name: "Laptops", icon: "fa-laptop", count: 85 },
  { name: "Tablets", icon: "fa-tablet-screen-button", count: 60 },
  { name: "Headphones", icon: "fa-headphones", count: 65 },
  { name: "Smart Watches", icon: "fa-clock", count: 50 },
  { name: "Cameras", icon: "fa-camera", count: 45 },
  { name: "TVs & Displays", icon: "fa-tv", count: 40 },
  { name: "Gaming", icon: "fa-gamepad", count: 90 },
  { name: "Computer Accessories", icon: "fa-computer-mouse", count: 130 },
  { name: "Smart Home", icon: "fa-house-signal", count: 75 },
  { name: "Speakers", icon: "fa-volume-high", count: 55 },
  { name: "Networking", icon: "fa-wifi", count: 70 },
];

/* =========================================================
   Helpers
========================================================= */

function formatPrice(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  return stars;
}

function productCardHTML(p) {
  const badgeHTML = p.badge
    ? `<div class="product-badge ${p.badgeType || ""}">${p.badge}</div>`
    : "";
  return `
    <div class="product-card" data-id="${p.id}">
      ${badgeHTML}
      <button class="wishlist-btn ${window.StacklyWishlist && StacklyWishlist.has(p.id) ? "active" : ""}" data-id="${p.id}" aria-label="Add to wishlist">
        <i class="far fa-heart"></i>
      </button>
      <div class="product-image">
        <a href="product-details.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </a>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3><a href="product-details.html?id=${p.id}">${p.name}</a></h3>
        <div class="rating">${getStars(p.rating)} <span>(${p.reviews})</span></div>
        <div class="price">
          <strong>${formatPrice(p.price)}</strong>
          ${p.oldPrice ? `<del>${formatPrice(p.oldPrice)}</del>` : ""}
        </div>
        <button class="add-cart" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

function escapeAttr(str) {
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/* Public API */
window.StacklyProducts = {
  PRODUCTS,
  CATEGORIES,
  getProductById,
  getStars,
  productCardHTML,
  formatPrice,
};
