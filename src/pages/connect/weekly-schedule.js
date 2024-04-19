// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';
import { supaBase, NavigationBar } from '@core';

// Assets & Styling
import 'react-international-phone/style.css';

// Components
import BlankStaticComp from 'components/blank.component'

function ConnectWeeklySchedule({ session }) {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <NavigationBar />
      <BlankStaticComp />
    </section>
  </>;
}

export default ConnectWeeklySchedule;