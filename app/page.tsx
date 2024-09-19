'use client'
import HomeTopCard from "@/components/Home/HomeTopCard";
import { useState } from "react";
import { BsAmd } from "react-icons/bs";
import { TbArrowsExchange } from "react-icons/tb";

const Home = () => {

  const [mode, setMode] = useState(1);

  return (
    <div className="px-4">
      <div className="h-12"></div>
      <div className="flex justify-between items-center">
        <div className="text-2xl text-white">My Portfolio</div>
        <BsAmd className={`text-white ${mode == 1 ? 'rotate-180' : 'rotate-360 '} transition-all `} onClick={() => setMode(mode === 1 ? 2 : 1)} />
      </div>

      <div className="mt-7">
        <HomeTopCard mode={mode}></HomeTopCard>
      </div>

      <div className="mt-7">
        <div className="text-2xl text-white">Convert</div>
          <div className="grid grid-cols-2 mt-4 filters relative">
            <div className="text-white text-xl p-4 rounded-lg rounded-r-[40px] shdom-r ">
                <div className="text-[#8c8c8c] text-sm" >Send</div>
                <div className="text-lg">0.686</div>
                <div className="text-lg mt-6">BTC</div>
            </div>
            <div className="text-white text-xl p-4 rounded-lg rounded-l-[40px]  shdom-l flex flex-col items-end ">
                <div className="text-[#8c8c8c] text-sm" >Get</div>
                <div className="text-lg">0.686</div>
                <div className="text-lg mt-6">BTC</div>
            </div>

            <div className=" fg grid place-content-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00D092FF] rounded-full p-2 w-12 h-12">
              <TbArrowsExchange className="text-white text-xl"></TbArrowsExchange>
            </div>

          </div>
        </div>

    </div>
  );
}

export default Home;
