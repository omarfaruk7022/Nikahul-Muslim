import React, { useState } from "react";

const Name = () => {
  return (
    <div>
      <div className="mt-28">
       <div className="w-96 m-auto">
       
       <label
          for="UserName"
          class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
        >
          <input
            type="name"
            id="UserName"
            placeholder="Email"
            class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
          />

          <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
            নাম
          </span>
        </label>
          <label className="text-xs text-purple-800" >নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার নাম পাবলিকলি প্রকাশ করা হবে না।</label>
       </div>
      </div>
    </div>
  );
};

export default Name;
