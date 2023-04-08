import RealEstateContainer from "@/components/realEstate/RealEstateContainer";
import HeaderMain from "@/components/header/HeaderMain";
import HeaderTop from "@/components/header/HeaderTop";
import Navbar from "@/components/header/Navbar";
import React, { useState } from "react";
import MissionContainer from "@/components/mission/MissionContainer";
import AgentsContainer from "@/components/agents/AgentsContainer";
import NewsAndBlog from "@/components/newAndBlog/NewsAndBlog";
import Chart from "@/components/chart/Chart";
import LookingTo from "@/components/lookingTo/LookingTo";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/testimonials/Testimonial";
import Partner from "@/components/partner/Partner";
import NavSmall from "@/components/header/NavSmall";
import ScrollUp from "@/components/others/ScrollUp";

const index = () => {

 

  return (
    <>
      <header>
        <HeaderTop></HeaderTop>
        {/* this navbar is for larger devices ↓↓ */}
        <Navbar></Navbar>
        {/* ------------- */}
        {/* this navbar is for smaller devices ↓↓ */}
        <NavSmall></NavSmall>

        <HeaderMain></HeaderMain>
      </header>
      <main>
        <RealEstateContainer></RealEstateContainer>
        <MissionContainer></MissionContainer>
        <AgentsContainer></AgentsContainer>
        <NewsAndBlog></NewsAndBlog>
        <Chart></Chart>
        <Testimonial></Testimonial>
        <LookingTo></LookingTo>
        <Partner></Partner>
      </main>
      <footer>
        <Footer></Footer>
      </footer>{" "}
      {/* button for scroll up */}
      <ScrollUp></ScrollUp>
      <div className="connect"></div>
    </>
  );
};

export default index;
