// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';

// Components
import NavigationBar from 'components/global/navigation.component';
import UserAccountNotificationsComp from 'components/account/notifications.component'

function UserAccountNotificationsPage() {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-offset-custom' : '')}>
      <NavigationBar />
      <UserAccountNotificationsComp />
    </section>
  </>;
}

export default UserAccountNotificationsPage;