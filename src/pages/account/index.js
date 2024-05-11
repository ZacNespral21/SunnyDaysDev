// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';

// Components
import NavigationBar from 'components/global/navigation.component';
import UserAccountComp from 'components/account/index.component'

function UserAccountPage() {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-offset-custom' : '')}>
      <NavigationBar />
      <UserAccountComp />
    </section>
  </>;
}

export default UserAccountPage;