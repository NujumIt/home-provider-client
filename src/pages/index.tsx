import RealEstateContainer from '@/components/realEstate/RealEstateContainer';
import HeaderMain from '@/components/header/HeaderMain';
import HeaderTop from '@/components/header/HeaderTop';
import Navbar from '@/components/header/Navbar';
import React from 'react';
import MissionContainer from '@/components/mission/MissionContainer';

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
      </main>
    </>
  );
};

export default index;