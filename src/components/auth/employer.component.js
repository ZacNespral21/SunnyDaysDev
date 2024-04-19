import React, { Component } from 'react'
import {isMobile} from 'react-device-detect';
import NavigationBar from '../global/navigation.component';

export default class Employer extends Component {
  render() {
    return (
      <section className="vh-90">
        <NavigationBar />
        <div className={"container py-5 h-100" + (isMobile ? ' bg-blue-custom' : '')}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-blue-custom text-white" style={{borderRadius: (isMobile ? '0rem' : '1rem'), border: (isMobile ? 'none' : 'inherit')}}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email" />
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Send Request</button>
                  </div>
                  <div>
                    <p className="mb-0">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}