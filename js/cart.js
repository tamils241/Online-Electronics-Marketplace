/* =========================================================
   STACKLY ELECTRONICS MARKETPLACE
   CART + WISHLIST (localStorage based)
========================================================= */

(function () {
  const CART_KEY = "stacklyCart";
  const WISH_KEY = "stacklyWishlist";

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
    dispatchCartEvent();
  }

  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(WISH_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveWishlist(list) {
    localStorage.setItem(WISH_KEY, JSON.stringify(list));
    document.dispatchEvent(new CustomEvent("stackly:wishlist-changed", { detail: list }));
  }

  function addToCart(id, qty) {
    id = Number(id);
    qty = qty || 1;
    const cart = getCart();
    const existing = cart.find((i) => i.id === id);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id, qty });
    }
    saveCart(cart);
  }

  function setQty(id, qty) {
    id = Number(id);
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (item) {
      item.qty = Math.max(1, Number(qty) || 1);
      saveCart(cart);
    }
  }

  function removeFromCart(id) {
    const cart = getCart().filter((i) => i.id !== Number(id));
    saveCart(cart);
  }

  function clearCart() {
    saveCart([]);
  }

  function cartCount() {
    return getCart().reduce((sum, i) => sum + i.qty, 0);
  }

  function cartTotal() {
    let total = 0;
    getCart().forEach((i) => {
      const p = window.StacklyProducts ? StacklyProducts.getProductById(i.id) : null;
      if (p) total += p.price * i.qty;
    });
    return total;
  }

  function cartSavings() {
    let saving = 0;
    getCart().forEach((i) => {
      const p = window.StacklyProducts ? StacklyProducts.getProductById(i.id) : null;
      if (p && p.oldPrice) saving += (p.oldPrice - p.price) * i.qty;
    });
    return saving;
  }

  function updateCartBadge() {
    const badge = document.getElementById("cartCount");
    if (badge) {
      const count = cartCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }
  }

  function dispatchCartEvent() {
    document.dispatchEvent(new CustomEvent("stackly:cart-changed", { detail: getCart() }));
  }

  function toggleWishlist(id) {
    id = Number(id);
    const list = getWishlist();
    const idx = list.indexOf(id);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(id);
    }
    saveWishlist(list);
    return idx === -1;
  }

  function isWishlisted(id) {
    return getWishlist().includes(Number(id));
  }

  function has(id) {
    return getWishlist().includes(Number(id));
  }

  /* Shared toast notification */
  function showToast(message, icon) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-${icon || "check-circle"}"></i><span>${message}</span>`;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  /* Global delegate for add-to-cart + wishlist buttons */
  document.addEventListener("click", function (e) {
    const addBtn = e.target.closest(".add-cart");
    if (addBtn) {
      const id = addBtn.getAttribute("data-id");
      const name = addBtn.getAttribute("data-name");
      addToCart(id);
      showToast((name || "Product") + " added to cart");

      const original = addBtn.innerHTML;
      addBtn.innerHTML = `<i class="fas fa-check"></i> Added to Cart`;
      addBtn.classList.add("added");
      setTimeout(() => {
        addBtn.innerHTML = original;
        addBtn.classList.remove("added");
      }, 1500);
      return;
    }

    const wishBtn = e.target.closest(".wishlist-btn");
    if (wishBtn) {
      const id = wishBtn.getAttribute("data-id");
      const active = toggleWishlist(id);
      wishBtn.classList.toggle("active", active);
      const icon = wishBtn.querySelector("i");
      if (icon) {
        icon.className = active ? "fas fa-heart" : "far fa-heart";
      }
      showToast(active ? "Added to wishlist" : "Removed from wishlist", active ? "heart" : "heart-crack");
    }
  });

  /* Public API */
  window.StacklyCart = {
    getCart,
    addToCart,
    setQty,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
    cartSavings,
    updateCartBadge,
    showToast,
  };

  window.StacklyWishlist = {
    getWishlist,
    toggleWishlist,
    isWishlisted,
    has,
  };

  /* Keep badge in sync on every load and on cart changes */
  document.addEventListener("DOMContentLoaded", function () {
    updateCartBadge();
    document.querySelectorAll(".wishlist-btn").forEach((btn) => {
      const id = btn.getAttribute("data-id");
      if (id && isWishlisted(id)) {
        btn.classList.add("active");
        const icon = btn.querySelector("i");
        if (icon) icon.className = "fas fa-heart";
      }
    });
  });
})();
