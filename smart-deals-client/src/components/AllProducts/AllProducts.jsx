import React from "react";
import AllProduct from "./AllProduct";

const allProducts = fetch("http://localhost:3000/products").then(res => res.json())
const AllProducts = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-10">
        All <span className="gradient-text">Products</span>
      </h1>
      <AllProduct allProducts={allProducts}></AllProduct>
    </div>
  );
};

export default AllProducts;
