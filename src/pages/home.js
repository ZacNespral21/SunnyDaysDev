import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
// import { BrowserView, MobileView } from 'react-device-detect';
import HomeComponent from 'components/home.component';

function Home() {
  return <>
    <NavigationBar />
      <HomeComponent />
    <FooterDesktop />
  </>
}

export default Home;