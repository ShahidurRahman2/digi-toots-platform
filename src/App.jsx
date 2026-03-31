import { useState } from 'react';
import './App.css';
import products from "./data/products";
import { CiShoppingCart } from "react-icons/ci";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgEditBlackPoint } from "react-icons/cg";

function App() {
  const [count, setCount] = useState(0);

  console.log(products);

  return (
    <>

      <div className="section1">
        <div className="w-full bg-base-100 shadow-sm">

          <div className="navbar w-[90%] mx-auto items-center px-0">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex="-1" className="menu menu-sm text-3xl  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li><a className='text-2'>Products</a></li>
                  <li><a>Features</a></li>
                  <li><a>Pricing</a></li>
                  <li><a>Testomanials</a></li>
                  <li><a>FAQ</a></li>

                </ul>
              </div>
              <a className="btn btn-ghost text-2xl md:text-3xl text-[#692bf7]">DigiTools</a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testomanials</a></li>
                <li><a>FAQ</a></li>

              </ul>
            </div>

            <div className="navbar-end flex gap-2">
              <button className='flex justify-center items-center gap-1'><CiShoppingCart />login</button>
              <a className="btn btn-primary rounded-2xl">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="hero bg-base-200 w-[90%] mx-auto min-h-[70vh] px-6">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">

            {/* Right Side Image */}
            <img
              src="https://i.ibb.co.com/jkMmf1DF/banner.png"
              alt="Digital Tools"
              className="max-w-sm rounded-lg"
            />

            {/* Left Side Content */}
            <div>
              <a className="text-blue-600 flex items-center gap-1 content-start  text-sm font-medium">
                <CgEditBlackPoint />New Ai-Powered Tools Available
              </a>

              <h1 className="text-4xl font-bold mt-3">
                Supercharge YourDigital Workflow
              </h1>

              <p className="py-4 text-gray-600">
                Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.
                Explore Products
              </p>

              <div className="flex gap-4">
                <button className="btn rounded-2xl btn-primary">
                  Explore Products
                </button>

                <button className="btn btn-outline rounded-2xl"><img src=" https://i.ibb.co.com/zhQfp06T/Play.png" alt="" />
                  Watch Demo
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;