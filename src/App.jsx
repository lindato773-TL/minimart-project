import { useState, useMemo } from "react";
import { CATALOG, ALL_ITEMS, formatPrice } from "./data/catalog";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Sidebar     from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import CardPanel   from "./components/CardPanel";
import "./index.css";

const SORT_OPTIONS = [
  { id: "default",    label: "🌟 Featured" },
  { id: "price-asc",  label: "💰 Price: Low → High" },
  { id: "price-desc", label: "💎 Price: High → Low" },
  { id: "name",       label: "🔤 Name A–Z" },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search,   setSearch]   = useState("");
  const [sortBy,   setSortBy]   = useState("default");
  const [cart,     setCart]     = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [toast,    setToast]    = useState(null);
  const [orderDone, setOrderDone] = useState(null);
  const [showHero,  setShowHero]  = useState(true);

  // ── Cart actions ────────────────────────────────────────
  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...prev[item.id], qty: prev[item.id].qty + 1 }
        : { ...item, qty: 1 },
    }));
    showToast(`${item.emoji} ${item.name} added!`);
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      if (!prev[id]) return prev;
      if (prev[id].qty <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: { ...prev[id], qty: prev[id].qty - 1 } };
    });
  };

  const clearCart = () => setCart({});
  const handleCheckout = (total) => {
    setOrderDone(total);
    setCart({});
    setCartOpen(false);
  };

  // ── Toast ───────────────────────────────────────────────
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // ── Category change ─────────────────────────────────────
  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setSearch("");
    setShowHero(false);
  };

  // ── Filtered + sorted items ─────────────────────────────
  const displayItems = useMemo(() => {
    let items =
      activeCategory === "all"
        ? ALL_ITEMS
        : CATALOG[activeCategory]?.items || [];

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        i =>
          i.name.toLowerCase().includes(q) ||
          i.origin?.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc")  items = [...items].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    if (sortBy === "name")       items = [...items].sort((a, b) => a.name.localeCompare(b.name));

    return items;
  }, [activeCategory, search, sortBy]);

  const cartCount = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const currentCat = CATALOG[activeCategory];

  return (
    <div className="mm-layout">

      {/* ── Navbar ── */}
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <div className="mm-main">

        {/* ── Sidebar (only when a specific category is active) ── */}
        {activeCategory !== "all" && (
          <Sidebar activeCategory={activeCategory} cart={cart} />
        )}

        {/* ── Main content ── */}
        <div className="content">

          {/* Hero (first visit) */}
          {showHero && (
            <Hero
              onShopNow={() => handleCategoryChange("fruits")}
              onBrowseAll={() => handleCategoryChange("all")}
            />
          )}

          {/* Section header */}
          <div className="content-header">
            <div className="content-title">
              {currentCat?.emoji}{" "}
              {activeCategory === "all" ? "All Products" : currentCat?.label}
            </div>
            <div className="content-sub">{displayItems.length} items available</div>
          </div>

          {/* Search */}
          <input
            className="search-input"
            placeholder={`🔍  Search ${
              activeCategory === "all" ? "all products" : currentCat?.label?.toLowerCase()
            }…`}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {/* Sort tags */}
          <div className="tag-filter">
            {SORT_OPTIONS.map(t => (
              <button
                key={t.id}
                className={`tag${sortBy === t.id ? " active" : ""}`}
                onClick={() => setSortBy(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Product grid */}
          {displayItems.length === 0 ? (
            <div className="empty-state">
              <div className="big">🔍</div>
              <p>No results for "<strong>{search}</strong>"</p>
            </div>
          ) : (
            <div className="product-grid">
              {displayItems.map(item => (
                <div key={item.id} id={`item-${item.id}`}>
                  <ProductCard
                    item={item}
                    qty={cart[item.id]?.qty || 0}
                    onAdd={addToCart}
                    onRemove={removeFromCart}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Cart panel ── */}
      {cartOpen && (
        <CardPanel
          cart={cart}
          onClose={() => setCartOpen(false)}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
          onClearCart={clearCart}
        />
      )}

      {/* ── Toast ── */}
      {toast && <div className="toast">{toast}</div>}

      {/* ── Order success modal ── */}
      {orderDone && (
        <div className="order-success">
          <div className="order-card">
            <div className="big">🎉</div>
            <h2>Order Placed!</h2>
            <p>Your fresh groceries are on their way.</p>
            <p style={{ fontSize: 13 }}>
              Estimated delivery: <strong>25–35 min</strong>
            </p>
            <div className="order-total-box">
              <span>Total Paid</span>
              <span>{formatPrice(orderDone)}</span>
            </div>
            <button
              className="order-close-btn"
              onClick={() => {
                setOrderDone(null);
                setShowHero(true);
                setActiveCategory("all");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}