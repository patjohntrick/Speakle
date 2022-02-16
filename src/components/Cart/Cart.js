import React from 'react'
import Marshall from '../../img/product1.jpg'
import Tall from '../../img/product8.jpg'

const Cart = ({ cartItems, itemQty, handleRemoveCart }) => {
  return (
    <div className=" mt-24 ">
          <p className=" text-center text-2xl m-7 ">Cart</p>
          {cartItems.map((cart) => {
              return (
                <div key={cart.id}>
                  <div className="cart-container border w-[700px] mx-auto p-3 flex justify-between">
                    <div className="img-container flex items-center gap-2 w-[280px]">
                      <input type="checkbox" />
                      <img
                        src={ cart.image.url }
                        alt=""
                        className=" w-[150px] h-[100px] object-cover rounded object-center "
                      />
                      <div className="text-container">
                        <p className=" text-sm font-medium ">{ cart.name }</p>
                        <p className=" text-slate-600 text-xs font-medium ">
                          { cart.price.formatted_with_symbol }
                        </p>
                      </div>
                    </div>
                    <div className="qty-container flex items-center gap-4">
                      <button className="bg-slate-200 px-2 rounded ">-</button>
                              <p className=" text-sm font-medium ">{ cart.quantity }</p>
                      <button className="bg-slate-200 px-2 rounded ">+</button>
                    </div>
                    <div className="btn-container flex items-center gap-4">
                      <button className=" uppercase bg-red-600 text-white px-4 py-2 rounded cursor-pointer text-xs hover:bg-red-700 transition-all hover:shadow-lg shadow " onClick={() => handleRemoveCart}>
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              );
          })}

      <div className="total-container border-2 fixed w-full bottom-[0] bg-white ">
        <div className=" w-[700px] m-auto flex justify-between p-3 items-center ">
          <div className="totalAmount-container">
            <p className=" uppercase text-sm font-bold ">total : </p>
          </div>
          <button className=" uppercase bg-blue-600 text-white px-4 py-2 rounded cursor-pointer text-xs hover:bg-blue-700 transition-all hover:shadow-lg shadow  ">
            check out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart