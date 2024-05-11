import React from 'react'
import 'assets/styles/pages/home.scss'
import SearchBoxComp from '../search-box.component';
import MapBoxComp from '../map-box.component';
import ListComp from './data-list.component';

function ResultsMapComp() {
  return <>
    <section className="vh-50">
      <div className="container-fluid p-0 m-0">
        {/* <div className="hero short">
          <SearchBoxComp />
        </div>
        <div className="home-spacer-block"></div> */}
        <div className="row p-0">
          <div className="col-md-3">
            <div className="col-md-12 inner-datalist">
              <ListComp />
            </div>
          </div>
          <div className="col-md-9 outer-map">
            <div className="col-md-12 inner-map">
              <MapBoxComp />
            </div>
          </div>
        </div>
        {/* <div className=""></div> */}
        {/* <div className="hero short">
          <SearchBoxComp />
        </div> */}
      </div>
    </section>
  </>
}

export default ResultsMapComp;