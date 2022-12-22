import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Address = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();
    const permanent_address = e.target.permanent_address.value;
    const present_address = e.target.present_address.value;
    const living = e.target.living.value;
    const email = user?.email;
    const data = {
      permanent_address,
      present_address,
      living,
      email,
    };
    if (email) {
      if (permanent_address === "" || present_address === "" || living === "") {
        toast.error("সকল ঘর পুরন করুন");
      } else {
        fetch(
          `https://nikahul-muslim-server-production.up.railway.app/address/${email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        toast.success("ঠিকানা সংরক্ষণ করা হয়েছে");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className=" p-8 w-96 lg:w-[600px] m-auto  shadow-lg">
          <div className="my-12 border p-5">
            <h1 className="text-center text-pink-400 font-bold mb-16">
              ঠিকানা
            </h1>
            <h1 className="text-purple-800 text-sm mb-2">স্থায়ী ঠিকানা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="UserName"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="permanent_address"
                id="UserName"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                স্থায়ী ঠিকানা
              </span>
            </label>
            <label className="text-xs text-purple-800">
              বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ মিরপুর-২,ঢাকা।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">বর্তমান ঠিকানা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="UserName"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="present_address"
                id="UserName"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                বর্তমান ঠিকানা
              </span>
            </label>
            <label className="text-xs text-purple-800">
              বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ মিরপুর-২,ঢাকা।
            </label>
          </div>
          <div>
            <h1 className="text-purple-800 text-sm mb-2">কোথায় বড় হয়েছেন? *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="UserName"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="living"
                id="UserName"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                কোথায় বড় হয়েছেন?
              </span>
            </label>
            {/* <label className="text-xs text-purple-800">
             
            </label> */}
          </div>
          <button
            type="submit"
            class="w-80 mt-12 flex m-auto group relative items-center overflow-hidden rounded-md border border-current px-8 py-3 focus:outline-none  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300  bg-pink-400 text-white font-bold"
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
  );
};

export default Address;
