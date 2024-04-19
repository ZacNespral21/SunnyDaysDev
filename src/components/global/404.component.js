import React, { Component } from 'react'
import 'assets/styles/errorcodes.scss';

export default class FourOFourStaticComp extends Component {
  render() {
    return (
      <section className="vh-100">
        <div className="error-wrapper">
          <div className="error-container error-500">
            <div className="error">
              <div className="error-title">
                Page Not Found
              </div>
              <div className="error-number">
                404
              </div>
              <div className="error-description">
                Sorry, but we cant find what you're looking for
                <a className="btn btn-outline-light btn-md px-5 text-white mt-4" href='/#'>BACK HOME</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}