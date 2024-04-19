import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import 'assets/styles/hire.scss';
import 'assets/styles/hero-banner.scss';

export default class HireStaticComp extends Component {
  render() {
    return (
      <>
        <div className="container-fluid p-0 m-0">
          <div className={"hero" + (isMobile ? ' short' : '')}>
            <div className="hero__title">
              <h2>Hire Top Talent Just A Few Clicks Away</h2>
              <h5 className={(isMobile ? 'hide-subtext' : '')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa.</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-grid justify-content-center">
            <div className="col-md-10">
              <div className="job-list__wrapper mt-4 mb-6">
                <a href="/user/profile/264c7d4a-6f46-4e69-a2b4-2bd3dec2addd" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-4 color--heading text-start">
                        <span className="badge badge-circle background--danger text-white mr-3">IB</span> <br /> Inara Britt
                      </span>
                      <span className="col-4 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> $20-$40/hr</span>
                      <span className="col-4 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> San Fransisco, US</span>
                    </span>
                  </div>
                </a>

                <a href="/user/profile/264c7d4a-6f46-4e69-a2b4-2bd3dec2addd" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-4 color--heading text-start">
                        <span className="badge badge-circle background--tertiary text-white mr-3">EF</span> <br /> Eduard Franz
                      </span>
                      <span className="col-4 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> $16-$26/hr</span>
                      <span className="col-4 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> Anywhere</span>
                    </span>
                  </div>
                </a>

                <a href="/user/profile/264c7d4a-6f46-4e69-a2b4-2bd3dec2addd" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-4 color--heading text-start">
                        <span className="badge badge-circle background--warning text-white mr-3">GD</span> <br /> Gianluca Darby
                      </span>
                      <span className="col-4 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> $12-$21/hr</span>
                      <span className="col-4 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> Birmingham, UK</span>
                    </span>
                  </div>
                </a>

                <a href="/user/profile/264c7d4a-6f46-4e69-a2b4-2bd3dec2addd" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-4 color--heading text-start">
                        <span className="badge badge-circle background--success text-white mr-3">MM</span> <br /> Milana Myles
                      </span>
                      <span className="col-4 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> $29-$41/hr</span>
                      <span className="col-4 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> Sydney, AU</span>
                    </span>
                  </div>
                </a>

                <a href="/user/profile/264c7d4a-6f46-4e69-a2b4-2bd3dec2addd" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-4 color--heading text-start">
                        <span className="badge badge-circle background--warning2 text-white mr-3">JN</span> <br /> John Nickels
                      </span>
                      <span className="col-4 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> $24-$32/hr</span>
                      <span className="col-4 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> San Fransisco, US</span>
                    </span>
                  </div>
                </a>
                <a href="/user/profile/264c7d4a-6f46-4e69-a2b4-2bd3dec2addd" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-4 color--heading text-start">
                        <span className="badge badge-circle background--info text-white mr-3">BD</span> <br /> Bree Daniels
                      </span>
                      <span className="col-4 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> $27-$30/hr</span>
                      <span className="col-4 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> Manchester, UK</span>
                    </span>
                  </div>
                </a>
                <a href="/user/profile/264c7d4a-6f46-4e69-a2b4-2bd3dec2addd" className="card p-0 mb-3 border-0 shadow-sm shadow--on-hover">
                  <div className="card-body">
                    <span className="row justify-content-between align-items-center">
                      <span className="col-4 color--heading text-start">
                        <span className="badge badge-circle background--danger text-white mr-3">NJ</span> <br /> Nick Johns
                      </span>
                      <span className="col-4 col-md-3 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> $18-$21/hr</span>
                      <span className="col-4 col-md-3 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> San Fransisco, US</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}