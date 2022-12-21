import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const handleSignOut = () => {
    signOut(auth);
    toast.success("Sign Out Successfully");
  };
  return (
    <div>
      <div className="navbar bg-base-100 px-0 lg:px-28">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                to="/"
                class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
              >
                হোম
              </Link>
              <Link
                to="/biodata"
                class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
              >
                বায়োডাটা তৈরী করুন
              </Link>

              <Link
                to="/about"
                class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
              >
                আমাদের সম্পর্কে
              </Link>

              <Link
                to="/contact"
                class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
              >
                যোগাযোগ
              </Link>

              {user ? (
                  <>
                    <button
                      onClick={handleSignOut}
                      className="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary "
                    >
                      লগ আউট
                    </button>
                  </>
                ) : (
                  <Link to="/login">
                    <button className="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary">
                      লগইন
                    </button>
                  </Link>
                )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div class="flex flex-1 items-center justify-end">
              <nav
                aria-label="Site Nav"
                class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
              >
                <Link
                  to="/"
                  class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
                >
                  হোম
                </Link>
                <Link
                  to="/biodata"
                  class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
                >
                  বায়োডাটা তৈরী করুন
                </Link>
                <Link
                  to="/about"
                  class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
                >
                  আমাদের সম্পর্কে
                </Link>
                <Link
                  to="/contact"
                  class="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary"
                >
                  যোগাযোগ
                </Link>

                

                {user ? (
                  <>
                    <button
                      onClick={handleSignOut}
                      className="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary "
                    >
                      লগ আউট
                    </button>
                  </>
                ) : (
                  <Link to="/login">
                    <button className="block h-16 transition duration-200 ease-in border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-primary">
                      লগইন
                    </button>
                  </Link>
                )}
              </nav>

              <div class="ml-8 flex items-center">
                <div class="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                  <span>
                    <Link
                      href="/account"
                      class="block transition duration-200 ease-in border-b-4 border-transparent p-6 hover:text-primary"
                    >
                      <svg
                        class="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span class="sr-only"> Account </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </div>
          
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
