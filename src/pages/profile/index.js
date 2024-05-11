import React from 'react';
import { NavigationBar } from '@core';
import ProfileSettingsComp from 'components/profile/index.component';

function ProfileSettingsPage() {
  return <>
    <NavigationBar />
      <ProfileSettingsComp />
  </>
}

export default ProfileSettingsPage;