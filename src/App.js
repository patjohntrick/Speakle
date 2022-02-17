import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products/Products";
import { commerce } from "./lib/Commerce";
// import { BrowserRouter } from 'react-router-dom'
import Cart from "./components/Cart/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [itemQty, setitemQty] = useState(1);
  const [screen, setScreen] = useState();

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response.data);
  };
  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };
  const handleAddToCart = async (productId) => {
    const response = await commerce.cart.add(productId);
    setCart(response.cart);
  };
  const handleRemoveCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
    handleScreen();
  }, []);
  console.log(cart);
  // setCartItems(cart.line_items);
  const handleScreen = () => {
    window.addEventListener("resize", () => {
      const screenWidth = window.innerWidth;
      setScreen(screenWidth);
    });
  };

  return (
    <div className="App">
      <Navigation
        cartCount={cartCount}
        handleEmptyCart={handleEmptyCart}
        totalItems={cart.total_items}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Products
              cartCount={cartCount}
              products={products}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              itemQty={itemQty}
              handleRemoveCart={handleRemoveCart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleEmptyCart={handleEmptyCart}
              screen={screen}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
