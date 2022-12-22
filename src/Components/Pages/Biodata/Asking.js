import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Asking = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();
    const approval_status = e.target.approval_status.value;
    const true_status = e.target.true_status.value;
    const responsibility = e.target.responsibility.value;
    const email = user?.email;
    const data = {
      approval_status,
      true_status,
      responsibility,
      email,
    };
    if (email) {
      if (
        approval_status === "..." ||
        true_status === "..." ||
        responsibility === "..."
      ) {
        toast.error("সকল ঘর পুরন করুন");
      } else {
        fetch(
          `https://nikahul-muslim-server-production.up.railway.app/asking/${email}`,
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
        toast.success("সংরক্ষণ করা হয়েছে");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className=" p-8 w-96 lg:w-[600px] m-auto  shadow-lg">
          <h1 className="text-center text-pink-400 font-bold mb-16">
            কর্তৃপক্ষের জিজ্ঞাসা
          </h1>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2 font-bold">
              Nikahul-muslim.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক
              জানেন?*
            </h1>
            <label for="approval_status" class="sr-only">
              Underline select
            </label>
            <select
              id="approval_status"
              name="approval_status"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>

              <option>হ্যা</option>
              <option>না</option>
            </select>
          </div>
          <div className="my-20">
            <h1 className="text-purple-800 text-sm mb-2 font-bold">
              আল্লাহ'র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিচ্ছেন সব সত্য? *
            </h1>
            <label for="true_status" class="sr-only">
              Underline select
            </label>
            <select
              id="true_status"
              name="true_status"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>

              <option>হ্যা</option>
              <option>না</option>
            </select>
          </div>
          <div className="my-12 border p-5">
            <h1 className="text-purple-800 text-sm mb-2 font-bold">
              কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার
              ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি? *
            </h1>
            <label for="responsibility" class="sr-only">
              Underline select
            </label>
            <select
              id="responsibility"
              name="responsibility"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>

              <option>হ্যা</option>
              <option>না</option>
            </select>
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

export default Asking;
