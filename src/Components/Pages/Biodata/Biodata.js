import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

// import useAdmin from "../Shared/Hooks/useAdmin";

const Biodata = () => {
  const [user] = useAuthState(auth);

  //   const [admin] = useAdmin(user);
  //   const {
  //     data: orders,
  //     isLoading,
  //     refetch,
  //   } = useQuery("orders", () =>
  //     fetch(` https://smart-coffee-server-production.up.railway.app/cartList`, {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         return data;
  //       })
  //   );
  //   const { data: products } = useQuery("products", () =>
  //     fetch(` https://smart-coffee-server-production.up.railway.app/products`, {
  //       method: "GET",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         return data;
  //       })
  //   );
  //   const { data: users } = useQuery("users", () =>
  //     fetch(" https://smart-coffee-server-production.up.railway.app/users", {
  //       method: "GET",
  //       headers: {},
  //     }).then((res) => res.json())
  //   );
  //   const { data: usersData } = useQuery("usersData", () =>
  //     fetch("  https://smart-coffee-server-production.up.railway.app/usersData", {
  //       method: "GET",
  //       headers: {},
  //     }).then((res) => res.json())
  //   );
  //   refetch();
  //   const totalOrder = orders?.length;
  //   const totalProduct = products?.length;
  //   const totalUsers = users?.length;
  //   const totalUsersData = usersData?.length;

  return (
    <div
    // className="drawer drawer-mobile"
    >
      <aside class="">
        <div class="overflow-y-auto py-4 px-28 bg-gray-50 rounded">
          <ul class=" grid lg:grid-cols-6 grid-cols-1">
          <li>
              <Link
                to="/biodata"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  নাম
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/simpleDetails"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">সাধারণ তথ্য</span>
                <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/address"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">ঠিকানা</span>
                <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/education"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  শিক্ষাগত যোগ্যতা
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/familyDetails"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  পারিবারিক তথ্য
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/personalDoc"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  ব্যক্তিগত তথ্য
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/aboutWedding"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  বিয়ে সংক্রান্ত তথ্য
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/otherDetails"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">অন্যান্য তথ্য</span>
              </Link>
            </li>
            <li>
              <Link
                to="qualification"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  যেমন জীবনসঙ্গী আশা করেন
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/biodata/asking"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  কর্তৃপক্ষের জিজ্ঞাসা
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-pink-400 hover:text-white  "
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">যোগাযোগ</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <h1 className="text-purple-900 text-center">বিঃদ্রঃ ধাপে ধাপে আপনার সকল ইনফরমেশন প্রদান করুন </h1>

      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet />
      </div>

      {/* <>
        <div className="drawer-side drop-shadow-2xl">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          
        </div>
      </> */}
      
    </div>
  );
};

export default Biodata;
