import React from 'react';

function ProductCard() {
  return (
    <div className="product-card">
      {/* Sponsored Tag */}
      <div className="sponsored-tag">
        <span className="a-color-secondary">Sponsored</span>
      </div>

      {/* Product Title */}
      <a
        className="product-title"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.amazon.in/Boldfit-Bottles-Stainless-Bottle-Leakproof/dp/B0DX1K53NF"
      >
        <h2>
          Boldfit Water Bottles Stainless Steel Water Bottle 1 Litre Steel Water Bottles for School, Office, Home, Gym
        </h2>
      </a>

      {/* Ratings */}
      <div className="product-rating">
        <span>⭐ 4.1 out of 5 stars</span>
        <a href="#reviews">(772 ratings)</a>
      </div>

      {/* Price */}
      <div className="product-price">
        <span className="price-current">₹299</span>
        <span className="price-original">₹799</span>
        <span className="price-discount">(63% off)</span>
      </div>

      {/* Delivery */}
      <div className="delivery-info">
        <p>FREE delivery <strong>Sun, 27 Apr</strong> on first order</p>
        <p>Or fastest delivery <strong>Today</strong></p>
      </div>

      {/* Add to Cart */}
      <button className="add-to-cart-btn">Add to Cart 🛒</button>
    </div>
  );
}

export default ProductCard;
