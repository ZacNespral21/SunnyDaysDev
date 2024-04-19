import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
import ContactUsStaticComp from 'components/static/contact-us.component';

function Hire() {
  return <>
    <NavigationBar />
      <ContactUsStaticComp />
    <FooterDesktop />
  </>
}

export default Hire;