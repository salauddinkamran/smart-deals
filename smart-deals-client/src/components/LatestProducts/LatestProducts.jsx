import React, { use } from "react";
import Product from "../Product/Product";
import MyContainer from "../MyContainer/MyContainer";

const LatestProducts = ({ LatestProductsPromise }) => {
  const products = use(LatestProductsPromise);
  console.log(products);
  return (
    <MyContainer>
      <div className="my-24">
        <h1 className="text-5xl font-bold text-center mb-10">
          Recent <span className="gradient-text">Products</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </MyContainer>
  );
};

export default LatestProducts;
