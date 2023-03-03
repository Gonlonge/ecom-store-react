import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import IndividualProductPage from "./pages/IndividualProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cartPage" element={<CartPage />} />
          <Route path="/products/:id" component={IndividualProductPage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
