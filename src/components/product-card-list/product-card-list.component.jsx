import React from 'react'
import ProductCard from '../product-card/product-card.component'
import './product-card-list.styles.scss'

const ProductCardList = () => (
  <div className="product-card-list">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
)

export default ProductCardList
