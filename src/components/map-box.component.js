// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';
import { GetGeoLocation } from '@core';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

// Assets & Styling
import 'assets/styles/gmap.scss';

const locData = GetGeoLocation();
// const testCell = '19894754002';

// const hlat = 43.5886406;
// const hlng = -83.868292;
// const mlat = 43.6161571;
// const mlng = -83.9220663;
// Miami Lat - 25.7708431
// Miami Lat - -80.1976364
// Houston Lat - 29.7603761
// Houston Lng - -95.3698054
// Pheonix Lat - 33.4354883
// Pheonix Lng - -112.0088661

function ConnectGetLoc({ session }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return <>
    <section className={'vh-90' + (isMobile ? ' bg-blue-custom' : '')}>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div className="fullsize-gmap p-0">
          <GoogleMap
            mapContainerClassName={'map-container' + (isMobile ? ' mobile' : '')}
            center={{
              lat: locData.lat,
              lng: locData.lng
            }}
            zoom={4}
            options={{ mapId: 'f17f7e99db3a1ea3' }}
          >
            <MarkerF
              position={{
                lat: locData.lat,
                lng: locData.lng
              }}
            />
            <MarkerF
              position={{
                lat: 43.6161571,
                lng: -83.9220663
              }}
              />
              <MarkerF
                position={{
                  lat: 43.6161571,
                  lng: -83.9220663
                }}
              />
              <MarkerF
                position={{
                  lat: 25.7708431,
                  lng: -80.1976364
                }}
              />
              <MarkerF
                position={{
                  lat: 29.7603761,
                  lng: -95.3698054
                }}
              />
              <MarkerF
                position={{
                  lat: 33.4354883,
                  lng: -112.0088661
                }}
              />
          </GoogleMap>
        </div>
      )}
    </section>
  </>;
}

export default ConnectGetLoc;