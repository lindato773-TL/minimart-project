import { formatPrice } from "../data/catalog";
import "./ProductCard.css";

export default function ProductCard({ item, qty, onAdd, onRemove }) {
  const inCart = qty > 0;

  return (
    <div className="product-card">
      <div className="product-emoji">{item.emoji}</div>
      <div className="product-name">{item.name}</div>
      <div className="product-origin">🌍 {item.origin}</div>
      <div className="product-unit">per {item.unit}</div>

      <div className="product-footer">
        <div className="product-price">
          {formatPrice(item.price)} <span>/{item.unit}</span>
        </div>
        {inCart && (
          <div className="qty-ctrl">
            <button className="qty-btn minus" onClick={() => onRemove(item.id)}>−</button>
            <span className="qty-num">{qty}</span>
            <button className="qty-btn plus" onClick={() => onAdd(item)}>+</button>
          </div>
        )}
      </div>

      <button
        className={`add-to-cart-btn${inCart ? " in-cart" : ""}`}
        onClick={() => inCart ? onRemove(item.id) : onAdd(item)}
      >
        {inCart ? `✓ In Cart (${qty})` : "Add to Cart"}
      </button>
    </div>
  );
}