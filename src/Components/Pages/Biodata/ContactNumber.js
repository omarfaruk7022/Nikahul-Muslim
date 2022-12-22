import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ContactNumber = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();
    const parents_number = e.target.parents_number.value;
    const relation = e.target.relation.value;
    const emailAddress = e.target.email_address.value;
    const number = e.target.number.value;
    const email = user?.email;
    const data = {
      parents_number,
      relation,
      emailAddress,
      number,
      email,
    };
    if (email) {
      if (
        parents_number === "" ||
        relation === "" ||
        emailAddress === "" ||
        number === ""
      ) {
        toast.error("সকল ঘর পুরন করুন");
      } else {
        fetch(`http://localhost:5000/contactNumber/${email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
        toast.success("সংরক্ষণ করা হয়েছে");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className=" p-8 w-96 lg:w-[600px] m-auto  shadow-lg">
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">
              অভিভাবকের নাম্বার *
            </h1>
            <label for="parents_number" class="sr-only">
              Underline select
            </label>
            <label
              for="parents_number"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="parents_number"
                id="parents_number"
                placeholder="parents_number"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                অভিভাবকের নাম্বার
              </span>
            </label>
            <label className="text-xs text-purple-800">
              অবশ্যই ইংরেজীতে নাম্বার লিখবেন এভাবে 01700-000000। বিঃদ্রঃ নিজের
              নাম্বার দিলে ভেরিফিকেশনে এপ্রুভ হবে না। এই ব্যাপারে আমরা সর্বোচ্চ
              কঠোর। সব সময় খোলা থাকবে এমন নাম্বার লিখবেন। নাম্বার বন্ধ থাকার
              আশংকা থাকলে দুইটি নাম্বার লিখতে পারেন।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">
              যার নাম্বার লিখেছেন *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="relation"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="relation"
                id="relation"
                placeholder="relation"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                যার নাম্বার লিখেছেন
              </span>
            </label>
            <label className="text-xs text-purple-800">
              যে অভিভাবকের নাম্বার দিয়েছেন তার সাথে আপনার সম্পর্ক। এভাবে লিখবেনঃ
              বাবা
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">
              বায়োডাটা গ্রহণের ই-মেইল এড্রেস *
            </h1>
            <label for="email_address" class="sr-only">
              Underline select
            </label>
            <label
              for="email_address"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="email_address"
                id="email_address"
                placeholder="email_address"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                বায়োডাটা গ্রহণের ই-মেইল এড্রেস
              </span>
            </label>
            <label className="text-xs text-purple-800">
              এই ই-মেইলে অপরপক্ষ বায়োডাটার লিংক পাঠাতে পারে। তাই নির্ভুলভাবে
              লিখুন।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">
              আপনার নাম্বার (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে না)
              *
            </h1>
            <label for="number" class="sr-only">
              Underline select
            </label>
            <label
              for="number"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="number"
                id="number"
                placeholder="number"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                আপনার নাম্বার
              </span>
            </label>
            <label className="text-xs text-purple-800">
              ভেরিফিকেশন বা অন্য যে কোনো প্রয়োজনে ওয়েবসাইট কতৃপক্ষ থেকে আপনাকে
              কল দেয়ার প্রয়োজন হতে পারে। তাই আপনার নাম্বার আমাদের কাছে রাখা
              হচ্ছে। এই নাম্বার বায়োডাটাতে প্রকাশ করা হবে না। অর্থাৎ আপনি এবং
              কতৃপক্ষ বাদে অন্য কেউ দেখতে পাবে না
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

export default ContactNumber;
