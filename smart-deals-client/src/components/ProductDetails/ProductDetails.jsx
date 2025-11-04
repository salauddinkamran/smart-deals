import React, { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const ProductDetails = () => {
  const {user} = use(AuthContext)
  const {_id} = useLoaderData();
  const bidModalRef = useRef(null);
  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };
  console.log({_id})
  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log({_id, name, email, bid})
  }
  return (
    <div>
      <div>
        <div></div>
        <div>
          <button onClick={handleBidModalOpen} className="btn btn-primary">
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
                  <label className="label">Name</label>
                  <input type="text" className="input" name="name" readOnly defaultValue={user.displayName} />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    readOnly
                    defaultValue={user.email}
                  />
                  <label className="label">Bid</label>
                  <input type="text" name="bid" className="input" placeholder="Your Bid Ammount" />
                  <button className="btn btn-neutral mt-4">Please your bid</button>
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
    </div>
  );
};

export default ProductDetails;
