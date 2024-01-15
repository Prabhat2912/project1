import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card/Card";
import Data from "../components/Card/Data.json";
import CardHover from "../components/CardHover/CardHover.jsx";
import Product from "../components/CardHover/Data2.json";

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
          {Data.map((data) => (
            <Card key={data.id} product={data} />
          ))}
          {isClicked
            ? Product.map((item) => <Card key={item.id} product={item} />)
            : ""}
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
        <div className="flex gap-x-[24px] overflow-x-auto w-2/3 h-full items-center px-6  ">
          {Product.map((p) => (
            <div key={p.id}>
              <CardHover data1={p} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
