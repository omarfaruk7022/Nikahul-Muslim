import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Name = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = user?.email;
    const data = {
      name,
      email,
    };
    if (email) {
      if (name === "") {
        toast.error("Please Fill up The Field");
      } else {
        fetch("http://localhost:5000/addName", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        toast.success("Name Added Successfully");
      }
    }
  };
  return (
    <div>
      <div className="mt-28 ">
        <form onSubmit={handleSave}>
          <div className="w-96 m-auto shadow-lg p-5">
          <h1 className="text-purple-800 text-sm mb-2">
              নাম *
            </h1>
            <label
              for="UserName"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="name"
                name="name"
                id="UserName"
                placeholder="Email"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                নাম
              </span>
            </label>
            <label className="text-xs text-purple-800">
              নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার নাম
              পাবলিকলি প্রকাশ করা হবে না।
            </label>
            <button
              type="submit"
              class="w-80 mt-5  flex m-auto group relative items-center overflow-hidden rounded-md border border-current px-8 py-3 focus:outline-none  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300  bg-pink-400 text-white font-bold"
            >
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span class="text-sm font-medium transition-all group-hover:mr-4">
                Save
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Name;
