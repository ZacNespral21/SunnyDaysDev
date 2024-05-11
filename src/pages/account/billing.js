// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';

// Components
import NavigationBar from 'components/global/navigation.component';
import UserAccountBillingComp from 'components/account/billing.component'

function UserAccountBillingPage() {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-offset-custom' : '')}>
      <NavigationBar />
      <UserAccountBillingComp />
    </section>
  </>;
}

export default UserAccountBillingPage;