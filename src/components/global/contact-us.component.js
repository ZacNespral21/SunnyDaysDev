import React, { Component } from 'react'
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import 'assets/styles/contact-us.scss'
export default class ContactUsStaticComp extends Component {
  render() {
    return (
      <section className="vh-90">
        <div className={"container py-5 h-100"}>
            <div className="contact__wrapper shadow-lg mt-n9">
                <div className="row no-gutters">
                    <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2 bg-blue-custom">
                        {/* <img src={logo} className="logo-slogan" alt="logo-icon" /> */}
                        <div className="row">
							<div className="col-md-12">
                                <div className="single_address">
                                    <FontAwesomeIcon icon={faMapMarker} size="lg" className="mx-4" />
                                    <h4>Our Address</h4>
                                    <p>3481 Melrose Place, Beverly Hills</p>
                                </div>
                                <div className="single_address">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="mx-4" />
                                    <h4>Send your message</h4>
                                    <p>Info@example.com</p>
                                </div>
                                <div className="single_address">
                                    <FontAwesomeIcon icon={faPhone} size="lg" className="mx-4" />
                                    <h4>Call us on</h4>
                                    <p>(+1) 517 397 7100</p>
                                </div>
                                <div className="single_address">
                                    <FontAwesomeIcon icon={faClock} size="lg" className="mx-4" />
                                    <h4>Work Time</h4>
                                    <p>Mon - Fri: 08.00 - 16.00. <br />Sat: 10.00 - 14.00</p>
                                </div>
                            </div>
						</div>
                    </div>
            
                        <div className={(
                            isMobile 
                            ? 'col-lg-7 contact-form__wrapper p-5 order-lg-1 bg-blue-custom text-white' 
                            : 'col-lg-7 contact-form__wrapper p-5 order-lg-1'
                        )}>
                        <form action="#" className="contact-form form-validate">
                            <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <div className="form-group">
                                        <label className="required-field">First Name</label>
                                        <input type="text" className="form-control" id="firstName" name="firstName" />
                                    </div>
                                </div>
            
                                <div className="col-sm-6 mb-3">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" />
                                    </div>
                                </div>
            
                                <div className="col-sm-6 mb-3">
                                    <div className="form-group">
                                        <label className="required-field">Email</label>
                                        <input type="text" className="form-control" id="email" name="email" />
                                    </div>
                                </div>
            
                                <div className="col-sm-6 mb-3">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control" id="phone" name="phone" />
                                    </div>
                                </div>
            
                                <div className="col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label className="required-field">How can we help?</label>
                                        <textarea className="form-control" id="message" name="message" rows={4} placeholder="Type your message....."></textarea>
                                    </div>
                                </div>
            
                                <div className="col-sm-12 mb-3">
                                    <button type="submit" name="submit" className="btn btn-primary">Submit</button>
                                </div>            
                            </div>
                        </form>
                    </div>            
                </div>
            </div>
        </div>
      </section>
    );
  }
}