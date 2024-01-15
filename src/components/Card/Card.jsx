import React from "react";
import { useNavigate } from "react-router-dom";
export const Card = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();

  return (
    <div
      className="relative w-[285px] h-[446px] border bg-[#F4F5F7] transition duration-200 ease-in-out rounded-sm transform hover:scale-[102%] overflow-hidden font-poppins "
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-2/3 object-cover transition-opacity rounded-sm transform origin-top"
        style={{ opacity: isHovered ? 0.7 : 1 }}
      />
      {isHovered && (
        <div
          className="absolute inset-0 p-5 flex flex-col items-center justify-center bg-[#3A3A3A] bg-opacity-40 transition-transform duration-300 transform scale-y-0 origin-top  gap-y-[24px] "
          style={{ transform: isHovered ? "scaleY(1)" : "scaleY(0)" }}
        >
          <button className="text-[#B88E2F] text-[16px] font-poppins leading-[150%] font-semibold py-[12px] bg-[#FFFFFF] hover:bg-gray-50 rounded-sm w-[200px]">
            Add to cart
          </button>
          <div className="flex gap-x-5 ">
            <button className="text-white mr-2 flex items-center gap-x-1 text-[16px] font-semibold leading-[120%] ">
              <img src="/share.png" alt="share" width={16} height={16} />
              Share
            </button>
            <button className="text-white mr-2 flex items-center gap-x-1 text-[16px] font-semibold leading-[120%] ">
              <img src="/compare.png" alt="compare" width={16} height={16} />
              Compare
            </button>
            <button className="text-white mr-2 flex items-center gap-x-1 text-[16px] font-semibold leading-[120%] ">
              <img src="/heart1.png" alt="heart1" width={16} height={16} />
              Like
            </button>
          </div>
        </div>
      )}

      <div className="p-4 gap-y-[8px] ">
        <h3 className="text-[24px] leading-[120%] text-[#3A3A3A] font-semibold">
          {product.name}
        </h3>
        <p className="text-[16px] font-medium text-[#898989] leading-[150%] ">
          {product.description}
        </p>
        <p className="text-[#3A3A3A] font-semibold leading-[150%] text-[20px] ">
          {product.price}
        </p>
      </div>
    </div>
  );
};
