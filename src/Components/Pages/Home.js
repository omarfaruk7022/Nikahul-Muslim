import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="bg-base-300 w-96 flex justify-between ">
        <h1 className="">আমি খুজছি </h1>
        <div className="form-control w-[220px] lg:ml-2 ">
          <select name="gender" className="select select-bordered">
            <option default>সকল বায়োডাটা</option>
            <option>পাত্রের বায়োডাটা</option>
            <option>পাত্রীর বায়োডাটা</option>
          </select>
        </div>
      </div>
      <div className="bg-base-300 w-96 flex justify-between">
        <h1 className="">বৈবাহিক অবস্থা</h1>
        <div className="form-control w-[220px] lg:ml-2 ">
          <select name="gender" className="select select-bordered">
            <option default>সকল </option>
            <option>অবিবাহিত</option>
            <option>বিবাহিত</option>
            <option>ডিভোর্সড</option>
            <option>বিধবা</option>
            <option>বিপত্নীক</option>
          </select>
        </div>
      </div>
      <div className="bg-base-300 w-96 flex justify-between">
        <h1 className="">জেলা</h1>
        <div className="form-control w-[220px] lg:ml-2 ">
          <select name="gender" className="select select-bordered">
            <option default>সকল জেলা</option>
            <option>ঢাকা</option>
            <option>গাজীপুর</option>
            <option>নরসিংদী</option>
            <option>শরীয়তপুর</option>
            <option>নারায়ণগঞ্জ</option>
            <option>টাঙ্গাইল</option>
            <option>কিশোরগঞ্জ</option>
            <option>মানিকগঞ্জ,</option>
            <option>মুন্সিগঞ্জ</option>
            <option>রাজবাড়ী</option>
            <option>মাদারীপুর</option>
            <option>গোপালগঞ্জ</option>
            <option>ফরিদপুর</option>
            <option>চট্টগ্রাম</option>
            <option>কুমিল্লা</option>
            <option>ফেনী</option>
            <option>নোয়াখালী</option>
            <option>ব্রাহ্মণবাড়িয়া</option>
            <option>রাঙ্গামাটি</option>
            <option>চাঁদপুর</option>
            <option>লক্ষ্মীপুর</option>
            <option>কক্সবাজার</option>
            <option>খাগড়াছড়ি</option>
            <option>বান্দরবান</option>
            <option>রাজশাহী</option>
            <option>সিরাজগঞ্জ</option>
            <option>পাবনা</option>
            <option>বগুড়া</option>
            <option>চাঁপাইনবাবগঞ্জ</option>
            <option>নাটোর</option>
            <option>জয়পুরহাট</option>
            <option>নওগাঁ</option>
            <option>খুলনা</option>
            <option>যশোর</option>
            <option>সাতক্ষীরা</option>
            <option>মেহেরপুর</option>
            <option> নড়াইল</option>
            <option>চুয়াডাঙ্গা</option>
            <option>কুষ্টিয়া</option>
            <option> মাগুরা</option>
            <option>বাগেরহাট</option>
            <option>ঝিনাইদহ</option>
            <option>বরিশাল</option>
            <option>ঝালকাঠি</option>
            <option> পটুয়াখালী</option>
            <option> পিরোজপুর</option>
            <option>ভোলা</option>
            <option>বরগুনা</option>
            <option>সিলেট</option>
            <option>সুনামগঞ্জ</option>
            <option>হবিগঞ্জ</option>
            <option>মৌলভীবাজার</option>
            <option>রংপুর</option>
            <option>পঞ্চগড়</option>
            <option>দিনাজপুর</option>
            <option>লালমনিরহাট</option>
            <option>নীলফামারী</option>
            <option>গাইবান্ধা</option>
            <option>ঠাকুরগাঁও</option>
            <option>কুড়িগ্রাম</option>
            <option>ময়মনসিংহ</option>
            <option>শেরপুর</option>
            <option>জামালপুর</option>
            <option>নেত্রকোণা</option>
          </select>
        </div>
      </div>
      <div className="bg-pink-400 w-96 flex justify-between">
        <h1 className="">বায়োডাটা নং </h1>

        <div>
          <div className="">
            <label class="sr-only" for="email">
              বায়োডাটা নং
            </label>
            <input
              name="biodata"
              class="w-[220px] lg:ml-2 p-3 text-sm border-gray-200 rounded-lg "
              placeholder="Salary range"
              type="text"
              id="salary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
