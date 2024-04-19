import React, { Component } from 'react'
import '../../assets/css/footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-desktop">
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-md-4"></div>
            <div className="col-md-4"><p className="trademark">Developed By Zachary Nespral</p></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </footer>
    );
  }
}