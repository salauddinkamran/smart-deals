// import React from "react";

import { FaSearch } from "react-icons/fa";

// const Banner = () => {
//   return (
//     <div className="">
//       <div>
//         <h1>
//           Deal your <span>Products</span> in a <span>Smart</span> way !
//         </h1>
//         <p>
//           SmartDeals helps you sell, resell, and shop from trusted local sellers
//           — all in one place!
//         </p>
//         <div className="join">
//           <div>
//             <label className="input validator join-item">
//               <svg
//                 className="h-[1em] opacity-50"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <g
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                   strokeWidth="2.5"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                 </g>
//               </svg>
//               <input type="email" placeholder="mail@site.com" required />
//             </label>
//             <div className="validator-hint hidden">
//               Enter valid email address
//             </div>
//           </div>
//           <button className="btn btn-neutral join-item">Join</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;




const Banner = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center text-center 
                    bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100 
                    relative overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Deal Your <span className="text-purple-500">Products</span> In A <span className="text-purple-500">Smart</span> Way!
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
      </p>
      <div className="mt-6 flex">
        <input 
          type="text" 
          placeholder="Search For Products, Categories..." 
          className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none w-64"
        />
        <button className="px-4 py-2 bg-purple-500 text-white rounded-r-full hover:bg-purple-600">
        <FaSearch />
        </button>
      </div>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer">
          Watch All Products
        </button>
        <button className="px-6 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-100 cursor-pointer">
          Post a Product
        </button>
      </div>
    </div>
  );
};

export default Banner;
