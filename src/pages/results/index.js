import React from 'react';
import { NavigationBar } from '@core';
import ResultsComp from 'components/results/index.component';

function Results() {
  return <>
    <NavigationBar />
      <ResultsComp />
  </>
}

export default Results;