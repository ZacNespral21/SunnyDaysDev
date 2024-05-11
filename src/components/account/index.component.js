import React, { Component } from 'react'
import { isMobile } from 'react-device-detect';
import 'assets/styles/account.scss';

export default class UserProfile extends Component {
  render() {
    return (
      <section className={"vh-90" + (isMobile ? ' bg-offset-custom' : '')}>
        <div className="container py-5">
          <div className="row">
            <nav className="nav nav-borders">
              <a className="nav-link active ms-0" href="/account">Account</a>
              <a className="nav-link" href="/account/billing">Billing</a>
              <a className="nav-link" href="/account/security">Security</a>
              <a className="nav-link" href="/account/notifications">Notifications</a>
            </nav>
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <h5 className="my-3">Larpsen LLC</h5>
                    <p className="mb-1">Awesomeness</p>
                    <p className="mb-4">Hunington Beach, OC, CA</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    <div className="small font-italic mb-4">JPG or PNG no larger than 5 MB</div>
                    <button className="btn btn-primary" type="button">Upload new image</button>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-8">
                <div className="card mb-4">
                  <div className="card-header">Account Details</div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="small mb-1">Username (how your name will appear to other users on the site)</label>
                        <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" />
                      </div>
                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1">First name</label>
                          <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1">Last name</label>
                          <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1">Organization name</label>
                          <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" />
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1">Location</label>
                          <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="small mb-1">Email address</label>
                        <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" />
                      </div>
                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1">Phone number</label>
                          <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1">Birthday</label>
                          <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" />
                        </div>
                      </div>
                      <button className="btn btn-outline-light btn-md px-3" type="button">Save changes</button>
                    </form>
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