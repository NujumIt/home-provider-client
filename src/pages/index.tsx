import HeaderMain from '@/components/header/HeaderMain';
import HeaderTop from '@/components/header/HeaderTop';
import Navbar from '@/components/header/Navbar';
import React from 'react';

const index = () => {
  return (
    <>
      <header>
        <HeaderTop></HeaderTop>
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
      </header>
    </>
  );
};

export default index;