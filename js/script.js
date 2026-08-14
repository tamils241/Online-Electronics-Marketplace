/* =========================================================
   STACKLY ELECTRONICS MARKETPLACE
   UI INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initSearch();
  initRevealAnimations();
  initCountdown();
  initBackToTop();
  initNewsletter();
  initActiveNav();
  initSearchSuggestions();
  initHeroSlider();
});

/* =========================================================
   Mobile menu toggle
========================================================= */

function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (!menuToggle || !mainNav) return;

  function pauseSlider() {
    const slider = document.querySelector(".hero-slider");
    if (slider && slider.__sliderControls) slider.__sliderControls.stop();
  }

  function resumeSlider() {
    const slider = document.querySelector(".hero-slider");
    if (slider && slider.__sliderControls) slider.__sliderControls.start();
  }

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    if (mainNav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      pauseSlider();
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      resumeSlider();
    }
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
      resumeSlider();
    });
  });
}

/* =========================================================
   Header search -> products page
========================================================= */

function initSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchForm = searchInput ? searchInput.closest(".search-box") : null;

  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && searchForm) {
        e.preventDefault();
        window.location.href = "products.html?q=" + encodeURIComponent(searchInput.value.trim());
      }
    });
  }

  if (searchForm && searchForm.querySelector("button")) {
    searchForm.querySelector("button").addEventListener("click", (e) => {
      if (searchInput) {
        e.preventDefault();
        window.location.href = "products.html?q=" + encodeURIComponent(searchInput.value.trim());
      }
    });
  }
}

/* =========================================================
   Simple search suggestions dropdown
========================================================= */

function initSearchSuggestions() {
  const input = document.getElementById("searchInput");
  const box = input ? input.closest(".search-box") : null;
  if (!input || !box || !window.StacklyProducts) return;

  const list = document.createElement("div");
  list.className = "search-suggestions";
  box.appendChild(list);

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) {
      list.innerHTML = "";
      list.classList.remove("open");
      return;
    }
    const matches = window.StacklyProducts.PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).slice(0, 6);
    list.innerHTML = matches.length
      ? matches
          .map(
            (p) =>
              `<a href="product-details.html?id=${p.id}">
                <img src="${p.image}" alt="">
                <span>${p.name}</span>
                <b>${window.StacklyProducts.formatPrice(p.price)}</b>
              </a>`
          )
          .join("")
      : `<div class="no-results">No products found</div>`;
    list.classList.add("open");
  });

  document.addEventListener("click", (e) => {
    if (!box.contains(e.target)) {
      list.classList.remove("open");
    }
  });
}

/* =========================================================
   Scroll reveal animations (IntersectionObserver)
========================================================= */

function initRevealAnimations() {
  const revealItems = document.querySelectorAll(
    ".product-card, .category-card, .feature-card, .review-card, .stat-box, .team-card, .contact-card"
  );

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((el) => el.classList.add("show"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((el) => observer.observe(el));
}

/* =========================================================
   Flash sale countdown timer
========================================================= */

function initCountdown() {
  const wrap = document.getElementById("countdown");
  if (!wrap) return;

  let end = localStorage.getItem("stacklySaleEnd");
  if (!end || Number(end) < Date.now()) {
    end = String(Date.now() + 1000 * 60 * 60 * 12);
    localStorage.setItem("stacklySaleEnd", end);
  }
  end = Number(end);

  const boxes = {
    hours: wrap.querySelector("[data-time='hours']"),
    minutes: wrap.querySelector("[data-time='minutes']"),
    seconds: wrap.querySelector("[data-time='seconds']"),
  };
  const daysBox = wrap.querySelector("[data-time='days']");
  if (!boxes.hours) return;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    let diff = Math.max(0, end - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    if (daysBox) daysBox.textContent = pad(days);
    boxes.hours.textContent = pad(hours);
    boxes.minutes.textContent = pad(minutes);
    boxes.seconds.textContent = pad(seconds);
  }

  tick();
  setInterval(tick, 1000);
}

/* =========================================================
   Back to top button
========================================================= */

function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  });

  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================================================
   Newsletter form
========================================================= */

function initNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input");
    if (input && input.value.trim()) {
      if (window.StacklyCart) {
        window.StacklyCart.showToast("Subscribed! Welcome to Stackly.", "envelope");
      }
      input.value = "";
    }
  });
}

/* =========================================================
   Highlight active nav link
========================================================= */

function initActiveNav() {
  const links = document.querySelectorAll(".main-nav a");
  if (!links.length) return;

  const page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  links.forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (href === page || (page === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

window.StacklyUI = {
  reveal: initRevealAnimations,
};

/* =========================================================
   Hero slider - RIGHT -> LEFT directional slide
========================================================= */

function initHeroSlider() {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots .dot");
  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const interval = 3500;

  function showSlide(next) {
    if (next === current) return;

    const oldSlide = slides[current];
    const newSlide = slides[next];

    /* Remove previous states */
    slides.forEach((slide) => {
      slide.classList.remove("active", "prev");
    });

    /* Old slide moves left */
    oldSlide.classList.add("prev");

    /* New slide comes from right */
    newSlide.classList.add("active");

    /* Update dots */
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    if (dots[next]) {
      dots[next].classList.add("active");
    }

    current = next;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function start() {
    stop();
    timer = setInterval(nextSlide, interval);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  /* Dot click */
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      start();
    });
  });

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", start);

  /* Expose controls so the mobile menu can pause/resume the slider */
  slider.__sliderControls = { start, stop };

  /* Initial slide */
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev");
  });
  slides[0].classList.add("active");
  if (dots[0]) {
    dots[0].classList.add("active");
  }

  start();
}
