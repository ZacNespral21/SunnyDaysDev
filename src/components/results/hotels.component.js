import React from 'react'
// import { BrowserView, MobileView } from 'react-device-detect';
import 'assets/styles/pages/home.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlane, faBed, faSun } from '@fortawesome/free-solid-svg-icons';
import SearchBoxComp from '../search-box.component';
import MapBoxComp from '../map-box.component';
// import TripleMapBoxComp from './triple-map-box.component';

function ResultsHotelsComp() {
  return <>
    <section className="vh-50">
      <div className="container-fluid p-0 m-0">
        <div className="hero">
          <div className="hero__title">
            <h2>Weather. Travel. Stay. Vacation.</h2>
            <h5>Welcome to your one stop shop for a last minute sunny vacation!</h5>
            <SearchBoxComp />
          </div>
        </div>
      </div>
      {/* Start */}
      <div className="home-content-box-one">
        <MapBoxComp />
        {/* <TripleMapBoxComp /> */}
      </div>
    </section>
  </>
}

export default ResultsHotelsComp;