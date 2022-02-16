import React from 'react'
import Marshall from '../../img/product1.jpg'

const Product = ({ cartCount, products, handleAddToCart }) => {
  console.log(products);
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div className="product w-[350px] shadow cursor-pointer transition-all hover:shadow-xl ">
              <div className="img-container w-auto overflow-hidden">
                <img
                  src={product.image.url}
                  alt={product.image.filename}
                  className=" h-[280px] w-[100%] object-cover"
                />
              </div>
              <div className="text-container flex p-4 justify-between items-start">
                <div className="item-name">
                  <p className=" text-sm font-medium ">{product.name}</p>
                  <p className=" text-slate-600 text-xs font-medium ">
                    {product.price.formatted_with_symbol}
                  </p>
                </div>
                <div
                  className="cart-container cursor-pointer rounded-full hover:bg-slate-100 flex items-center relative p-2 transition-all "
                  onClick={() =>
                    handleAddToCart(product.id)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}


export default Product