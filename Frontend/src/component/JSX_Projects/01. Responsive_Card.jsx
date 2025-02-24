import React from "react";

import cardImage from "../../assets/mountains.jpg";
import { FaHeart, FaShare, FaThumbsUp } from "react-icons/fa";
const ResponsiveCardDesign = () => {
  return (
    <div className="w-[300px] relative overflow-hidden rounded-2xl shadow-2xl group flex-col justify-center items-center mt-50">
      <img
        src={cardImage}
        alt="Mountains"
        className="w-full h-[400px] transition-transform group-hover:scale-110 duration-500 hover:blur-[4px]"
      />

      <div className="absolute bottom-0 flex items-end text-white bg-gradient-to-t from-violet-600/60 to-transparent">
        <div className="p-4">
          <h1 className="text-xl font-bold font-poppins mb-2">Lorel ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <div className="flex justify-around mt-5 text-xl">
            <button className="bg-gradient-to-r from-violet-600 to-purple-600-700 p-2 rounded-full border-3 border-white">
              <FaHeart />
            </button>
            <button className="bg-gradient-to-r from-violet-600 to-purple-600-700 p-2 rounded-full border-3 border-white">
              <FaThumbsUp />
            </button>
            <button className="bg-gradient-to-r from-violet-600 to-purple-600-700 p-2 rounded-full border-3 border-white">
              <FaShare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCardDesign;
