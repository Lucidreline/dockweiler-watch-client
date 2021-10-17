/* eslint-disable react/prop-types */
import React from 'react'
import './product-card.styles.scss'

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div
      className="image"
      style={{ backgroundImage: `url(${product.imageUrl})` }}
    >
      <div className="name-hover">
        <h3 className="product-name">{product.name}</h3>
      </div>
    </div>
    <div className="price-details">
      <span className="sale-status">
        {product.price.onSale ? 'On Sale' : 'Full Price'}
      </span>
      <span className="price">${product.price.current}</span>
    </div>
  </div>
)

export default ProductCard
