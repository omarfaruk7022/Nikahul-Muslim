import React from "react";

const Qualification = () => {
  const handleSave = (e) => {};
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className=" p-8 w-96 lg:w-[600px] m-auto  shadow-lg">
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">বয়স *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="className"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="className"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                বয়স লিখুন
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">গাত্রবর্ণ *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="className"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="className"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                গাত্রবর্ণ লিখুন
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">নূন্যতম উচ্চতা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="className"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="className"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                উচ্চতা লিখুন
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              নূন্যতম শিক্ষাগত যোগ্যতা *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="className"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="className"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                নূন্যতম শিক্ষাগত যোগ্যতা
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">জেলা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="className"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="className"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                জেলা
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">বৈবাহিক অবস্থা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="education_select"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option default>যেইকোনো</option>
              <option>অবিবাহিত</option>
              <option>বিবাহিত</option>
              <option>ডিভোর্সড</option>
              <option>বিধবা</option>
              <option>বিপত্নীক</option>
            </select>
            {/* <label className="text-xs text-purple-800">
              বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ মিরপুর-২,ঢাকা।
            </label> */}
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">পেশা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="className"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="className"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                পেশা
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">অর্থনৈতিক অবস্থা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="className"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="className"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                অর্থনৈতিক অবস্থা ও পারিবারিক অবস্থা *
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
            জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন *
            </h1>

            <textarea
              name="about_yourself"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-200 focus:ring-pink-400 focus:border-pink-400 "
              placeholder="জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী লিখুন ..."
            ></textarea>
            <label className="text-xs text-purple-800">
            এই পয়েন্ট অনেক গুরুত্বপূর্ণ। সময় নিয়ে বিস্তারিত লিখুন। কোন বিশেষ শর্ত থাকলে তা-ও লিখতে পারেন।
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

export default Qualification;
