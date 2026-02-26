import "./Hero.css";

export default function Hero({ onShopNow, onBrowseAll }) {
  return (
    <div className="hero">
      <div className="hero-eyebrow">🌿 Fresh Delivered Daily</div>
      <div className="hero-title">
        Shop <em>Fresh</em>,<br />Live Better
      </div>
      <div className="hero-sub">
        Thousands of fresh groceries from local farms delivered to your door in under 30 minutes.
      </div>
      <div className="hero-btns">
        <button className="hero-btn-primary" onClick={onShopNow}>
          Shop Now 🛒
        </button>
        <button className="hero-btn-sec" onClick={onBrowseAll}>
          Browse All
        </button>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">500+</div>
          <div className="stat-label">Products</div>
        </div>
        <div className="stat">
          <div className="stat-num">30min</div>
          <div className="stat-label">Delivery</div>
        </div>
        <div className="stat">
          <div className="stat-num">4.9★</div>
          <div className="stat-label">Rating</div>
        </div>
      </div>
    </div>
  );
}