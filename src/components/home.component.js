import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import 'assets/styles/pages/home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faBed, faSun } from '@fortawesome/free-solid-svg-icons';
import SearchBoxComp from './search-box.component';
import MapBoxComp from './map-box.component';
// import TripleMapBoxComp from './triple-map-box.component';

function HomeComp() {
  return <>
    <BrowserView>
      <section className="vh-50">
        <div className="container-fluid p-0 m-0">
          <div className="hero short">
            <div className="hero__title">
              <h2>Sunny. Travel. Stay. Vacation.</h2>
              <h5>Welcome to your one stop shop for a last minute sunny vacation!</h5>
              <SearchBoxComp />
            </div>
          </div>
          <div className="home-spacer-block"></div>
          <div className="sponsors">
            <div className="sponsors__content">
              <div className="row m-0 p-2">
                <div className="col-md-4"><FontAwesomeIcon icon={faPlane} size="2xl" className="ml-3" /></div>
                <div className="col-md-4"><FontAwesomeIcon icon={faBed} size="2xl" className="ml-3" /></div>
                <div className="col-md-4"><FontAwesomeIcon icon={faSun} size="2xl" className="ml-3" /></div>
              </div>
            </div>
          </div>
        </div>
        {/* Start */}
        <div className="home-content-box-one">
          <MapBoxComp />
        </div>
        <div className="home-content-box-two">
          <div className="row m-0 p-0">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h3>POPULAR SUNNY SPOTS THIS WEEK</h3>
              <p>Popular locations being booked this week! Click to see more</p>
              <a className="btn btn-outline-light btn-md px-5 text-white mt-2" href='/popular-spots'>Find Me Some Sunshine</a>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        {/* <div className="home-content-box-three">
          <TripleMapBoxComp />
        </div> */}
      </section>
    </BrowserView>
    <MobileView>
      <section className="vh-50">
        <div className="container-fluid p-0 m-0">
          <div className="hero">
            <div className="hero__title">
              <h2>Weather. Travel. Stay. Vacation.</h2>
              <h5>Welcome to your one stop shop for a last minute sunny vacation!</h5>
            </div>
          </div>
        </div>
      </section>
    </MobileView>
  </>
}

export default HomeComp;