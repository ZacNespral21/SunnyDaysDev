import React from 'react';
import { NavigationBar } from '@core';
import FlightsComp from 'components/results/flights.component';

function Flights() {
  return <>
    <NavigationBar />
      <FlightsComp />
  </>
}

export default Flights;