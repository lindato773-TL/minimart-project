import { CATALOG } from "../data/catalog";
import "./Sidebar.css";

export default function Sidebar({ activeCategory, cart }) {
  const cat = CATALOG[activeCategory];
  if (!cat || !cat.items) return null;

  return (
    <div className="sidebar">
      <div className="sidebar-title">{cat.label}</div>
      {cat.items.map(item => {
        const inCart = cart[item.id];
        return (
          <button
            key={item.id}
            className={`sub-cat-btn${inCart ? " active" : ""}`}
            onClick={() => {
              const el = document.getElementById(`item-${item.id}`);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            {item.emoji} {item.name}
            {inCart && <span className="badge">{inCart.qty}</span>}
          </button>
        );
      })}
    </div>
  );
}