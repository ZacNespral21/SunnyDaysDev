import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
// import { BrowserView, MobileView } from 'react-device-detect';
import HomeComp from 'components/home.component';

function Home() {
  return <>
    <NavigationBar />
      <HomeComp />
    <FooterDesktop />
  </>
}

export default Home;