import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardHover = ({ data1 }) => {
  const padSingleDigit = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${data1.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "404px",
        height: "582px",
      }}
      className="transition transform hover:scale-105 duration-300 rounded-sm hover:cursor-pointer "
      onClick={() => {
        navigate(`/product/${data1.id}`);
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div
        className="w-[217px] h-[130px] bg-white transition-opacity duration-300 bg-opacity-[72%] rounded-sm  backdrop-blur-[1.5px] absolute bottom-6 left-6 flex flex-col justify-center items-center"
        style={{ opacity: isHovered ? "1" : "0" }}
      >
        <div className="flex items-center font-poppins text-[16px] text-[#616161] leading-[150%] font-medium gap-x-[8px]">
          <p>{padSingleDigit(data1.id)}</p>
          <img src="/dash.png" alt="dash" className="w-[27px]" />
          <p>{data1.description}</p>
        </div>
        <p className="text-[#3A3A3A] text-[28px] font-semibold leading-[120%] font-poppins">
          {data1.name}
        </p>
      </div>
    </div>
  );
};

export default CardHover;
