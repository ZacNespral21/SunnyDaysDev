import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
import PrivacyStaticComp from 'components/global/privacy.component';

function PrivacyPage() {
  return <>
    <NavigationBar />
      <PrivacyStaticComp />
    <FooterDesktop />
  </>
}

export default PrivacyPage;