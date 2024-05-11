import React from 'react';
import { NavigationBar } from '@core';
import ProfileFavoritesComp from 'components/profile/favorites.component';

function ProfileFavoritesPage() {
  return <>
    <NavigationBar />
      <ProfileFavoritesComp />
  </>
}

export default ProfileFavoritesPage;