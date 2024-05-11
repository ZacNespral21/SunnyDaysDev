import React, { Component } from 'react'
import { isMobile } from 'react-device-detect';

export default class PrivacyStaticComp extends Component {
  render() {
    return (
      <section className="vh-90">
        <div className={"container py-5 h-100" + (isMobile ? ' bg-offset-custom' : '')}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12">
              <div className="wpb_wrapper"><div className="wpb_text_column wpb_content_element "><div className="wpb_wrapper"><h1 className="title">{process.env.REACT_APP_APP_NAME} Privacy Policy</h1><p><em>Last Revised: </em>6/4/2021</p><p>This Policy applies to all sites, mobile applications, and any other online processes (collectively the “Platform”) made available by {process.env.REACT_APP_APP_NAME}. This Privacy Policy explains how information about you is collected, used and disclosed by {process.env.REACT_APP_APP_NAME}, Inc. (“{process.env.REACT_APP_APP_NAME},” “we,” “our,” or “us”) when you use the {process.env.REACT_APP_APP_NAME} Website located at <u><a href="https://www.google.com/">www.{process.env.REACT_APP_APP_NAME}.com</a></u>&nbsp;(the “Site”), the {process.env.REACT_APP_APP_NAME} app (the “App”), and any related tools, websites and services provided in connection therewith (collectively, the Platform). It applies solely to information collected by the Site. It will notify you of the information we collect through the Platform, how it is used, and with whom it may be shared. It notifies you of what choices are available to you regarding the use of your data. It notifies you of the security procedures in place to protect the misuse of your information and how you can correct any inaccuracies in the information. Your downloading of the App or any use of the Platform constitutes your consent to the collection and use of such information as described in this Privacy Policy.</p><p>If you do not agree to or with this Policy, please do not access or use the Platform.</p><p><strong>Changes to Privacy Policy:</strong> We may change this Privacy Policy from time to time and in such event will revise the date at the top of this Privacy Policy. If any material changes are made, we will notify you by email (sent to the e-mail address provided), by means of a notice in the App and/or the Site, or by other means as determined by us prior to the change becoming effective. We encourage you to periodically review the Privacy Policy to stay informed about our information practices.</p><p><strong>Governing Law:</strong> {process.env.REACT_APP_APP_NAME} is based in the United States and the information we collect is governed by U.S. law. By accessing or using the Platform or otherwise providing information to us, you consent to the processing and transfer of information in and to the U.S. and other countries.</p><p><strong>Key Terms:</strong> The definitions of “Key Terms” listed in the Terms of Use are applicable to this Policy.</p></div></div></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}