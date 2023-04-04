import RealEstateContainer from '@/components/realEstate/RealEstateContainer';
import HeaderMain from '@/components/header/HeaderMain';
import HeaderTop from '@/components/header/HeaderTop';
import Navbar from '@/components/header/Navbar';
import React from 'react';
import MissionContainer from '@/components/mission/MissionContainer';
import AgentsContainer from '@/components/agents/AgentsContainer';
import NewsAndBlog from '@/components/newAndBlog/NewsAndBlog';
import Chart from '@/components/chart/Chart';
import LookingTo from '@/components/lookingTo/LookingTo';

const index = () => {
  return (
    <>
      <header>
        <HeaderTop></HeaderTop>
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
      </header>
      <main>
        <RealEstateContainer></RealEstateContainer>
        <MissionContainer></MissionContainer>
        <AgentsContainer></AgentsContainer>
        <NewsAndBlog></NewsAndBlog>
        <Chart></Chart>
        <LookingTo></LookingTo>
      </main>
    </>
  );
};

export default index;