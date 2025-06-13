import React from 'react';

function AmazonProductCard() {
  return (
    <div className="puis-card-container s-card-container s-overflow-hidden aok-relative">
      {/* Product Image */}
      <div className="s-product-image-container s-text-center">
        <a
          href="https://www.amazon.in/dp/B0DZ2JKJHS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="s-image"
            src="https://m.media-amazon.com/images/I/61T3mVGADCL._AC_UL320_.jpg"
            alt="Pexpo Amaze 1000 Water Bottle"
          />
        </a>
      </div>

      {/* Product Title */}
      <div className="product-title">
        <h2 className="a-size-base-plus a-color-base a-text-normal">
          <a
            className="a-link-normal"
            href="https://www.amazon.in/dp/B0DZ2JKJHS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexpo Amaze 1000 ISI Certified Water Bottle - Hot & Cold Flask (Pink & Green Ombre)
          </a>
        </h2>
      </div>

      {/* Rating and Review */}
      <div className="product-rating">
        <span>⭐ 4.4 out of 5 stars</span> – <a href="#">212 ratings</a>
      </div>

      {/* Price */}
      <div className="product-price">
        <span className="price-current">₹975</span>
        <span className="price-original">₹1,349</span>
        <span className="price-discount">(28% off)</span>
      </div>

      {/* Delivery */}
      <div className="product-delivery">
        <p>FREE delivery <strong>Mon, 28 Apr</strong></p>
      </div>

      {/* Add to Cart */}
      <div className="product-actions">
        <button className="a-button a-button-primary">
          <i className="a-icon a-icon-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AmazonProductCard;
