import React from 'react'
import { Link , useLocation } from 'react-router-dom'

const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
  ]
  const {state} = useLocation();
  const {pathname} = useLocation();
  console.log(pathname);
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id} style={{backgroundColor: 'lightgray', padding: 10, margin: 10}}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default Products