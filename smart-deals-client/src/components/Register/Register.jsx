import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSignIn } = use(AuthContext);
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.imageUrl.value;
    const password = e.target.password.value;
    console.log({ name, email, image, password });
    console.log("Register button clickded!");
    createUser(email, password)
      .then((res) => {
        console.log(res);
        toast("successfuly");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user)
        toast("Google SuignIn Successfully");
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,

        }
        // create user in the database
        fetch('http://localhost:3000/users', {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
          console.log("Data After user save", data)
        })
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="card-body sm:max-w-10/12 md:max-w-8/12 lg:max-w-6/12 xl:max-w-3/12 bg-white rounded">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">Register Now!</h3>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="gradient-text">
              Login Now
            </Link>{" "}
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label text-base font-bold">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Email"
            />
            {/* email */}
            <label className="label text-base font-bold">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            {/* image-URL */}
            <label className="label text-base font-bold">Image-URL</label>
            <input
              type="text"
              name="imageUrl"
              className="input w-full"
              placeholder="Image-URL"
            />
            {/* password */}
            <label className="label text-base font-bold">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              <span className="absolute right-3 top-3 text-base cursor-pointer" onClick={()=> setShow(!show)}>{ show ? <FaEye/> : <FaEyeSlash />}</span>
            </div>

            {/* submit button */}
            <button className="btn btn-neutral mt-4 gradient-btn text-lg">
              Register
            </button>
          </fieldset>
        </form>
        <div className="flex w-full flex-col">
          <div className="divider font-bold">OR</div>
        </div>
        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
