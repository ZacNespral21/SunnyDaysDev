// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';
import { supaBase, NavigationBar } from '@core';

// Components
import UserAccountSecurityComp from 'components/account/security.component'

function UserAccountSecurityPage() {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-offset-custom' : '')}>
      <NavigationBar />
      <UserAccountSecurityComp />
    </section>
  </>;
}

export default UserAccountSecurityPage;