import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate()

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo Section */}
            <div className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUE33H7s_m7qiIup52vqfk7aU9ekaED6iJeA&s"
                className="mr-3 h-6 sm:h-9 cursor-pointer"
                alt="jr Logo"
                onClick={()=>{
                  navigate('/')
                }}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Jeet Research
              </span>
            </div>

            {/* Navigation Section */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-8 font-medium">
                <li>
                  <Link to='/'>
                    <span
                      className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to='/about-us'>
                    <span

                      className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={"/services"}>
                    <span
                      className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/blogs'}>
                    <span

                      className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Blogs
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/contact'}>
                    <span
                      className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                    >
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="lg:hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleDrawer}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>



            {/* Overlay (optional) */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleDrawer}
              ></div>
            )}

            {/* Drawer */}
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="p-4">
                <h2 className="text-lg font-bold text-center">Jeet Research</h2>
                {/* <button
            onClick={toggleDrawer}
            className="mt-4 p-2 bg-red-500 text-white rounded-lg focus:outline-none hover:bg-red-600"
          >
            Close Drawer
          </button> */}
              </div>

              <ul className="mt-4 space-y-2 text-center">
                <li className="border-t-2" onClick={toggleDrawer}>
                 <Link to={'/'}>
                 <span  className="block p-2 text-gray-700 hover:bg-gray-100">
                    Home
                  </span>
                 </Link>
                </li>
                <li className="border-t-2" onClick={toggleDrawer}> 
                <Link to={'/about-us'}>
                  <span className="block p-2 text-gray-700 hover:bg-gray-100">
                    About
                  </span>
                  </Link>
                </li>
                <li className="border-t-2" onClick={toggleDrawer}>
                <Link to={'/services'}>
                  <span className="block p-2 text-gray-700 hover:bg-gray-100">
                    Services
                  </span>
                  </Link>
                </li>
                <li className="border-t-2" onClick={toggleDrawer}>
                <Link to={'/blogs'}>
                  <span className="block p-2 text-gray-700 hover:bg-gray-100">
                    Blogs
                  </span>
                  </Link>
                </li>
                <li className="border-t-2 border-b-2" onClick={toggleDrawer}>
                <Link to={'/contact'}>
                  <span className="block p-2 text-gray-700 hover:bg-gray-100">
                    Contact
                  </span>
                  </Link>
                </li>
              </ul>
            </div>



          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
