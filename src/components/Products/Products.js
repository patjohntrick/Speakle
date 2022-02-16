import React from 'react'
import Product from './Product'

const Products = ({ cartCount, products, handleAddToCart }) => {
  return (
    <div>
      <p className=" text-center text-2xl mt-24 " >Products</p>
      <div className=" my-5 flex justify-center gap-10 flex-wrap ">
        <Product
          cartCount={cartCount}
          products={products}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default Products