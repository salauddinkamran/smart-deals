import React, { use } from "react";
import { Link, NavLink } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutAuth } = use(AuthContext);
  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/allProducts">All Products</NavLink>{" "}
      </li>
      {user && (
        <>
          <li>
            {" "}
            <NavLink to="/myProducts">My Products</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/myBids">My Bids</NavLink>{" "}
          </li>
        </>
      )}

      <li>
        {" "}
        <NavLink to="/createAProduct">Create Product</NavLink>{" "}
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutAuth()
      .then(() => {
        toast("SignOut Successfully!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="shadow-sm">
      <MyContainer>
        <nav className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="text-2xl font-bold">
              Smart
              <span className="gradient-text">Deals</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-bold flex gap-5">
              {links}
            </ul>
          </div>
          <div className="navbar-end ">
            {user ? (
              <div>
                <button
                  onClick={handleSignOut}
                  className="gradient-btn cursor-pointer"
                >
                  SignOut
                </button>
              </div>
            ) : (
              <div className="flex gap-5">
                <Link
                  to="/login"
                  className="font-bold border border-purple-700 py-2 px-4 rounded bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent"
                >
                  Login
                </Link>
                <Link to="/register" className="gradient-btn">
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      </MyContainer>
    </div>
  );
};

export default Navbar;
