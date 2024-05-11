import React from 'react';
import { NavigationBar } from '@core';
import HotelsComp from 'components/results/hotels.component';

function Hotels() {
  return <>
    <NavigationBar />
      <HotelsComp />
  </>
}

export default Hotels;