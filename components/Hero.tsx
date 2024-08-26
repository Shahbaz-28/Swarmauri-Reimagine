import { Spotlight } from "./ui/Spotlight";
import GridGlobe from "../components/ui/GridGlobe";
import { Cover } from "@/components/ui/cover";

const Hero = () => {
  return (
    <div className="pb-2 pt-2 ">
      <div className=" hidden lg:flex">
        <GridGlobe />
      </div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* for the github 3d globe */}
    </div>
  );
};

export default Hero;
