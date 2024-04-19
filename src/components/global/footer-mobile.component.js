import React, { Component } from 'react'
import '../../assets/styles/footer.scss'
import appStoreLogo from '../../assets/app-store-dwn-btn.svg';
import gPlayStoreLogo from '../../assets/gplay-store-dwn-btn.png';
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-desktop mt-4">
        {/* <div className="container m-0 p-0">
          <a className="footer-button text-white" href='/login'>On Mobile? Login Faster.</a>
        </div> */}
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-md-3"></div>
            <div className="col-md-2">
              <h5>DOWNLOAD NOW</h5>
              <img alt="app-store-icon" className="app-store-logo-icon" src={appStoreLogo} />
              <img alt="gplay-store-icon" className="gplay-store-logo-icon" src={gPlayStoreLogo} />
            </div>
            <div className="col-md-3"></div>
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