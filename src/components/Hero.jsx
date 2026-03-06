import "./Hero.css";

export default function Hero({ onShopNow, onBrowseAll }) {
  return (
    <div className="hero">
      <div className="hero-eyebrow">🌿 Find your fresh favorites here! </div>
      <div className="hero-title">
        Fresh <em>Choices</em>,<br />Healthy life
      </div>
      <div className="hero-sub">
        Shop fresh groceries from our shop you can trust. Quality, variety, and convenience at your fingertips.
      </div>
      <div className="hero-btns">
        <button className="hero-btn-primary" onClick={onShopNow}>
          Shop Now 🛒
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