import React from 'react';
import { NavigationBar, FooterDesktop } from '@core';
import ResourcesStaticComp from 'components/global/resources.component';

function ResourcesPage() {
  return <>
    <NavigationBar />
      <ResourcesStaticComp />
    <FooterDesktop />
  </>
}

export default ResourcesPage;