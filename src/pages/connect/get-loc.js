// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';
import { supaBase, NavigationBar, GetGeoLocation } from '@core';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

import TimeClock from 'components/connect/time-clock.component'
import TimeClockMobile from 'components/connect/time-clock-mobile.component'

// Assets & Styling
import 'assets/styles/gmap.scss';

const locData = GetGeoLocation();
const testCell = '19894754002';

// const hlat = 43.5886406;
// const hlng = -83.868292;
const mlat = 43.6161571;
const mlng = -83.9220663;

function ConnectGetLoc({ session }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return <>
    <section className={'vh-90' + (isMobile ? ' bg-blue-custom' : '')}>
      <NavigationBar />
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={'map-container' + (isMobile ? ' mobile' : '')}
          center={{
            lat: (session.user.phone === testCell ? mlat : locData.lat),
            lng: (session.user.phone === testCell ? mlng : locData.lng)
          }}
          zoom={18}
            options={{ mapId: 'f17f7e99db3a1ea3' }}
        >
          <MarkerF
            position={{
              lat: (session.user.phone === testCell ? mlat : locData.lat),
              lng: (session.user.phone === testCell ? mlng : locData.lng)
            }}
          />
        </GoogleMap>
      )}
      {(!isMobile) ? <TimeClock /> : <TimeClockMobile />}
    </section>
  </>;
}

export default ConnectGetLoc;