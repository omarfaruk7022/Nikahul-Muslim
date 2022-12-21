import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const SimpleDetails = () => {
  const [user] = useAuthState(auth);
  const handleSave = (e) => {
    e.preventDefault();

    const biodataType = e.target.biodataType.value;
    const condition = e.target.condition.value;
    const permanent_district = e.target.permanent_district.value;
    const permanent_department = e.target.permanent_department.value;
    const present_district = e.target.present_district.value;
    const present_department = e.target.present_department.value;
    const birth_year = e.target.birth_year.value;
    const height = e.target.height.value;
    const weight = e.target.weight.value;
    const complexion = e.target.complexion.value;
    const blood_group = e.target.blood_group.value;
    const work = e.target.work.value;
    const income = e.target.income.value;
    const email = user?.email;

    if (
      biodataType === "..." ||
      condition === "..." ||
      permanent_district === "..." ||
      permanent_department === "..." ||
      present_district === "..." ||
      present_department === "..." ||
      birth_year === "..." ||
      height === "..." ||
      weight === "..." ||
      complexion === "..." ||
      blood_group === "..." ||
      work === ""
    ) {
      toast.error("Please fill up all the fields");
    } else {
      const data = {
        biodataType,
        condition,
        permanent_district,
        permanent_department,
        present_district,
        present_department,
        birth_year,
        height,
        weight,
        complexion,
        blood_group,
        work,
        income,
        email,
      };
      fetch("http://localhost:5000/simpleData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("Data saved successfully");
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="w-96 lg:w-[600px] m-auto mt-28 shadow-lg">
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">বায়োডাটার ধরন *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="biodataType"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black" value="পাত্রের বায়োডাটা">
                পাত্রের বায়োডাটা
              </option>
              <option className="text-black" value="পাত্রীর বায়োডাটা">
                পাত্রীর বায়োডাটা
              </option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">বৈবাহিক অবস্থা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="condition"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">অবিবাহিত</option>
              <option className="text-black">বিবাহিত</option>
              <option className="text-black">ডিভোর্সড</option>
              <option className="text-black">বিধবা</option>
              <option className="text-black">বিপত্নীক</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">স্থায়ী ঠিকানা (জেলা)*</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="permanent_district"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">ঢাকা</option>
              <option className="text-black">গাজীপুর</option>
              <option className="text-black">নরসিংদী</option>
              <option className="text-black">শরীয়তপুর</option>
              <option className="text-black">নারায়ণগঞ্জ</option>
              <option className="text-black">টাঙ্গাইল</option>
              <option className="text-black">কিশোরগঞ্জ</option>
              <option className="text-black">মানিকগঞ্জ,</option>
              <option className="text-black">মুন্সিগঞ্জ</option>
              <option className="text-black">রাজবাড়ী</option>
              <option className="text-black">মাদারীপুর</option>
              <option className="text-black">গোপালগঞ্জ</option>
              <option className="text-black">ফরিদপুর</option>
              <option className="text-black">চট্টগ্রাম</option>
              <option className="text-black">কুমিল্লা</option>
              <option className="text-black">ফেনী</option>
              <option className="text-black">নোয়াখালী</option>
              <option className="text-black">ব্রাহ্মণবাড়িয়া</option>
              <option className="text-black">রাঙ্গামাটি</option>
              <option className="text-black">চাঁদপুর</option>
              <option className="text-black">লক্ষ্মীপুর</option>
              <option className="text-black">কক্সবাজার</option>
              <option className="text-black">খাগড়াছড়ি</option>
              <option className="text-black">বান্দরবান</option>
              <option className="text-black">রাজশাহী</option>
              <option className="text-black">সিরাজগঞ্জ</option>
              <option className="text-black">পাবনা</option>
              <option className="text-black">বগুড়া</option>
              <option className="text-black">চাঁপাইনবাবগঞ্জ</option>
              <option className="text-black">নাটোর</option>
              <option className="text-black">জয়পুরহাট</option>
              <option className="text-black">নওগাঁ</option>
              <option className="text-black">খুলনা</option>
              <option className="text-black">যশোর</option>
              <option className="text-black">সাতক্ষীরা</option>
              <option className="text-black">মেহেরপুর</option>
              <option className="text-black"> নড়াইল</option>
              <option className="text-black">চুয়াডাঙ্গা</option>
              <option className="text-black">কুষ্টিয়া</option>
              <option className="text-black"> মাগুরা</option>
              <option className="text-black">বাগেরহাট</option>
              <option className="text-black">ঝিনাইদহ</option>
              <option className="text-black">বরিশাল</option>
              <option className="text-black">ঝালকাঠি</option>
              <option className="text-black"> পটুয়াখালী</option>
              <option className="text-black"> পিরোজপুর</option>
              <option className="text-black">ভোলা</option>
              <option className="text-black">বরগুনা</option>
              <option className="text-black">সিলেট</option>
              <option className="text-black">সুনামগঞ্জ</option>
              <option className="text-black">হবিগঞ্জ</option>
              <option className="text-black">মৌলভীবাজার</option>
              <option className="text-black">রংপুর</option>
              <option className="text-black">পঞ্চগড়</option>
              <option className="text-black">দিনাজপুর</option>
              <option className="text-black">লালমনিরহাট</option>
              <option className="text-black">নীলফামারী</option>
              <option className="text-black">গাইবান্ধা</option>
              <option className="text-black">ঠাকুরগাঁও</option>
              <option className="text-black">কুড়িগ্রাম</option>
              <option className="text-black">ময়মনসিংহ</option>
              <option className="text-black">শেরপুর</option>
              <option className="text-black">জামালপুর</option>
              <option className="text-black">নেত্রকোণা</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">বিভাগ *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="permanent_department"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">ঢাকা বিভাগ</option>
              <option className="text-black">চট্টগ্রাম বিভাগ</option>
              <option className="text-black">রাজশাহী বিভাগ</option>
              <option className="text-black">বরিশাল বিভাগ</option>
              <option className="text-black"> ময়মনসিংহ বিভাগ</option>
              <option className="text-black"> সিলেট বিভাগ</option>
              <option className="text-black"> খুলনা বিভাগ</option>
            </select>
            <label className="text-xs text-purple-800">
              স্থায়ী ঠিকানা যে বিভাগের আওতাধীন *
            </label>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">বর্তমান ঠিকানা (জেলা)*</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="present_district"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">ঢাকা</option>
              <option className="text-black">গাজীপুর</option>
              <option className="text-black">নরসিংদী</option>
              <option className="text-black">শরীয়তপুর</option>
              <option className="text-black">নারায়ণগঞ্জ</option>
              <option className="text-black">টাঙ্গাইল</option>
              <option className="text-black">কিশোরগঞ্জ</option>
              <option className="text-black">মানিকগঞ্জ,</option>
              <option className="text-black">মুন্সিগঞ্জ</option>
              <option className="text-black">রাজবাড়ী</option>
              <option className="text-black">মাদারীপুর</option>
              <option className="text-black">গোপালগঞ্জ</option>
              <option className="text-black">ফরিদপুর</option>
              <option className="text-black">চট্টগ্রাম</option>
              <option className="text-black">কুমিল্লা</option>
              <option className="text-black">ফেনী</option>
              <option className="text-black">নোয়াখালী</option>
              <option className="text-black">ব্রাহ্মণবাড়িয়া</option>
              <option className="text-black">রাঙ্গামাটি</option>
              <option className="text-black">চাঁদপুর</option>
              <option className="text-black">লক্ষ্মীপুর</option>
              <option className="text-black">কক্সবাজার</option>
              <option className="text-black">খাগড়াছড়ি</option>
              <option className="text-black">বান্দরবান</option>
              <option className="text-black">রাজশাহী</option>
              <option className="text-black">সিরাজগঞ্জ</option>
              <option className="text-black">পাবনা</option>
              <option className="text-black">বগুড়া</option>
              <option className="text-black">চাঁপাইনবাবগঞ্জ</option>
              <option className="text-black">নাটোর</option>
              <option className="text-black">জয়পুরহাট</option>
              <option className="text-black">নওগাঁ</option>
              <option className="text-black">খুলনা</option>
              <option className="text-black">যশোর</option>
              <option className="text-black">সাতক্ষীরা</option>
              <option className="text-black">মেহেরপুর</option>
              <option className="text-black"> নড়াইল</option>
              <option className="text-black">চুয়াডাঙ্গা</option>
              <option className="text-black">কুষ্টিয়া</option>
              <option className="text-black"> মাগুরা</option>
              <option className="text-black">বাগেরহাট</option>
              <option className="text-black">ঝিনাইদহ</option>
              <option className="text-black">বরিশাল</option>
              <option className="text-black">ঝালকাঠি</option>
              <option className="text-black"> পটুয়াখালী</option>
              <option className="text-black"> পিরোজপুর</option>
              <option className="text-black">ভোলা</option>
              <option className="text-black">বরগুনা</option>
              <option className="text-black">সিলেট</option>
              <option className="text-black">সুনামগঞ্জ</option>
              <option className="text-black">হবিগঞ্জ</option>
              <option className="text-black">মৌলভীবাজার</option>
              <option className="text-black">রংপুর</option>
              <option className="text-black">পঞ্চগড়</option>
              <option className="text-black">দিনাজপুর</option>
              <option className="text-black">লালমনিরহাট</option>
              <option className="text-black">নীলফামারী</option>
              <option className="text-black">গাইবান্ধা</option>
              <option className="text-black">ঠাকুরগাঁও</option>
              <option className="text-black">কুড়িগ্রাম</option>
              <option className="text-black">ময়মনসিংহ</option>
              <option className="text-black">শেরপুর</option>
              <option className="text-black">জামালপুর</option>
              <option className="text-black">নেত্রকোণা</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">বিভাগ *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="present_department"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">ঢাকা বিভাগ</option>
              <option className="text-black">চট্টগ্রাম বিভাগ</option>
              <option className="text-black">রাজশাহী বিভাগ</option>
              <option className="text-black">বরিশাল বিভাগ</option>
              <option className="text-black"> ময়মনসিংহ বিভাগ</option>
              <option className="text-black"> সিলেট বিভাগ</option>
              <option className="text-black"> খুলনা বিভাগ</option>
            </select>
            <label className="text-xs text-purple-800">
              বর্তমান ঠিকানা যে বিভাগের আওতাধীন *
            </label>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">জন্মসন (আসল) *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="birth_year"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">১৯৮০</option>
              <option className="text-black">১৯৮১</option>
              <option className="text-black">১৯৮২</option>
              <option className="text-black">১৯৮৩</option>
              <option className="text-black">১৯৮৪</option>
              <option className="text-black">১৯৮৫</option>
              <option className="text-black">১৯৮৬</option>
              <option className="text-black">১৯৮৭</option>
              <option className="text-black">১৯৮৮</option>
              <option className="text-black">১৯৮৯</option>
              <option className="text-black">১৯৯০</option>
              <option className="text-black">১৯৯১</option>
              <option className="text-black">১৯৯২</option>
              <option className="text-black">১৯৯৩</option>
              <option className="text-black">১৯৯৪</option>
              <option className="text-black">১৯৯৫</option>
              <option className="text-black">১৯৯৬</option>
              <option className="text-black">১৯৯৭</option>
              <option className="text-black">১৯৯৮</option>
              <option className="text-black">১৯৯৯</option>
              <option className="text-black">২০০০</option>
              <option className="text-black">২০০১</option>
              <option className="text-black">২০০২</option>
              <option className="text-black">২০০৩</option>
              <option className="text-black">২০০৪</option>
              <option className="text-black">২০০৫</option>
              <option className="text-black">২০০৬</option>
              <option className="text-black">২০০৭</option>
              <option className="text-black">২০০৮</option>
              <option className="text-black">২০০৯</option>
              <option className="text-black">২০১০</option>
              <option className="text-black">২০১১</option>
              <option className="text-black">২০১২</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">গাত্রবর্ণ *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="complexion"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">কালো</option>
              <option className="text-black">শ্যামলা</option>
              <option className="text-black">উজ্জ্বল শ্যামলা</option>
              <option className="text-black">ফর্সা</option>
              <option className="text-black"> উজ্জ্বল ফর্সা</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">উচ্চতা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="height"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">৪'১''</option>
              <option className="text-black">৪'২''</option>
              <option className="text-black">৪'৩''</option>
              <option className="text-black">৪'৪''</option>
              <option className="text-black">৪'৫''</option>
              <option className="text-black">৪'৬''</option>
              <option className="text-black">৪'৭''</option>
              <option className="text-black">৪'৮''</option>
              <option className="text-black">৪'৯''</option>
              <option className="text-black">৪'১০''</option>
              <option className="text-black">৪'১১''</option>
              <option className="text-black">৫'০''</option>
              <option className="text-black">৫'১''</option>
              <option className="text-black">৫'২''</option>
              <option className="text-black">৫'৩''</option>
              <option className="text-black">৫'৪''</option>
              <option className="text-black">৫'৫''</option>
              <option className="text-black">৫'৬''</option>
              <option className="text-black">৫'৭''</option>
              <option className="text-black">৫'৮''</option>
              <option className="text-black">৫'৯''</option>
              <option className="text-black">৫'১০''</option>
              <option className="text-black">৫'১১''</option>
              <option className="text-black">৬'০''</option>
              <option className="text-black">৬'১''</option>
              <option className="text-black">৬'২''</option>
              <option className="text-black">৬'৩''</option>
              <option className="text-black">৬'৪''</option>
              <option className="text-black">৬'৫''</option>
              <option className="text-black">৬'৬''</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">ওজন *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="weight"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">৩০ কেজি</option>
              <option className="text-black">৩১ কেজি</option>
              <option className="text-black">৩২ কেজি</option>
              <option className="text-black">৩৩ কেজি</option>
              <option className="text-black">৩৪ কেজি</option>
              <option className="text-black">৩৫ কেজি</option>
              <option className="text-black">৩৬ কেজি</option>
              <option className="text-black">৩৭ কেজি</option>
              <option className="text-black">৩৮ কেজি</option>
              <option className="text-black">৩৯ কেজি</option>
              <option className="text-black">৪০ কেজি</option>
              <option className="text-black">৪১ কেজি</option>
              <option className="text-black">৪২ কেজি</option>
              <option className="text-black">৪৩ কেজি</option>
              <option className="text-black">৪৪ কেজি</option>
              <option className="text-black">৪৫ কেজি</option>
              <option className="text-black">৪৬ কেজি</option>
              <option className="text-black">৪৭ কেজি</option>
              <option className="text-black">৪৮ কেজি</option>
              <option className="text-black">৪৯ কেজি</option>
              <option className="text-black">৫০ কেজি</option>
              <option className="text-black">৫১ কেজি</option>
              <option className="text-black">৫২ কেজি</option>
              <option className="text-black">৫৩ কেজি</option>
              <option className="text-black">৫৪ কেজি</option>
              <option className="text-black">৫৫ কেজি</option>
              <option className="text-black">৫৬ কেজি</option>
              <option className="text-black">৫৭ কেজি</option>
              <option className="text-black">৫৮ কেজি</option>
              <option className="text-black">৫৯ কেজি</option>
              <option className="text-black">৬০ কেজি</option>
              <option className="text-black">৬১ কেজি</option>
              <option className="text-black">৬২ কেজি</option>
              <option className="text-black">৬৩ কেজি</option>
              <option className="text-black">৬৪ কেজি</option>
              <option className="text-black">৬৫ কেজি</option>
              <option className="text-black">৬৬ কেজি</option>
              <option className="text-black">৬৭ কেজি</option>
              <option className="text-black">৬৮ কেজি</option>
              <option className="text-black">৬৯ কেজি</option>
              <option className="text-black">৭০ কেজি</option>
              <option className="text-black">৭১ কেজি</option>
              <option className="text-black">৭২ কেজি</option>
              <option className="text-black">৭৩ কেজি</option>
              <option className="text-black">৭৪ কেজি</option>
              <option className="text-black">৭৫ কেজি</option>
              <option className="text-black">৭৬ কেজি</option>
              <option className="text-black">৭৭ কেজি</option>
              <option className="text-black">৭৮কেজি</option>
              <option className="text-black">৭৯ কেজি</option>
              <option className="text-black">৮০ কেজি</option>
              <option className="text-black">৮১ কেজি</option>
              <option className="text-black">৮২ কেজি</option>
              <option className="text-black">৮৩ কেজি</option>
              <option className="text-black">৮৪ কেজি</option>
              <option className="text-black">৮৫ কেজি</option>
              <option className="text-black">৮৬ কেজি</option>
              <option className="text-black">৮৭ কেজি</option>
              <option className="text-black">৮৮ কেজি</option>
              <option className="text-black">৮৯ কেজি</option>
              <option className="text-black">৯০ কেজি</option>
              <option className="text-black">৯১ কেজি</option>
              <option className="text-black">৯২ কেজি</option>
              <option className="text-black">৯৩ কেজি</option>
              <option className="text-black">৯৪ কেজি</option>
              <option className="text-black">৯৫ কেজি</option>
              <option className="text-black">৯৬ কেজি</option>
              <option className="text-black">৯৭ কেজি</option>
              <option className="text-black">৯৮ কেজি</option>
              <option className="text-black">৯৯ কেজি</option>
              <option className="text-black">১০১ কেজি</option>
              <option className="text-black">১০২ কেজি</option>
              <option className="text-black">১০৩ কেজি</option>
              <option className="text-black">১০৪ কেজি</option>
              <option className="text-black">১০৫ কেজি</option>
              <option className="text-black">১০৬ কেজি</option>
              <option className="text-black">১০৭ কেজি</option>
              <option className="text-black">১০৮ কেজি</option>
              <option className="text-black">১০৯ কেজি</option>
              <option className="text-black">১১০ কেজি</option>
              <option className="text-black">১১১ কেজি</option>
              <option className="text-black">১১২ কেজি</option>
              <option className="text-black">১১৩ কেজি</option>
              <option className="text-black">১১৪ কেজি</option>
              <option className="text-black">১১৫ কেজি</option>
              <option className="text-black">১১৬ কেজি</option>
              <option className="text-black">১১৭ কেজি</option>
              <option className="text-black">১১৮ কেজি</option>
              <option className="text-black">১১৯ কেজি</option>
              <option className="text-black">১২০ কেজি</option>
              <option className="text-black">১২১ কেজি</option>
              <option className="text-black">১২২ কেজি</option>
              <option className="text-black">১২৩ কেজি</option>
              <option className="text-black">১২৪ কেজি</option>
              <option className="text-black">১২৫ কেজি</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm">রক্তের গ্রুপ *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              name="blood_group"
              class="block py-2.5 px-0  w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>...</option>
              <option className="text-black">জানা নেই</option>
              <option className="text-black">A+ (পজেটিভ)</option>
              <option className="text-black">A- (নেগেটিভ)</option>
              <option className="text-black">B+ (পজেটিভ)</option>
              <option className="text-black">B- (নেগেটিভ)</option>
              <option className="text-black">AB+ (পজেটিভ)</option>
              <option className="text-black">AB- (নেগেটিভ)</option>
              <option className="text-black">O+ (পজেটিভ)</option>
              <option className="text-black">O- (নেগেটিভ)</option>
            </select>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm mb-2">পেশা *</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="UserName"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="work"
                id="UserName"
                placeholder="পেশা"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                পেশা
              </span>
            </label>
            <label className="text-xs text-purple-800">
              সর্বোচ্চ ৩ শব্দে শুধু পদবী লিখবেন। পেশা সম্পর্কে বিস্তারিত লিখার
              জন্য সামনে প্রশ্ন আছে।
            </label>
          </div>
          <div className="my-12 p-8">
            <h1 className="text-purple-800 text-sm mb-2">মাসিক আয়</h1>
            <label for="underline_select" class="sr-only">
              Underline select
            </label>
            <label
              for="UserName"
              class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400"
            >
              <input
                type="text"
                name="income"
                id="UserName"
                placeholder="মাসিক আয়"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm "
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-pink-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ">
                মাসিক আয়
              </span>
            </label>
            <label className="text-xs text-purple-800">
              জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন। জানাতে চাইলে এভাবে লিখবেনঃ
              ৩০ হাজার
            </label>
          </div>

          <button
            type="submit"
            class="w-80  flex m-auto group relative items-center overflow-hidden rounded-md border border-current px-8 py-3 focus:outline-none  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300  bg-pink-400 text-white font-bold"
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

export default SimpleDetails;
