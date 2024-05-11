import React from 'react'
import { isMobile } from 'react-device-detect';
import 'assets/styles/pages/home.scss'

function ProfileFavoritesComp() {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <h5 className="my-3">Favorite Trips</h5>
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

export default ProfileFavoritesComp;