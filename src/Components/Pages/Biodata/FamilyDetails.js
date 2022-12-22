import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const FamilyDetails = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();
    const father_name = e.target.father_name.value;
    const mother_name = e.target.mother_name.value;
    const father_work = e.target.father_work.value;
    const mother_work = e.target.mother_work.value;
    const sisters = e.target.sisters.value;
    const brothers = e.target.brothers.value;
    const about_relative = e.target.about_relative.value;
    const about_money = e.target.about_money.value;
    const email = user?.email;
    const data = {
      father_name,
      mother_name,
      father_work,
      mother_work,
      sisters,
      brothers,
      about_relative,
      about_money,
      email,
    };
    if (email) {
      if (
        father_name === "" ||
        mother_name === "" ||
        father_work === "" ||
        mother_work === "" ||
        sisters === "..." ||
        brothers === "..." ||
        about_money === ""
      ) {
        toast.error("সকল ঘর পুরন করুন");
      } else {
        fetch(`http://localhost:5000/familyDetails/${email}`, {
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
        toast.success("পরিবার বিবরণ সংরক্ষণ করা হয়েছে");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className=" p-8 w-96 lg:w-[600px] m-auto  shadow-lg">
            <h1 className="text-center text-pink-400 font-bold mb-16">
              {" "}
              পারিবারিক তথ্য
            </h1>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">
              পিতার নাম (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে না) *
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
                name="father_name"
                id="className"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                পিতার নাম
              </span>
            </label>
            <label className="text-xs text-purple-800">
              পিতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র ভেরিফিকেশনের
              জন্য। আপনার পিতার নাম বায়োডাটা পাবলিশ করার সময় প্রকাশ করা হবে না।
              অর্থাৎ আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ এই নাম দেখতে পাবে না।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">
              মাতার নাম (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে না) *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="mother_name"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="mother_name"
                id="mother_name"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                মাতার নাম
              </span>
            </label>
            <label className="text-xs text-purple-800">
              মাতার নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র ভেরিফিকেশনের জন্য।
              আপনার পিতার নাম বায়োডাটা পাবলিশ করার সময় প্রকাশ করা হবে না। অর্থাৎ
              আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ এই নাম দেখতে পাবে না।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">পিতার পেশা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="father_work"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="father_work"
                id="father_work"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                পিতার পেশা
              </span>
            </label>
            <label className="text-xs text-purple-800">
              মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত) ব্যবসায়ী
              ছিলেন।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">মাতার পেশা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="mother_work"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="mother_work"
                id="mother_work"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                মাতার পেশা
              </span>
            </label>
            <label className="text-xs text-purple-800">
              মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত) গৃহিনী
              ছিলেন।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">বোন কয়জন? *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="sisters"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">নাই</option>
              <option className="text-black">১ জন</option>
              <option className="text-black">২ জন</option>
              <option className="text-black">৩ জন</option>
              <option className="text-black">৪ জন</option>
              <option className="text-black">৫ জন</option>
              <option className="text-black">৬ জন</option>
              <option className="text-black">৭ জন</option>
              <option className="text-black">৮ জন</option>
              <option className="text-black">৯ জন</option>
              <option className="text-black">১০ জন</option>
            </select>
            {/* <label className="text-xs text-purple-800">
              বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ মিরপুর-২,ঢাকা।
            </label> */}
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">ভাই কয়জন? *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="brothers"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">নাই</option>
              <option className="text-black">১ জন</option>
              <option className="text-black">২ জন</option>
              <option className="text-black">৩ জন</option>
              <option className="text-black">৪ জন</option>
              <option className="text-black">৫ জন</option>
              <option className="text-black">৬ জন</option>
              <option className="text-black">৭ জন</option>
              <option className="text-black">৮ জন</option>
              <option className="text-black">৯ জন</option>
              <option className="text-black">১০ জন</option>
            </select>
            {/* <label className="text-xs text-purple-800">
              বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ মিরপুর-২,ঢাকা।
            </label> */}
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">চাচা মামাদের পেশা</h1>

            <textarea
              name="about_relative"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-200 focus:ring-pink-400 focus:border-pink-400 "
              placeholder="চাচা মামাদের পেশা..."
            ></textarea>
            <label className="text-xs text-purple-800">
              জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন।
            </label>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2">
              পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা *
            </h1>

            <textarea
              name="about_money"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-200 focus:ring-pink-400 focus:border-pink-400 "
              placeholder="পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা..."
            ></textarea>
            <label className="text-xs text-purple-800">
              সংক্ষেপে বর্ণনা করুন।
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

export default FamilyDetails;
