import React from "react";

const Product = () => {
  return (
    <div className="p-6 bg-[#000319] mx-6 my-10 rounded-2xl shadow-2xl border border-gray-700 mt-10">
      <div className=" text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
         Power your <span className="text-purple">AI</span>{" "}
        </h1>
        <p className="text-white mb-6">
          Open-source tools to build, test, and deploy
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#000319]  rounded-lg shadow-md p-4">
          <img
            src="/samurai1.jpg"
            alt="Swarmauri-SDK"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">
            Swarmauri-SDK
          </h2>
          <p className="text-gray-600">
            The SwarmaURI SDK is your go-to toolkit for building
            language-centric agentic AI applications...
          </p>
        </div>

        <div className="bg-[#000319]  rounded-lg shadow-md p-4">
          <img
            src="/samurai2.jpg"
            alt="RAG Assistant"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">
            RAG Assistant
          </h2>
          <p className="text-gray-600">
            Built with the SwarmaURI SDK, this Retrieval Augmented Generation
            assistant stands ready to help you build RAGs...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
