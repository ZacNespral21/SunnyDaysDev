import React, { Component } from 'react'
// import { isMobile } from 'react-device-detect';
import 'assets/styles/account.scss';

export default class UserProfileBilling extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <nav className="nav nav-borders">
            <a className="nav-link ms-0" href="/account">Profile</a>
            <a className="nav-link active" href="/account/billing">Billing</a>
            <a className="nav-link" href="/account/security">Security</a>
            <a className="nav-link" href="/account/notifications">Notifications</a>
          </nav>
          <hr className="mt-0 mb-4" />
          <div className="row">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card h-100 border-start-lg border-start-primary">
                  <div className="card-body">
                    <div className="small">Current monthly bill</div>
                    <div className="h3">$0.00</div>
                    <a className="text-arrow-icon small" href="#!">
                      Switch to yearly billing
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 border-start-lg border-start-secondary">
                  <div className="card-body">
                    <div className="small">Next payment due</div>
                    <div className="h3">January 1st</div>
                    <a className="text-arrow-icon small text-secondary" href="#!">
                      View payment history
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 border-start-lg border-start-success">
                  <div className="card-body">
                    <div className="small">Current plan</div>
                    <div className="h3">Tier 1</div>
                    <a className="text-arrow-icon small text-success" href="#!">
                      Upgrade plan
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-header-actions mb-4">
              <div className="card-header">
                Payment Methods
                <button className="btn btn-sm btn-primary" type="button" style={{ float: 'right' }}>Add Payment Method</button>
              </div>
              <div className="card-body px-0">
                <div className="d-flex align-items-center justify-content-between px-4">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-cc-visa fa-2x cc-color-visa"></i>
                    <div className="ms-4">
                      <div className="small">Visa ending in 1234</div>
                      <div className="text-xs">Expires 04/2024</div>
                    </div>
                  </div>
                  <div className="ms-4 small">
                    <div className="badge bg-light text-dark me-3">Default</div>
                    <a href="#!">Edit</a>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between px-4">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-cc-mastercard fa-2x cc-color-mastercard"></i>
                    <div className="ms-4">
                      <div className="small">Mastercard ending in 5678</div>
                      <div className="text-xs">Expires 05/2022</div>
                    </div>
                  </div>
                  <div className="ms-4 small">
                    <a className="me-3" href="#!">Make Default</a>
                    <a href="#!">Edit</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Billing History</div>
              <div className="card-body">
                <div className="table-responsive table-billing-history">
                  <table className="table-custom-bg table mb-0">
                    <thead>
                      <tr>
                        <th className="border-gray-200" scope="col">Transaction ID</th>
                        <th className="border-gray-200" scope="col">Date</th>
                        <th className="border-gray-200" scope="col">Amount</th>
                        <th className="border-gray-200" scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#0001</td>
                        <td>01/01/2024</td>
                        <td>$0.00</td>
                        <td><span className="badge bg-light text-dark">Pending</span></td>
                      </tr>
                      <tr>
                        <td>#0001</td>
                        <td>01/01/2024</td>
                        <td>$0.00</td>
                        <td><span className="badge bg-light text-dark">Pending</span></td>
                      </tr>
                      <tr>
                        <td>#0001</td>
                        <td>01/01/2024</td>
                        <td>$0.00</td>
                        <td><span className="badge bg-light text-dark">Pending</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}