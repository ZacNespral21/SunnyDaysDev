import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
import PrivacyStaticComp from 'components/static/privacy.component';

function Hire() {
  return <>
    <NavigationBar />
      <PrivacyStaticComp />
    <FooterDesktop />
  </>
}

export default Hire;