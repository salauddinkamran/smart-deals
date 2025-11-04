import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const {_id, title, price_min, price_max, image } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-5 pt-5">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-[320px] w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ title}</h2>
          <p>Price: ${price_min} - { price_max}</p>
          <div className="card-actions">
            <Link to={`/productDetails/${_id}`} className="gradient-btn w-full text-center">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
