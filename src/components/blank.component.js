import React, { Component } from 'react'
import 'assets/styles/errorcodes.scss';

export default class BlankStaticComp extends Component {
  render() {
    return (
      <section className="vh-100">
        <div className="error-wrapper">
          <div className="error-container error-500">
            <div className="error">
              <div className="error-title">
                Server Error
              </div>
              <div className="error-number">
                500
              </div>
              <div className="error-description">
                Waiting On API Setup
                <a className="btn btn-outline-light btn-md px-5 text-white mt-4" href='/#'>BACK HOME</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}