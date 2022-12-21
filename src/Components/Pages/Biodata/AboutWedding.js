import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AboutWedding = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();
    const approved_select = e.target.approved_select.value;
    const about_wedding = e.target.about_wedding.value;
    const email = user?.email;
    const data = {
      approved_select,
      about_wedding,
      email,
    };
    if(email){
        if(approved_select === '...' || about_wedding === ""){
            toast.error("সকল ঘর পুরন করুন");
        }else{
            fetch("http://localhost:5000/aboutWedding", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            });
            toast.success("বিয়ে সম্পর্কে সংরক্ষণ করা হয়েছে");
        }
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className=" p-8 w-96 lg:w-[600px] m-auto  shadow-lg">
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              অভিভাবক আপনার বিয়েতে রাজি কি না? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="approved_select"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">হ্যা ,রাজি </option>
              <option className="text-black">না, রাজি না </option>
            </select>
            {/* <label className="text-xs text-purple-800">
              বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ মিরপুর-২,ঢাকা।
            </label> */}
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি? *
            </h1>

            <textarea
              name="about_wedding"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-200 focus:ring-pink-400 focus:border-pink-400 "
              placeholder="নিজের সম্পর্কে কিছু লিখুন ..."
            ></textarea>
            <label className="text-xs text-purple-800">
              সংক্ষেপে বাংলায় বর্ণনা করুন।
            </label>
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

export default AboutWedding;
