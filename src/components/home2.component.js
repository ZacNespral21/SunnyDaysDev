import React, { Component } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import 'assets/styles/home.scss'
// import FooterDesktop from '../components/global/footer.component';
// import FooterMobile from '../components/global/footer-mobile.component';
import NavigationBar from './global/navigation.component';
export default class Login extends Component {
  render() {
    return (
      <>
        <BrowserView>
          <NavigationBar />
          <section className="vh-50">
            <div className="container-fluid p-0 m-0">
              <div className="hero">
                <div className="hero__title">
                  <h2>Weather. Travel. Stay. Vacation.</h2>
                  <h5>Welcome to your one stop shop for a last minute sunny vacation!</h5>
                </div>
              </div>
              {/* <div className="sponsors">
                <div className="sponsors__content">
                  <div className="row m-0 p-0">
                    <div className="col-md-3"><img src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2019/10/Jolsch.png" className="sponsor-logo" alt="logo-icon" /></div>
                    <div className="col-md-3"><img src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2020/03/7-eleven.png" className="sponsor-logo" alt="logo-icon" /></div>
                    <div className="col-md-3"><img src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2021/01/door-dash.png" className="sponsor-logo pt-4" alt="logo-icon" /></div>
                    <div className="col-md-3"><img src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2020/01/Jimmy-Johns-4.png" className="sponsor-logo" alt="logo-icon" /></div>
                  </div>
                </div>
              </div> */}
              {/* <div className="home-content-box-one">
                <h3>FIND AND HIRE THE RIGHT WORKERS EVERY TIME</h3>
                <div className="row m-0 p-0">
                  <div className="col-md-2"></div>
                  <div className="col-md-4">
                    <img src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2021/01/businessBG@4x.png" className="sponsor-logo" alt="logo-icon" />
                    <div className="blue-divider"></div>
                    <h5>BUSINESS STAFFING</h5>
                    <p>Instantly connect with a pool of 1,000's available workers.</p>
                    <p>Whether you're looking to hire hourly workers to fill Shift Gigs ASAP or you need to source qualified talent for your part-time and full-time positions.</p>
                    <a className="btn btn-custom btn-outline-light btn-md px-5 text-white mt-2" href='/hire'>FIND STAFF</a>
                  </div>
                  <div className="col-md-4">
                    <img src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2021/01/residentialBG@4x.png" className="sponsor-logo" alt="logo-icon" />
                    <div className="blue-divider"></div>
                    <h5>RESIDENTIAL TASKS & PROJECTS</h5>
                    <p>Connect with local, qualified home improvement professionals.</p>
                    <p>From lawn care and gardening to appliance repair and furniture assembly, Get Workers connects you to qualified residential workers.</p>
                    <a className="btn btn-custom btn-outline-light btn-md px-5 text-white mt-2" href='/jobs'>FIND JOBS</a>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
              <div className="home-content-box-two">
                <div className="row m-0 p-0">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <h3>LOOKING FOR WORK?</h3>
                    <p>Find jobs, short-term or long-term in your area today!</p>
                    <a className="btn btn-outline-light btn-md px-5 text-white mt-2" href='/jobs'>FIND JOBS</a>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
              <div className="home-content-box-three">
                <h3>HOW TO EASILY FIND AND HIRE LOCAL WORKERS</h3>
                <p>If you need people, you need Get Workers. With access to over 848,000+ workers across all industries, our hiring platform provides a fast, low-cost alternative to local staffing agencies.</p>
                <div className="row m-0 p-0">
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2020/12/briefcase-icon.png" />
                    <p>Post Free Shift Gigs up to 30 Days in Advance</p>
                  </div>
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2019/10/80699_GigSmart_Web_HowItWorks_mw-03@2x.png" />
                    <p>Hire Workers For All Your Business Needs</p>
                  </div>
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2019/10/80699_GigSmart_Web_Icons-02@2x.png" />
                    <p>View Worker Profiles and Ratings</p>
                  </div>
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2019/10/80699_GigSmart_Web_Icons-04@2x.png" />
                    <p>Hire Background Checked Shift Gig Workers</p>
                  </div>
                </div>
                <div className="row m-0 p-0">
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2019/10/80699_GigSmart_Web_HowItWorks_mw-06@2x.png" />
                    <p>Communicate Directly with Workers In-App</p>
                  </div>
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2019/10/80699_GigSmart_Web_Icons-05@2x-1.png" />
                    <p>Advertise Your Full/Part-Time Positions</p>
                  </div>
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2020/12/job-post-icon.png" />
                    <p>Advertise Your Full/Part-Time Positions</p>
                  </div>
                  <div className="col-md-3">
                    <img alt="briefcase-icon" className="home-content-three-icons" src="https://gigsmart.wpenginepowered.com/wp-content/uploads/2019/11/staffing-support-team.png" />
                    <p>Access Our Staffing Support Team</p>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <FooterDesktop /> */}
          </section>
        </BrowserView>
        <MobileView>
          <NavigationBar />
          <section className="vh-50">
            <div className="container-fluid p-0 m-0">
              <div className="hero">
                <div className="hero__title">
                  <h2>Weather. Travel. Stay. Vacation.</h2>
                  <h5>Welcome to your one stop shop for a last minute sunny vacation!</h5>
                </div>
              </div>
              {/* <div className="home-content-box-one-mobile mt-4">
                <div className="row m-0 p-0">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <h3>LOOKING FOR HELP?</h3>
                    <a className="btn btn-outline-light btn-md px-5 text-white mt-2" href='/hire'>FIND STAFF</a>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
              <div className="home-content-box-two-mobile mt-4 mb-5">
                <div className="row m-0 p-0">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <h3>LOOKING FOR WORK?</h3>
                    <a className="btn btn-outline-light btn-md px-5 text-white mt-2" href='/jobs'>FIND JOBS</a>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div> */}
            </div>
            {/* <FooterMobile /> */}
          </section>
        </MobileView>
      </>
    );
  }
}