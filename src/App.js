import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
// import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cartPage" element={<CartPage />} />
          {/* <Route path="ProductPage/:id" element={<ProductPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
