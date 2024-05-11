// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';
import { GetGeoLocation } from '@core';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

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
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
      <div className="row p-0 m-0">
        <div className="triple-gmap col-md-12">
          <div className="map-box col-md-4 float-left">
            <GoogleMap
              mapContainerClassName={'map-container' + (isMobile ? ' mobile' : '')}
              center={{
                lat: locData.lat,
                lng: locData.lng
              }}
              zoom={18}
              options={{ mapId: 'f17f7e99db3a1ea3' }}
            >
              <MarkerF
                position={{
                  lat: locData.lat,
                  lng: locData.lng
                }}
              />
            </GoogleMap>
          </div>
          <div className="map-box col-md-4 float-left">
            <GoogleMap
              mapContainerClassName={'map-container' + (isMobile ? ' mobile' : '')}
              center={{
                lat: locData.lat,
                lng: locData.lng
              }}
              zoom={18}
              options={{ mapId: 'f17f7e99db3a1ea3' }}
            >
              <MarkerF
                position={{
                  lat: locData.lat,
                  lng: locData.lng
                }}
              />
            </GoogleMap>
          </div>
          <div className="map-box col-md-4 float-left">
            <GoogleMap
              mapContainerClassName={'map-container' + (isMobile ? ' mobile' : '')}
              center={{
                lat: locData.lat,
                lng: locData.lng
              }}
              zoom={18}
              options={{ mapId: 'f17f7e99db3a1ea3' }}
            >
              <MarkerF
                position={{
                  lat: locData.lat,
                  lng: locData.lng
                }}
              />
            </GoogleMap>
          </div>
        </div>
      </div>
      )}
    </section>
  </>;
}

export default ConnectGetLoc;