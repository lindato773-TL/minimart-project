import { formatPrice } from "../data/catalog";
import "./CartPanel.css";

export default function CardPanel({ cart, onClose, onAdd, onRemove, onCheckout, onClearCart }) {
  const items = Object.values(cart);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal > 0 ? 3.99 : 0;
  const total    = subtotal + delivery;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-panel">

        {/* Header */}
        <div className="cart-header">
          <div className="cart-title">🛒 Your Cart</div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Items */}
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="big">🛒</div>
              <p>Your cart is empty.<br />Start adding some fresh items!</p>
            </div>
          ) : (
            items.map((item, i) => (
              <div
                className="cart-item"
                key={item.id}
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="cart-item-emoji">{item.emoji}</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-unit">per {item.unit}</div>
                  <div className="cart-item-qty" style={{ marginTop: 6 }}>
                    <button className="cq-btn m" onClick={() => onRemove(item.id)}>−</button>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{item.qty}</span>
                    <button className="cq-btn p" onClick={() => onAdd(item)}>+</button>
                  </div>
                </div>
                <div className="cart-item-price">{formatPrice(item.price * item.qty)}</div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row">
              <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span><span>{formatPrice(delivery)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span><span>{formatPrice(total)}</span>
            </div>
            <button className="checkout-btn" onClick={() => onCheckout(total)}>
              🎉 Place Order — {formatPrice(total)}
            </button>
            <button
              className="clear-btn"
              onClick={() => items.forEach(i => onRemove(i.id, true))}
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </>
  );
}