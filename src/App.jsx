import { useState } from "react";
import "./App.css";
import products from "./data/products";
import { CiShoppingCart } from "react-icons/ci";
import { CgEditBlackPoint } from "react-icons/cg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  // ✅ Add to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart ✅");
  };

  // ✅ Remove item
  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    toast.error("Item removed ❌");
  };

  // ✅ Checkout
  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout successful 🛒");
  };

  // ✅ Total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>



      {/* nav bar ar kaj  niche liklam*/}
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
              <button className='flex justify-center items-center gap-1'><CiShoppingCart />({cart.length})login</button>
              <a className="btn btn-primary rounded-2xl">Get Started</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="hero bg-base-200 w-[90%] mx-auto min-h-[70vh] px-6">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">


            <img
              src="https://i.ibb.co.com/jkMmf1DF/banner.png"
              alt="Digital Tools"
              className="max-w-sm rounded-lg"
            />


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




      <div className="section3 bg-primary ">
        <div className="w-full py-12 bg-primary-100">
          <div className="w-[85%] mx-auto">
            <div className="stats shadow w-full grid-cols-1 md:grid-cols-3">

              {/* 50k Users */}
              <div className="stat place-items-center">

                <div className="stat-value text-white ">50k +</div>
                <div className="md:text-2xl text-bold">Users</div>
              </div>

              {/* 200k Premium Tools */}
              <div className="stat place-items-center">

                <div className="stat-value text-white">200k +</div>
                <div className="md:text-2xl text-bold ">Premium Tools</div>
              </div>

              {/* 4.9 Rating */}
              <div className="stat place-items-center">

                <div className="stat-value flex items-center text-white gap-2">
                  4.9
                  <div className="rating rating-sm">

                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked readOnly />
                  </div>
                </div>
                <div className="md:text-2xl  text-bold ">rating</div>
              </div>

            </div>
          </div>

        </div>

      </div>







      {/*  Toggle Buttons akon */}
      <div className="">
        <div className="">
          <h1 className='text-center md:text-3xl w-[50%] mx-auto'>Premium Digital Tools</h1>
          <p className='text-center mt-5 w-[50%] mx-auto'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p> </div>
        <div className="flex justify-center items-center  mt-5 w-[50%] mx-auto gap-3">
          <button
            onClick={() => setView("products")}
            className={`btn ${view === "products" ? "btn-primary" : "btn-outline"}`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`btn ${view === "cart" ? "btn-primary" : "btn-outline"}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>





      {/*  Products */}
      {view === "products" && (
        <div className="grid w-[85%] mx-auto grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {products.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">

                <span className="badge badge-primary">{product.tag}</span>

                <h2 className="card-title">
                  {product.icon} {product.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {product.description}
                </p>

                <p className="font-semibold">
                  ${product.price} / {product.period}
                </p>

                <ul className="text-sm mt-2">
                  {product.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-primary mt-3"
                >
                  Buy Now
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* 🔷 Cart */}
      {view === "cart" && (
        <div className="p-6 max-w-2xl mx-auto">

          {cart.length === 0 ? (
            <p className="text-center text-gray-500">
              Your cart is empty
            </p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-base-100 shadow p-4 rounded-lg mb-3"
                >
                  <div>
                    <h3 className="font-bold">
                      {item.icon} {item.name}
                    </h3>
                    <p>${item.price}</p>
                  </div>

                  <button
                    onClick={() => handleRemove(index)}
                    className="btn btn-error btn-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/*  Total */}
              <h2 className="text-right font-bold text-lg mt-4">
                Total: ${totalPrice}
              </h2>

              <button
                onClick={handleCheckout}
                className="btn btn-success w-full mt-4"
              >
                Proceed to Checkout
              </button>
            </>
          )}

        </div>
      )}


      <ToastContainer position="top-right" />


      <div className="section5 mt-7 w-[85%] mx-auto mb-12 md:mt-[120px]">
        <div className="w-[80%] md:w-[40%] mx-auto">
          <strong className="text-2xl md:text-4xl mb-3">Get Started in 3 Steps</strong>
          <p className="mx-auto">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-8">


          <div className="relative text-center shadow-cyan-900 bg-base-100 shadow-2xl p-6 rounded-xl">


            <button className="absolute top-3 right-3 bg-blue-800 text-white w-6 h-6 rounded-full text-sm">
              01
            </button>

            <img
              className="mx-auto mb-4"
              src="https://i.ibb.co.com/JW5C67ZL/user.png"
              alt=""
            />

            <h1 className="text-xl md:text-2xl font-bold mb-3">
              Create Account
            </h1>

            <p>
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative text-center shadow-cyan-900 shadow-2xl bg-base-100 p-6 rounded-xl">

            <button className="absolute top-3 right-3 bg-blue-800 text-white w-6 h-6 rounded-full text-sm">
              02
            </button>

            <img
              className="mx-auto mb-4"
              src="https://i.ibb.co.com/twbfT3cZ/package.png"
              alt=""
            />

            <h1 className="text-xl md:text-2xl font-bold mb-3">
              Choose Products
            </h1>

            <p>
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>


          <div className="relative text-center bg-base-100 shadow-cyan-900 shadow-2xl p-6 rounded-xl">

            <button className="absolute top-3 right-3 bg-blue-800 text-white w-6 h-6 rounded-full text-sm">
              03
            </button>

            <img
              className="mx-auto mb-4"
              src="https://i.ibb.co.com/TCfTTjW/rocket.png"
              alt=""
            />

            <h1 className="text-xl md:text-2xl font-bold mb-3">
              Start Creating
            </h1>

            <p>
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div >


      <div className="parent-card w-full mt-[120px]  bg-[#FFFFFF]">
        <div className="w-[85%] flex flex-col justify-center items-center mx-auto">
          <strong className="text-2xl mb">Simple, Transparent Pricing</strong>
          <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className="section6 mt-3 w-[85%] mx-auto flex flex-col md:flex-row gap-5 mt-8 bg-base-100 ">
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">

              <div className="">
                <h1 className="text-3xl">Starter</h1>
                <p>Perfect for getting started</p>
                <strong className="text-2xl">0$</strong><strong>month</strong>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Basic templates</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Community support</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>1 project per month</span>
                </li>
                <li>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> */}
                  <span></span>
                </li>
                <li className="opacity-50">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> */}
                  <span className="line-through"></span>
                </li>
                <li className="opacity-50">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> */}
                  <span className="line-through"></span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Get Started Free</button>
              </div>
            </div>
          </div>




          {/* card2 */}
          <div className="card w-96 bg-[#8A1AF9] shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Pro</h2>

              </div>
              <p>Best for professionals</p>
              <h1>$29/month</h1>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Access to all premium tools</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Unlimited templates</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Priority support</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Unlimited projects</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Cloud sync</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Advanced analytics</span>
                </li>

              </ul>
              <div className="mt-6">
                <button className="btn btn-white btn-block rounded-2xl">Start Pro Trial</button>
              </div>
            </div>
          </div>

          {/* card3 */}


          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">

              <div className="">
                <h2 className="text-3xl font-bold">Enterprise</h2>
                <p>For teams and businesses</p>
                <strong className="text-3xl">$99/</strong><strong>month</strong>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>verything in Pro</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Team collaboration</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Custom integrations</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Dedicated support</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>SLA guarantee</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Custom branding</span>
                </li>

              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-2xl">Contact Sales</button>
              </div>
            </div>
          </div>



        </div>
      </div>




      <div className="section7 bg-[#801FF9] mt-6">
        <div className="insid w-[70%] mt-[100px] py-[100px] mx-auto flex flex-col justify-center items-center text-white ">
          <strong className="text-2xl mb-3 ">Ready to Transform Your Workflow?</strong>
          <p className="text-center mb-3">Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
          <div className="flex gap-4 justify-center items-center  mb-3">
            <div className="btn rounded-2xl">Explore Products</div>
            <div className="btn btn-outline rounded-2xl">View Pricing</div>

          </div>
          <span className="text-center w-[100%] mx-auto ">14-day free trial • No credit card required • Cancel anytime</span>
        </div>
      </div>



      {/*   footer */}
      <div>
        <footer >
          <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ">
            <aside className="">

              <strong className="text-4xl">DigiTools</strong>

              <p>
                Premium digital tools for creators,
                <br />
                professionals, and businesses. Work smarter
                <br />
                with our suite of powerful tools.
              </p>
            </aside>
            <nav>
              <h6 className="footer-title">Products</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Resource</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>

            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>

            </nav>


          </div>


        </footer>

      </div>


      <div className="final">
        <hr />
        <aside className="mx-auto w-full bg-neutral text-neutral-content">
          <p className="text-center ">© 2026 Digitools.  {new Date().getFullYear()} - All right reserved    •Privacy Policy           •Terms of Service            •Cookies</p>
        </aside>
      </div>
   

      
      </>
      );
}                                                                                                                                                                                      
  
export default App;