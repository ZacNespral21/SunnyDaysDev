import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
import ContactUsStaticComp from 'components/global/contact-us.component';

function ContactUsPage() {
  return <>
    <NavigationBar />
      <ContactUsStaticComp />
    <FooterDesktop />
  </>
}

export default ContactUsPage;