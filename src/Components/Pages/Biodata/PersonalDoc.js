import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const PersonalDoc = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();
    const namaz_regular = e.target.namaz_regular.value;
    const namaz_start = e.target.namaz_start.value;
    const mahram_select = e.target.mahram_select.value;
    const tilawat = e.target.tilawat.value;
    const majhab_follow = e.target.majhab_follow.value;
    const politics_follow = e.target.politics_follow.value;
    const watch_television = e.target.watch_television.value;
    const mentally_sick = e.target.mentally_sick.value;
    const tableeg = e.target.tableeg.value;
    const peer_name = e.target.peer_name.value;
    const three_books = e.target.three_books.value;
    const three_alem = e.target.three_alem.value;
    const about_profession = e.target.about_profession.value;
    const about_yourself = e.target.about_yourself.value;

    const email = user?.email;
    const data = {
      namaz_regular,
      namaz_start,
      mahram_select,
      tilawat,
      majhab_follow,
      politics_follow,
      watch_television,
      mentally_sick,
      tableeg,
      peer_name,
      three_books,
      three_alem,
      about_profession,
      about_yourself,

      email,
    };
    if (email) {
      if (
        namaz_regular === "" ||
        namaz_start === "" ||
        mahram_select === "" ||
        tilawat === "" ||
        majhab_follow === "" ||
        politics_follow === "" ||
        watch_television === "" ||
        mentally_sick === "" ||
        tableeg === "" ||
        peer_name === "" ||
        three_books === "" ||
        three_alem === "" ||
        about_profession === "" ||
        about_yourself === ""
      ) {
        toast.error("সকল ঘর পুরন করুন");
      } else {
        fetch("http://localhost:5000/personalDocs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        toast.success("সংরক্ষণ করা হয়েছে");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className=" p-8 w-96 lg:w-[600px] m-auto  shadow-lg">
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়া হয় ? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="namaz_regular"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="namaz_regular"
                id="namaz_regular"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়া হয় ?
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              কত বছর/মাস যাবত ৫ ওয়াক্ত নামায শুরু করেছেন ?
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="namaz_start"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="namaz_start"
                id="namaz_start"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                কত বছর/মাস যাবত ৫ ওয়াক্ত নামায শুরু করেছেন।
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              মাহরাম/নন-মাহরাম মেনে চলেন কি? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="mahram_select"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="mahram_select"
                id="mahram_select"
                placeholder="মাহরাম/নন-মাহরাম"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                মাহরাম/নন-মাহরাম মেনে চলেন কি? *
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div>
            <h1 className="text-purple-800 text-sm mb-2">
              শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="কুরআন_তিলওয়াত"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="tilawat"
                id="কুরআন_তিলওয়াত"
                placeholder="কুরআন_তিলওয়াত"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন? *
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              কোন মাঝহাব অনুসরণ করেন? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="majhab_follow"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="majhab_follow"
                id="majhab_follow"
                placeholder="Majhab_follow"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                কোন মাঝহাব অনুসরণ করেন? *
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              কোনো রাজনৈতিক দর্শন থাকলে লিখুন *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="politics_follow"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="politics_follow"
                id="politics_follow"
                placeholder="Majhab_follow"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                কোনো রাজনৈতিক দর্শন থাকলে লিখুন
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="watch_television"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="watch_television"
                id="watch_television"
                placeholder="watch_television"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন?
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              মানসিক বা শারীরিক কোনো রোগ আছে কি? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="mentally_sick"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="mentally_sick"
                id="mentally_sick"
                placeholder="watch_television"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                মানসিক বা শারীরিক কোনো রোগ আছে কি?
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="tableeg"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="tableeg"
                id="tableeg"
                placeholder="tableeg"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন?
              </span>
            </label>
            <label className="text-xs text-purple-800">
              যেমনঃ তাবলীগ ইত্যাদি।
            </label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              আপনি কি কোনো পীরের মুরিদ বা অনুসারী ? *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="peer_name"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="peer_name"
                id="peer_name"
                placeholder="peer_name"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                আপনি কি কোনো পীরের মুরিদ বা অনুসারী ?
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              আপনার পছন্দের অন্তত ৩ টি ইসলামী বই এর নাম লিখুন *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="three_books"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="three_books"
                id="three_books"
                placeholder="three_books"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                আপনার পছন্দের অন্তত ৩ টি ইসলামী বই এর নাম লিখুন
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন *
            </h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="three_alem"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="three_alem"
                id="three_alem"
                placeholder="three_alem"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন
              </span>
            </label>
            <label className="text-xs text-purple-800">বাংলায় লিখুন।</label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা (যদি থাকে)
            </h1>

            <textarea
              name="about_profession"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-200 focus:ring-pink-400 focus:border-pink-400 "
              placeholder="বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা ..."
            ></textarea>
            <label className="text-xs text-purple-800">
              জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন।
            </label>
          </div>
          <div className="my-12">
            <h1 className="text-purple-800 text-sm mb-2">
              নিজের সম্পর্কে কিছু লিখুন *
            </h1>

            <textarea
              name="about_yourself"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-200 focus:ring-pink-400 focus:border-pink-400 "
              placeholder="নিজের সম্পর্কে কিছু লিখুন ..."
            ></textarea>
            <label className="text-xs text-purple-800">
              নিজের পছন্দ-অপছন্দ, শখ-ইচ্ছা, দ্বীনী-দুনিয়াবী ইত্যাদি বিষয়
              বিস্তারিত লিখতে হবে। কারণ এই লেখা পড়ে পাঠক আপনার সম্পর্কে সাধারণ
              ধারণা লাভ করবে।
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

export default PersonalDoc;
