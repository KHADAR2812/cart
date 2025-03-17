import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 50000, image: "https://tse4.mm.bing.net/th?id=OIP.OU1CoSplSgGv9VpKxYneSAHaFc&pid=Api&P=0&h=180" },
    { id: 2, name: "Smartphone", price: 15000, image: "https://tse1.mm.bing.net/th?id=OIP.p6UlfzIfDNqpHKkCICE0nAHaHa&pid=Api&P=0&h=180" },
    { id: 3, name: "Headphones", price: 600, image: "https://tse4.mm.bing.net/th?id=OIP.NdyV9PjgQkQH9-fKwtOeIgHaI7&pid=Api&P=0&h=180" },
    { id: 4, name: "Watchs", price: 500, image: "https://tse2.mm.bing.net/th?id=OIP.b7mayBEtFKH9aTHPCUInkgHaHa&pid=Api&P=0&h=180" }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="app">

      <div className="section">
        <h2>Products</h2>
        <ProductList products={products} addToCart={addToCart} />
      </div>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
