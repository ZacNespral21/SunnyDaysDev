import React from 'react'
import { isMobile } from 'react-device-detect';
// import { BrowserView, MobileView } from 'react-device-detect';
import 'assets/styles/pages/home.scss'

function ProfileSettingsComp() {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                {/* <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  /> */}
                <h5 className="my-3">John Smith</h5>
                <p className="mb-1">(098) 765-4321</p>
                <p className="mb-3">example@example.com</p>
                <p className="mb-1">Full Stack Developer</p>
                <p className="mb-4">Bay Area, San Francisco, CA</p>
                {/* <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      Follow
                    </button>
                    <button type="button" className="btn btn-outline-primary ms-1">
                      Message
                    </button>
                  </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <h5 className="my-3">Trip Alerts</h5>
              <div className="card-body">
                <div className="row">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 color--heading text-start">Foreman</span>
                    <span className="col-5 col-md-3 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> Full-Time</span>
                    <span className="col-7 col-md-3 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> New York, NY</span>
                    <span className="d-none d-md-block col-1 text-center color--text"><small><i className="fas fa-chevron-right"></i></small></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <h5 className="my-3">Search Settings</h5>
              <div className="card-body">
                <div className="row">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 color--heading text-start">Foreman</span>
                    <span className="col-5 col-md-3 my-3 my-sm-0 color--text"><i className="fas fa-clock mr-1"></i> Full-Time</span>
                    <span className="col-7 col-md-3 my-3 my-sm-0 color--text text-end"><i className="fas fa-map-marker-alt mr-1"></i> New York, NY</span>
                    <span className="d-none d-md-block col-1 text-center color--text"><small><i className="fas fa-chevron-right"></i></small></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default ProfileSettingsComp;