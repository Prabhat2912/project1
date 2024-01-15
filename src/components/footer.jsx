import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className=" border-t flex flex-col justify-center gap-6 p-5 items-center min-h-[505px] ">
      <div className="flex flex-row flex-wrap w-full   ">
        <div className="w-1/3  py-3 ">
          <h1 className="font-poppins text-[24px] font-bold  ">Funiro</h1>
          <p className="text-[16px] text-[#9F9F9F] mt-[50px] max-w-[285px]  ">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
          <p className="text-[16px] text-[#9F9F9F] mt-[50px]  "></p>
        </div>
        <div className="w-2/3  flex flex-row flex-wrap  ">
          <div className="w-1/2 px-2  py-3 flex flex-row flex-wrap justify-between font-poppins font-medium ">
            <div className=" flex flex-col  gap-y-[55px] p-1 ">
              <h1 className="  text-[#9F9F9F]">Links</h1>
              <div className=" flex flex-col gap-y-[46px]  ">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className=" flex flex-col  gap-y-[55px] p-1 ">
              <h1 className="text-[#9F9F9F]">Help</h1>
              <div className=" flex flex-col items-start gap-y-[46px]  ">
                <Link to="#">Payment Options</Link>
                <Link to="#">Returns</Link>
                <Link to="#">Privacy Policies</Link>
              </div>
            </div>
          </div>
          <div className="w-1/2  px-2 font-poppins py-3 ">
            <div className=" flex flex-row  flex-wrap ml-10  gap-5">
              <div className="w-1/2 min-w-[190px] ">
                {" "}
                <input
                  type="text"
                  placeholder="Enter your email address.."
                  className="outline-none  "
                />
                <hr className="border-t-3 border-solid border-gray-800 mt-1 " />
              </div>
              <div className="">
                <button className="text-center w-full text-[14px] font-medium  ">
                  SUBSCRIBE
                </button>
                <hr className="border-t-3 border-solid border-gray-800 mt-1 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-4/5 flex flex-row flex-wrap ">
        <hr className="mb-[35px]" />
        <p className="font-poppins text-[16px]  ">
          2024 &#169; Prabhat Kumar. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
