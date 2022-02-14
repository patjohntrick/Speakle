import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import { commerce } from './lib/Commerce';

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  
  console.log(products);
  
  const handleCartCount = () => {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="App">
      <Navigation handleCartCount={handleCartCount} cartCount={cartCount} />
      <Product handleCartCount={handleCartCount} cartCount={cartCount} />
    </div>
  );
}

export default App;
