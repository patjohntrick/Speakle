import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ({ handleCartCount, cartCount, handleEmptyCart, totalItems, handleVisualCart }) => {
    return (
      <nav className=" shadow py-5 px-7 flex justify-between fixed w-full bg-white top-[0] z-10 ">
        <Link to="/">
          <div className=" font-roboto text-2xl font-normal ">Speakle</div>
        </Link>
        <Link to="cart">
          <div
            className=" cursor-pointer rounded-full hover:bg-slate-100 flex items-center relative p-2 transition-all "
          >
            <div
              className={
                totalItems
                  ? "p-[1px] bg-red-600 rounded-full text-sm w-5 h-5 absolute left-[50%] top-[-10%]"
                  : " hidden "
              }
            >
              <p className=" text-[10px] text-white text-center ">
                {totalItems}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </Link>
      </nav>
    );
}

export default Navigation