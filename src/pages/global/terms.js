import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
import TermsStaticComp from 'components/global/terms.component';

function TermsPage() {
  return <>
    <NavigationBar />
      <TermsStaticComp />
    <FooterDesktop />
  </>
}

export default TermsPage;