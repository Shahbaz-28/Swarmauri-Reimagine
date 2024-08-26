"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import AboutUs from "@/components/AboutUs";
import Embed from "@/components/Embed";
import Product from "@/components/Product";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <ResponsiveAppBar />
        <Hero />
        <Product />
        <Embed />
        <AboutUs />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
