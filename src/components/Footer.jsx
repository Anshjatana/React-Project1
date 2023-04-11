import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="md:flex md:justify-between mb-14">
        <div className="flex flex-col ">
          <div className="flex md:ml-[65px] ml-[40px] mb-[22px]">
            <div className="w-9 mr-4">
              <img src="assets/logo.png" alt="logo" />
            </div>
            <div className="text-2xl font-semibold text-[#7F56D9]">
              Hourglass
            </div>
          </div>
          <div>
            <ul className="md:flex md:ml-[65px] ml-[40px] md:w-auto">
              <li className="  md:w-[73px]  md:h-[24px] font-medium text-base text-[#667085]">
                Overview
              </li>
              <li className=" md:pl-4  md:w-[73px]  md:h-[24px] font-medium text-base text-[#667085]">
                Features
              </li>
              <li className=" md:pl-8  md:w-[73px]  md:h-[24px] font-medium text-base text-[#667085]">
                Pricing
              </li>
              <li className=" md:pl-8  md:w-[73px]  md:h-[24px] font-medium text-base text-[#667085]">
                Careers
              </li>
              <li className=" md:pl-8  md:w-[73px]  md:h-[24px] font-medium text-base text-[#667085]">
                Help
              </li>
              <li className=" md:pl-4  md:w-[73px]  md:h-[24px] font-medium text-base text-[#667085]">
                Privacy
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col relative">
          <div className="w-[360px] relative h-[20px] md:right-[82px]  md:left-auto left-[40px] md:top-auto top-[20px] text-sm font-bold text-[#101828] mb-4">
            Stay up to date
          </div>
          <div className="md:flex md:flex-row flex-col">
            <input
              className="md:w-[230px] w-[350px] relative h-[44px] md:left-auto left-[40px] md:top-auto top-[20px] border rounded-lg border-[1px solid #D0D5DD] pl-3 mr-2 right-[82px]"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className=" text-white relative bg-[#7F56D9] md:left-auto left-[40px] md:top-auto top-[40px] border rounded-lg border-transparent font-semibold md:w-[114px] w-[350px] pl-[10px] py-[10px] md:right-[70px] right-[40px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="md:ml-[65px] ml-[40px] mr-[27px] md:mr-[60px]" />
      <div className="md:flex  flex flex-col-reverse justify-between mb-[40px]">
        <div className="mt-6 md:w-[988px] h-[24px] font-normal text-base text-[#98A2B3] md:ml-[65px] ml-[40px]">
          © 2077 Fake Company. All rights reserved.
        </div>
        <div>
          <ul className="flex md:mr-[65px] md:ml-[64px] ml-[40px] mt-6">
            <li className="w-[47px] h-[24px] text-base font-normal mr-4  text-[#98A2B3]">
              Terms
            </li>
            <li className="w-[47px] h-[24px] text-base font-normal mr-4 text-[#98A2B3]">
              Privacy
            </li>
            <li className="w-[47px] h-[24px] text-base font-normal mr-4 text-[#98A2B3]">
              Cookies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
