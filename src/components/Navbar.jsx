import { CATALOG } from "../data/catalog";
import "./Navbar.css";

export default function Navbar({ activeCategory, onCategoryChange, cartCount, onCartOpen }) {
  return (
    <nav className="mm-nav">
      <div className="mm-logo">
        Fresh<span>Mart</span>
      </div>

      <div className="nav-cats">
        {Object.entries(CATALOG).map(([key, cat]) => (
          <button
            key={key}
            className={`nav-cat-btn${activeCategory === key ? " active" : ""}`}
            onClick={() => onCategoryChange(key)}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      <div className="nav-right">
        <button className="cart-trigger" onClick={onCartOpen}>
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
}