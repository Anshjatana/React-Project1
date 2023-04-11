import React from "react";

export default function About() {
  return (
    <>
      <div className="flex flex-col md:h-[980px] h-[1050px]">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col">
            <p className="md:w-[520px] w-[343px] h-[24px] relative font-bold text-base top-[96px] md:left-[70px] left-[41px] text-[#6941C6]">
              Who we are
            </p>
            <h4 className="md:w-[500px] w-[375px] h-[44px] relative text-3xl font-semibold text-[#101828] top-[100px] md:left-[70px] left-[41px]">
              Commercial interior designers
            </h4>
            <p className="md:w-[520px] w-[343px] h-[90px] font-normal relative text-xl text-[#667085] md:left-[70px] left-[41px] md:top-[116px] top-[140px]">
              Untitled are a commercial interior design studio. We specialise in
              customised office design, restaurant design, shop design, and
              studio design.{" "}
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex">
              <div className=" flex md:w-[48px] w-[40px] md:h-[48px] h-[30px] md:px-auto px-1 bg-[#F4EBFF] border rounded-3xl items-center justify-center md:top-[99px] top-[250px] relative md:right-[104px] md:left-auto left-[40px] divide-transparent ">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-bold md:w-[466px] w-[287px] h-[30px] text-xl text-[#101828] relative   md:top-[106px] top-[254px] md:right-[92px] md:left-auto left-[45px] ">
                  Share team inboxes
                </h5>
                <p className=" md:w-[466px] w-[287px] md:h-[48px] h-[96px] text-base font-normal text-[#667085] relative md:top-[114px] top-[256px] md:right-[92px] md:left-auto left-11">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
              </div>
            </div>
            <div className=" flex md:w-[48px] w-[40px] md:h-[48px] h-[30px] bg-[#F4EBFF] border rounded-3xl items-center justify-center  md:top-[140px] top-[299px] relative md:right-[104px] md:py-auto py-4 md:left-auto left-[40px] divide-transparent">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L4.09347 12.6879C3.74466 13.1064 3.57026 13.3157 3.56759 13.4925C3.56528 13.6461 3.63375 13.7923 3.75327 13.8889C3.89076 14 4.16319 14 4.70805 14H12L11 22L19.9066 11.3121C20.2554 10.8936 20.4298 10.6843 20.4324 10.5075C20.4348 10.3539 20.3663 10.2077 20.2468 10.1111C20.1093 10 19.8368 10 19.292 10H12L13 2Z"
                  stroke="#7F56D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h5 className="font-bold  md:w-[466px] w-[287px] h-[30px] text-xl text-[#101828] relative md:top-[106px] top-[268px] md:right-[42px] md:left-auto left-[85px] ">
                Deliver instant answers
              </h5>
              <p className="md:w-[466px] w-[287px] md:h-[48px] h-[96px] text-base font-normal text-[#667085] relative md:top-[114px] top-[270px] md:right-[42px] md:left-auto left-[85px]">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative md:top-[210px] top-[340px] md:ml-[65px] ml-[40px] mr-[40px] md:mr-[65px]  ">
            <img
              className="md:h-[516px] h-[180px] "
              src="assets/about-image.png"
              alt="about"
            />
          </div>
        </div>
      </div>
    </>
  );
}
