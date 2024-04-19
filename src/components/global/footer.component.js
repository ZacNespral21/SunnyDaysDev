import React, { Component } from 'react'
import 'assets/styles/footer.scss'
import appStoreLogo from 'assets/app-store-dwn-btn.svg';
import gPlayStoreLogo from 'assets/gplay-store-dwn-btn.png';
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-desktop">
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <h5>QUICK LINKS</h5>
              <ul>
                <li>Blog & Resources</li>
                <li>News</li>
                <li>Partners</li>
                <li>Sponsors</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>CONNECT</h5>
              <ul>
                <li>About Us</li>
                <li><a href="/contact-us" className="text-white">Contact Us</a></li>
                <li><a className="text-white" href="/notifications">Notifications</a></li>
                <li><a className="text-white" href="/invoice">Invoice</a></li>
                <li><a className="text-white" href="/profile">Profile</a></li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>MORE</h5>
              <ul>
                <li><a href="/resources" className="text-white">Resources</a></li>
                <li><a href="/terms" className="text-white">Terms</a></li>
                <li><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
                <li><a className="text-white" href="/jobs/listings">Job Listings</a></li>
                <li><a className="text-white" href="/jobs/new">Job Posting Form</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>EXAMPLES</h5>
              <ul>
                <li><a className="text-white" href="/404">404</a></li>
                <li><a className="text-white" href="/500">500</a></li>
                <li><a className="text-white" href="/account">Account</a></li>
                <li><a className="text-white" href="/receipt">Receipt</a></li>
                <li><a className="text-white" href="/license/management">License Management</a></li>
                <li><a className="text-white" href="/license/listing">License Listing</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>DOWNLOAD NOW</h5>
              <img alt="app-store-icon" className="app-store-logo-icon" src={appStoreLogo} />
              <img alt="gplay-store-icon" className="gplay-store-logo-icon" src={gPlayStoreLogo} />
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-md-4"></div>
            <div className="col-md-4"><p className="trademark">&reg; 2023 Chambita. All Rights Reserved.</p></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </footer>
    );
  }
}