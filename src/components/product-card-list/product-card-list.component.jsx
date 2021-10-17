import React, { useState } from 'react'
import ProductCard from '../product-card/product-card.component'
import './product-card-list.styles.scss'

const ProductCardList = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'cool boots',
      imageUrl: 'https://i1.adis.ws/i/drmartens/15265001.80.jpg?$medium$',
      pageUrl: 'https://www.drmartens.com/us/en/p/15265001',
      price: {
        current: 50,
        initial: 50,
        onSale: false,
      },
    },
    {
      id: '2',
      name: 'Sandles',
      imageUrl: 'https://i1.adis.ws/i/drmartens/26799001.80.jpg?$medium$',
      pageUrl: 'https://www.drmartens.com/us/en/p/15265001',
      price: {
        current: 20,
        initial: 50,
        onSale: true,
      },
    },
  ])

  return (
    <div className="product-card-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductCardList
