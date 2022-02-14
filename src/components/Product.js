import React from 'react'
import Marshall from '../img/product1.jpg'

const Product = ({ handleCartCount, cartCount }) => {
  return (
    <div className=" my-5 flex justify-center space-x-5 ">
      <div className="first-product w-[400px] bg-slate-50 shadow cursor-pointer transition-all hover:shadow-xl ">
        <div className="img-container w-auto">
          <img src={Marshall} alt="" />
        </div>
        <div className="text-container flex px-3 py-2 justify-between items-start">
          <div className="item-name">
            <p className=" text-lg font-medium " >Marshall</p>
            <p className=" text-slate-600 text-sm ">P125.00</p>
          </div>
          <div
            className="cart-container cursor-pointer rounded-full hover:bg-slate-100 flex items-center relative p-2 transition-all"
            onClick={handleCartCount}
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
          
      <div className="first-product w-[400px] shadow ">
        <div className="img-container w-auto">
          <img src={Marshall} alt="" />
        </div>
        <div className="text-container flex px-3 py-2 bg-slate-50 justify-between items-start">
          <div className="item-name">
            <p>Marshall</p>
            <p>P125.00</p>
          </div>
          <div className="cart-container cursor-pointer rounded-full hover:bg-slate-100 flex items-center relative p-2 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
};

export default Product