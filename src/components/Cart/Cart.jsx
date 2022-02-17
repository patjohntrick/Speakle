import React from "react";

const Cart = ({
  cart,
  itemQty,
  handleRemoveCart,
  handleUpdateCartQty,
  handleEmptyCart,
  screen,
}) => {
  const RemoveIcon = () => (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </React.Fragment>
  );

  return (
    <div className=" mt-24 ">
      <p className=" text-center text-2xl m-7">Cart</p>
      {cart.line_items.map((cart) => {
        return (
          <div key={cart.id}>
            <div className="cart-container border xs:w-[700px] mx-auto p-3 flex justify-between w-full ">
              <div className="img-container flex items-center gap-2 xs:w-[280px] w-[150px]">
                <img
                  src={cart.image.url}
                  alt=""
                  className=" xs:w-[150px] xs:h-[100px] object-cover rounded object-center w-[70px] h-[50px] "
                />
                <div className="text-container">
                  <p className=" text-sm font-medium ">{cart.name}</p>
                  <p className=" text-slate-600 text-xs font-medium ">
                    {cart.line_total.formatted_with_symbol}
                  </p>
                </div>
              </div>
              <div className="qty-container flex items-center gap-4">
                <button
                  className="bg-slate-200 px-2 rounded "
                  onClick={() =>
                    handleUpdateCartQty(cart.id, cart.quantity - 1)
                  }
                >
                  -
                </button>
                <p className=" text-sm font-medium ">{cart.quantity}</p>
                <button
                  className="bg-slate-200 p-1 px-2 rounded text-xs "
                  onClick={() =>
                    handleUpdateCartQty(cart.id, cart.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <div className="btn-container flex items-center gap-4">
                <button
                  className={
                    screen <= 430
                      ? " uppercase bg-red-600 text-white px-2 py-2 rounded cursor-pointer text-xs hover:bg-red-700 transition-all hover:shadow-lg shadow "
                      : " uppercase bg-red-600 text-white px-4 py-2 rounded cursor-pointer text-xs hover:bg-red-700 transition-all hover:shadow-lg shadow "
                  }
                  onClick={() => handleRemoveCart(cart.id)}
                >
                  {screen <= 430 ? <RemoveIcon /> : "remove"}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="total-container border-2 fixed w-full bottom-[0] bg-white ">
        <div className=" w-[700px] m-auto flex justify-between p-3 items-center ">
          <div className="totalAmount-container">
            <p className=" uppercase text-sm font-bold ">
              total : {cart.subtotal.formatted_with_symbol}
            </p>
          </div>
          <div className="btn-container flex gap-4">
            <button
              className=" uppercase bg-red-600 text-white px-4 py-2 rounded cursor-pointer text-xs hover:bg-red-700 transition-all hover:shadow-lg shadow  "
              onClick={handleEmptyCart}
            >
              empty cart
            </button>
            <button className=" uppercase bg-blue-600 text-white px-4 py-2 rounded cursor-pointer text-xs hover:bg-blue-700 transition-all hover:shadow-lg shadow  ">
              check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
