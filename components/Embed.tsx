import React from "react";
import animationAi from "../public/Animation-ai.json";
import Lottie from "lottie-react";

const Embed = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#000319] p-6 mx-4 my-4 rounded-2xl shadow-2xl border border-gray-700 items-center">
      <div className="flex-1 text-center lg:text-start">
        <h1 className="text-lg md:text-xl font-semibold text-white mb-2">
          Swarmauri Embed,{" "}
          <span className="text-purple">unlocking the full potential</span>
          <br /> of your enterprise data
        </h1>
        <p className="text-gray-300 mb-2 mt-4 text-sm md:text-base">
          We have trained our models on the language of business to enable the
          most accurate and efficient solution.
        </p>
        <p className="text-gray-300 text-sm md:text-base">
          Scale your Enterprise AI strategy starting with the highest performing
          embedding model, which supports over 100 languages.
        </p>
        <p className="text-gray-300 text-sm md:text-base">
          Noisy data often contains errors, outliers, and irrelevant information
          that hinder an embedding model’s ability to discern meaningful
          patterns or relationships within the data. Our Embed model understands
          your data’s nuances, making it highly accurate even when dealing with
          noisy real-world datasets.
        </p>
      </div>
      <div className="w-full md:w-[300px] mt-6 md:mt-0 md:ml-8">
        <Lottie animationData={animationAi} loop={true} />
      </div>
    </div>
  );
};

export default Embed;
