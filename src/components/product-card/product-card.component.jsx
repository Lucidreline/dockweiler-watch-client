import React from 'react'
import './product-card.styles.scss'

const ProductCard = () => (
  <div className="product-card">
    <div className="image" />
    <div className="price-details">
      <span className="sale-status">Full Price</span>
      <span className="price">$50</span>
    </div>
  </div>
)

export default ProductCard
