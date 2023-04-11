import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#53389E]  w-full md:h-[1188px] h-[1100px]">
      <div className="md:max-w-[1240px] flex flex-col mx-auto">
        <div className="md:text-[60px] text-[35px]  font-normal md:font-normal lg:h-[144px] mx-[39px] md:ml-[19px] md:leading-[72px] leading-[62px] md:pt-[75px] pt-[35px] sm:pb-5  text-white md:h-auto">
          We design physical <u>experiences</u> that create more happy in the
          world
        </div>
        <div className="text-[18px] lg:w-[640px] w-[343px] md:w-auto lg:mt-[100px]  md:ml-[19px] ml-[41px] mt-[20px]   font-light h-[60px] text-[#E9D7FE] md:top-[168px]">
          — We're a full-service interior design agency who specialise in
          simple, useful and beautiful solutions for any space.
        </div>
        <div className="flex  ">
          <button className="bg-[#F9F5FF] flex md:w-auto w-1/2  text-[#6941C6] border rounded-lg border-transparent font-normal px-[12px] mr-[5px] py-[8px] mt-16 md:mt-12 md:ml-[19px] ml-[41px]">
            <svg
              className="mr-2 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#6941C6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
                stroke="#6941C6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Show reel
          </button>
          <button className="text-white w-1/2 md:mt-12 md:w-auto bg-[#7F56D9] border rounded-lg border-transparent font-normal px-[16px] py-[8px] ml-[5px] mt-16 mr-[30px]">
            Get in touch
          </button>
        </div>
        <div className=" md:h-[516px] h-[250px]  mt-[65px] md:ml-[19px] ml-[41px] md:mr-[20px] mr-[31px]">
          <img
            className="h-[220px]  md:h-[516px] w-[343px] md:w-[1216px]"
            src="assets/heroimage.jpg"
            alt="img"
          />
        </div>
        <div className=" flex items-center  justify-center  relative md:top-[45px] top-[10px] text-white ">
          We’ve worked with some great startups
        </div>
        <div className="flex md:items-center items-start w-[375px] flex-wrap justify-center relative top-[15px] md:top-[20px] md:w-auto h-[260px] md:h-[150px] ">
          <img
            src="assets/company-logo-layer.png"
            alt="layers"
            className="md:h-[50px] h-[45px] md:ml-[66px] ml-[20px] mt-[28px]  "
          />
          <img
            src="assets/company-logo-sisyphus.png"
            alt="sisyphus"
            className="md:h-[50px] h-[45px] md:ml-[66px] ml-[20px] mt-[28px]"
          />
          <img
            src="assets/company-logo-circooles.png"
            alt="circooles"
            className="md:h-[50px] h-[45px] md:ml-[66px] ml-[20px] mt-[28px]"
          />
          <img
            src="assets/company-logo-catalog.png"
            alt="catalog"
            className="md:h-[50px] h-[45px] md:ml-[66px] ml-[20px] mt-[28px]"
          />
          <img
            src="assets/company-logo-quotient.png"
            alt="quotient"
            className="md:h-[50px] h-[41px]  md:ml-[66px] ml-[6px] pl-[15px] mt-[28px]"
          />
          <img
            src="assets/company-logo-circooles.png"
            alt="circooles"
            className="md:h-[50px] md:hidden  h-[44px] md:ml-[66px] ml-[15px] mt-[28px]"
          />
        </div>
      </div>
    </div>
  );
}
