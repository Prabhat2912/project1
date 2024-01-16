import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card/Card";
import Data from "../components/Card/Data.json";
import CardHover from "../components/CardHover/CardHover.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCoverflow,
  EffectCreative,
  EffectCards,
} from "swiper/modules";
import RandomCard from "../components/RandomCards/RandomCard.jsx";

import Images from "../components/RandomCards/Images.json";

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('/background-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="0 w-full min-h-screen  flex flex-col items-center justify-center ">
      <div
        className="bg-lightgray bg-center bg-no-repeat bg-custom flex justify-end items-center  "
        style={{ ...backgroundImageStyle, height: "718px", width: "100%" }}
      >
        <div className="mr-[50px] w-[643px] h-[443px] border-[10px] border-[#FFF3E3] bg-[#FFF3E3] font-poppins  p-[41px] ">
          <h1 className="font-semibold text-[#333]  tracking-[3px] mt-[21px] ">
            New Arrival
          </h1>

          <p className="w-[80%] h-[127px] text-[52px] font-bold leading-[65px] text-[#B88E2F] ">
            Discover Our New Collection
          </p>
          <p className="text-[18px] font-medium leading-6 text-[#333333] mr-[19px] mt-[17px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <button className=" w-[222px] mt-[46px] px-[70px] py-[25px]  bg-[#B88E2F] hover:bg-transparent hover:text-[#B88E2F] text-[#FFFFFF] font-bold  uppercase text-[16px] transition-all duration-300 ease-in-out border border-[#B88E2F] rounded-sm  ">
            BUY Now
          </button>
        </div>
      </div>

      <div className="w-[83%] flex flex-col  items-center  my-[56px] font-poppins   ">
        <h1 className="text-[#333333] font-bold text-[32px]  ">
          Browse The Range
        </h1>
        <p className="text-[20px] font-normal text-[#666] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-row flex-wrap gap-[32px] w-full mt-[49px] items-center justify-center font-poppins text-[#333] ">
          <Link
            to="#"
            className=" hover:cursor-pointer transition transform hover:scale-105 text-center font-semibold text-[24px] "
          >
            <img src="/dinning.png" alt="dinning" className="rounded-md" />
            Dining
          </Link>
          <Link
            to="#"
            className=" hover:cursor-pointer transition transform hover:scale-105 text-center font-semibold text-[24px]  "
          >
            <img src="/living.png" alt="dinning" className="rounded-md" />
            Living
          </Link>
          <Link
            to="#"
            className=" hover:cursor-pointer transition transform hover:scale-105 text-center font-semibold text-[24px] "
          >
            <img src="/bedroom.png" alt="dinning" className="rounded-md" />
            Bedroom
          </Link>
        </div>
      </div>

      <div className="w-[83%] flex flex-col gap-y-[32px]  items-center   font-poppins  ">
        <h1 className="leading-[120%] text-[40px] text-center text-[#3A3A3A]  ">
          Our Products
        </h1>
        <div className="flex flex-row flex-wrap gap-[32px] py-2 justify-center transition-all duration-300 ease-in-out  ">
          {/* {Data.map((data) => (
            <Card key={data.id} product={data} />
          ))} */}
          {isClicked
            ? Data.map((item) => <Card key={item.id} product={item} />)
            : Data.slice(0, 8).map((item) => (
                <Card key={item.id} product={item} />
              ))}
        </div>
        <button
          className={`border-[#B88E2F] border w-[245px] text-[#B88E2F] text-[16px] font-semibold leading-[150%] text-center px-[70px] py-[12px] hover:bg-[#B88E2E] hover:text-[white] transition-all duration-300 ease-in-out rounded-sm `}
          onClick={() => {
            setIsClicked((prev) => !prev);
          }}
        >
          {isClicked ? "Hide" : "Show More"}
        </button>
      </div>
      <div className="w-full bg-[#FCF8F3] h-[670px] mt-[69px] flex items-center ">
        <div className="w-1/3 pr-5 flex flex-col   font-poppins ml-[100px] gap-y-[7px]  ">
          <h1 className="text-[40px] leading-[120%] font-bold text-[#3A3A3A]   ">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-[16px] leading-[150%] font-medium w-3/4 text-[#616161] ">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="bg-[#B88E2F] py-[12px] px-[36px] text-[16px] mt-[25px] w-[176px] text-[#fff] font-semibold leading-[150%] ">
            Explore More
          </button>
        </div>
        <div className="flex justify-center items-center h-full w-2/3 ">
          <Swiper
            slidesPerView={2}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
              },
            }}
            modules={[EffectCreative, Navigation, Pagination, EffectCards]}
            className=" w-3/4 "
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
          >
            {Data.slice(8, 12).map((p) => (
              <SwiperSlide key={p.id}>
                <CardHover data1={p} />
              </SwiperSlide>
            ))}

            <div className="rounded-full rotate-180 w-12 h-12 flex justify-center items-center shadow-md bg-white absolute top-[50%] left-1 p-1 button-prev-slide z-20 ">
              <img
                src="/right.png"
                alt=""
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <div className="rounded-full w-12 h-12 flex justify-center items-center shadow-md bg-white absolute top-[50%] right-1 p-1 button-next-slide z-20 ">
              <img
                src="/right.png"
                alt=""
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          </Swiper>
        </div>
      </div>
      <div className="mt-[67px] mb-[50px]">
        <h1 className="w-full text-center text-[20px] font-poppins font-semibold text-[#616161] leading-[150%] ">
          Share your setup with
        </h1>
        <h1 className="w-full text-center text-[40px] font-poppins font-bold text-[#3A3A3A] leading-[120%] ">
          #FuniroFurniture
        </h1>

        <div className="w-[1799px] flex flex-row flex-wrap gap-2  items-center  ">
          <div className="flex flex-col w-[42%] items-center gap-4 ">
            <div className="flex items-end gap-2">
              {" "}
              <RandomCard image={Images[0]} />
              <RandomCard image={Images[1]} />
            </div>
            <div className="flex items-start gap-2">
              <RandomCard image={Images[5]} />
              <RandomCard image={Images[6]} />
            </div>
          </div>
          <div className="w-[16%] flex flex-row items-center h-full  justify-center ">
            <RandomCard image={Images[2]} />
          </div>
          <div className=" flex flex-col w-[41%]  gap-3  ">
            <div className="flex items-end w-full gap-2 ">
              <RandomCard image={Images[3]} />
              <RandomCard image={Images[4]} />
            </div>
            <div className="flex items-start w-full gap-2 ">
              <RandomCard image={Images[7]} />
              <RandomCard image={Images[8]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
