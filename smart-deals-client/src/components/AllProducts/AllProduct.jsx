import React, { use } from "react";
import { Link } from "react-router";
import MyContainer from "../MyContainer/MyContainer";

const AllProduct = ({ allProducts }) => {
  const Allproducts = use(allProducts);
  const { _id, title, price_min, price_max, image } = Allproducts;
  console.log(Allproducts);
  return (
    <MyContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Allproducts.map((product) => (
          <div>
            <div className="card bg-base-100 shadow-sm">
              <figure className="px-5 pt-5">
                <img
                  src={product.image}
                  alt="Shoes"
                  className="rounded-xl h-[320px] w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>
                  Price: ${product.price_min} - {product.price_max}
                </p>
                <div className="card-actions">
                  <Link
                    to={`/productDetails/${_id}`}
                    className="gradient-btn w-full text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MyContainer>
  );
};

export default AllProduct;
