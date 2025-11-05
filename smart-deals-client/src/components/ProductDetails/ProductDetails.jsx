import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useLoaderData } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = use(AuthContext);
  const {
    _id: productId,
    image,
    title,
    category,
    price_min,
    price_max,
    created_at,
    seller_image,
    seller_name,
    email,
    location,
    seller_contact,
  } = useLoaderData();
  const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for this product", data);
        setBids(data);
      });
  }, [productId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };
  // console.log(product)
  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log({ productId, name, email, bid });
    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("after placing bid", data);
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been placed.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-base-200">
      <MyContainer>
        <div className="flex justify-between items-center gap-10 py-28">
          <div className="w-1/2">
            <img src={image} className="rounded-xl" alt="" />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-5 mb-5">
              <div>
                <Link className="flex gap-2 items-center font-semibold" to="/">
                  <FaArrowLeftLong /> <span>Back To Products</span>
                </Link>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
              <div>
                <span className="bg-purple-100 text-purple-500 font-semibold py-1 px-3 rounded-full">
                  {category}
                </span>
              </div>
              <div className="p-5 bg-white rounded-xl">
                <h3 className="text-2xl font-bold text-green-600">
                  ${price_min} - {price_max}
                </h3>
                <p className="font-medium">Price status from</p>
              </div>
              <div className="p-5 bg-white rounded-xl">
                <h4 className="text-2xl font-bold mb-2">Products Details</h4>
                <p className="">
                  <span className="font-semibold">Products Id:</span>{" "}
                  {productId}
                </p>
                <p className="">
                  <span className="font-semibold">Posted: </span> {created_at}
                </p>
              </div>
              <div className="p-5 bg-white rounded-xl">
                <h3 className="text-2xl font-bold mb-2">Seller Information</h3>
                <div className="flex gap-5">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={seller_image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{seller_name}</h4>
                    <p>{email}</p>
                  </div>
                </div>
                <h4>
                  <span className="font-semibold">Location:</span> {location}
                </h4>
                <h4>
                  <span className="font-semibold">Contact:</span>{" "}
                  {seller_contact}
                </h4>
              </div>
            </div>

            <button
              onClick={handleBidModalOpen}
              className="btn btn-primary w-full"
            >
              I want to By this Product
            </button>
            <dialog
              ref={bidModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Give Seller Your Offered Price
                </h3>
                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <form onSubmit={handleBidSubmit}>
                  <fieldset className="fieldset">
                    <label className="label text-lg font-bold">Name</label>
                    <input
                      type="text"
                      className="input w-full"
                      name="name"
                      readOnly
                      defaultValue={user?.displayName}
                    />
                    <label className="label text-lg font-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input w-full"
                      readOnly
                      defaultValue={user?.email}
                    />
                    <label className="label text-lg font-bold">Bid</label>
                    <input
                      type="text"
                      name="bid"
                      className="input w-full"
                      placeholder="Your Bid Ammount"
                    />
                    <button className="btn btn-neutral mt-4">
                      Please your bid
                    </button>
                  </fieldset>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <h3 className="text-3xl">Bids for this product: <span className="text-primary">{ bids.length}</span> </h3>
        </div>
      </MyContainer>
    </div>
  );
};

export default ProductDetails;
