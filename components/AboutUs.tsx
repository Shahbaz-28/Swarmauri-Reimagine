import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#000319] p-8 mx-6 my-10 rounded-2xl shadow-2xl border border-gray-700">
      <p className="text-white mb-6 leading-relaxed">
        At <span className=" font-bold underline">Swarmauri</span>, we empower
        developers, innovators, and steely-eyed cost cutters with powerful
        open-source AI tools. We simplify and accelerate the development of LLM
        applications for everything from research to business process
        management.
      </p>
      <p className="text-white mb-6 leading-relaxed">
        Right now, our offerings include a versatile SDK for building agentic AI
        applications and a Retrieval-Augmented Generation (RAG) tool that
        enhances AI capabilities with real-time data-retrieval – useful as a
        tool for countless chatbot-related applications as well as an excellent
        demo of the power of our SDK.
      </p>
      <p className="text-white mb-6 leading-relaxed">
        We’re fully open source. We’re highly customizable. We’re remarkably
        easy to use. We’re leading in real-time data integration. We’re
        dedicated to a vibrant, supportive developer community. And, now that
        we’ve got the basics out, we’re going to be bringing out a paradigm for
        managing agentic workflows that will permit more complex workflows than
        any of the current graphical editors. Among other things.
      </p>
      <p className="text-white mb-6 leading-relaxed">
        But first things first. Welcome to our home. Have a look around. Read a
        blog or two, do the social thing, come join our Discord.
      </p>
      {/* <a
        href="https://github.com/swarmauri/swarmauri-sdk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple underline font-bold cursor-pointer"
      >
        Fork our repo!
      </a> */}
    </div>
  );
};

export default AboutUs;
