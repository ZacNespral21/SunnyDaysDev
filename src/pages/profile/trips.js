import React from 'react';
import { NavigationBar } from '@core';
import ProfileTripsComp from 'components/profile/trips.component';

function ProfileTripsPage() {
  return <>
    <NavigationBar />
      <ProfileTripsComp />
  </>
}

export default ProfileTripsPage;