import RealEstateContainer from "@/components/realEstate/RealEstateContainer";
import HeaderMain from "@/components/header/HeaderMain";
import HeaderTop from "@/components/header/HeaderTop";
import Navbar from "@/components/header/Navbar";
import React from "react";
import MissionContainer from "@/components/mission/MissionContainer";
import AgentsContainer from "@/components/agents/AgentsContainer";
import NewsAndBlog from "@/components/newAndBlog/NewsAndBlog";
import Chart from "@/components/chart/Chart";
import LookingTo from "@/components/lookingTo/LookingTo";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/testimonials/Testimonial";
import Partner from "@/components/partner/Partner";
import NavSmall from "@/components/header/NavSmall";

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

        {/* <HeaderMain></HeaderMain> */}
      </header>
      {/* <main>
        <RealEstateContainer></RealEstateContainer>
        <MissionContainer></MissionContainer>
        <AgentsContainer></AgentsContainer>
        <NewsAndBlog></NewsAndBlog>
        <Chart></Chart>
        <Testimonial></Testimonial>
        <LookingTo></LookingTo>
        <Partner></Partner>
        <footer>
          <Footer></Footer>
        </footer>{" "}
      </main> */}
    </>
  );
};

export default index;
