import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import UseAxiosSecure from "../../hooks/useAxiosSecure";

const CreateAProduct = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const handleCreateAProduct = (e) => {
    e.preventDefault();
    const name = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.min_price.value;
    const price_max = e.target.max_price.value;
    const newProduct = {
      name,
      image,
      price_min,
      price_max,
      email: user.email,
      seller_name: user.displayName,
    };

    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Your product has been createde.",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    axiosSecure.post("/products", newProduct).then((data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your product has been createde.",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(data.data);
    });
  };
  return (
    <div className="lg:w-1/2 mx-auto shadow-sm p-5 mt-10">
      <form onSubmit={handleCreateAProduct}>
        <fieldset className="fieldset">
          <label className="label text-lg font-bold">Name</label>
          <input type="text" className="input w-full" name="title" />
          <label className="label text-lg font-bold">Image URL</label>
          <input type="text" name="image" className="input w-full" />
          <label className="label text-lg font-bold">Min Price</label>
          <input
            type="text"
            name="min_price"
            className="input w-full"
            placeholder="Minium Price"
          />
          <label className="label text-lg font-bold">Max Price</label>
          <input
            type="text"
            name="max_price"
            className="input w-full"
            placeholder="Max Price"
          />
          <button className="btn btn-neutral mt-4">Add Product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateAProduct;
