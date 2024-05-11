import React from 'react'
import 'assets/styles/pages/home.scss'
import SearchBoxComp from '../search-box.component';
import ListComp from './data-list.component';

function ResultsComp() {
  return <>
    <section className="vh-50">
      <div className="container-fluid p-0 m-0">
        <div className="hero short">
          <SearchBoxComp />
        </div>
      </div>
      {/* Start */}
      <div className="container">
        <div className="home-content-box-one">
          <ListComp />
          {/* <MapBoxComp /> */}
          {/* <TripleMapBoxComp /> */}
        </div>
      </div>
    </section>
  </>
}

export default ResultsComp;