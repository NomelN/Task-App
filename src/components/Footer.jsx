import React from "react";
import { BsSendFill } from "react-icons/bs";
import { AiFillFacebook, AiFillHome, AiFillInfoCircle, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare, FaShareSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full flex m-auto bg-gray-700 text-white min-h-[200px] p-3 mt-12">
      <div className="container m-auto grid grid-cols-3 md:grid-cols-1 md:space-y-8">
      <div className=" space-y-2">
            
          </div>
        <div className=" flex items-center md:items-start  justify-center  flex-col gap-3 space-y-2">
          <h2 className=" text-xl font-medium"> S'abonner</h2>
          <div className=" flex flex-row justify-center md:justify-start gap-2 w-full">
            <input
              placeholder="Votre email "
              className=" w-[70%] p-1 px-2 text-black"
              type="email"
            />
            <button className=" border p-2">
              <BsSendFill />
            </button>
          </div>
          <div>
          @copyright Mickaël NOMEL akpanomel@gmail.com
        </div>
        </div>
        <div className=" flex items-center md:items-start  flex-col gap-3">
          <div className=" space-y-2">
            <h2 className=" text-xl font-medium"> Réseaux sociaux</h2>
            <div className=" flex items-center gap-3">
              <AiFillFacebook size={24} />
              <p>Facebook</p>
            </div>
            <div className=" flex items-center gap-3">
              <AiFillTwitterSquare size={24} />
              <p>Twitter</p>
            </div>
            <div className=" flex items-center gap-3">
              <FaInstagramSquare size={24} />
              <p>Instagram</p>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
