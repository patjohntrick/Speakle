import React from 'react'

const Navigation = ({ handleCartCount, cartCount }) => {
    return (
      <nav className=" shadow py-5 px-7 flex justify-between ">
        <div className=" font-roboto text-3xl uppercase font-normal ">
          Speakle
        </div>
        <div className=" cursor-pointer rounded-full hover:bg-slate-100 flex items-center relative p-2 transition-all ">
          <div
            className={
              cartCount
                ? "p-[1px] bg-red-600 rounded-full text-sm w-5 h-5 absolute left-[50%] top-[-10%]"
                : " hidden "
            }
          >
            <p className=" text-[10px] text-white text-center ">{cartCount}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
      </nav>
    );
}

export default Navigation