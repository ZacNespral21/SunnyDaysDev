import React, { Component } from 'react'
import { isMobile } from 'react-device-detect';
import 'assets/styles/account.scss';

export default class UserProfileSecurity extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <nav className="nav nav-borders">
            <a className="nav-link ms-0" href="/account">Profile</a>
            <a className="nav-link" href="/account/billing">Billing</a>
            <a className="nav-link active" href="/account/security">Security</a>
            <a className="nav-link" href="/account/notifications">Notifications</a>
          </nav>
          <hr className="mt-0 mb-4" />
          <div className="row">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-header">Change Password</div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="small mb-1" for="currentPassword">Current Password</label>
                      <input className="form-control" id="currentPassword" type="password" placeholder="Enter current password" />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" for="newPassword">New Password</label>
                      <input className="form-control" id="newPassword" type="password" placeholder="Enter new password" />
                    </div>
                    <div className="mb-3">
                      <label className="small mb-1" for="confirmPassword">Confirm Password</label>
                      <input className="form-control" id="confirmPassword" type="password" placeholder="Confirm new password" />
                    </div>
                    <button className="btn btn-theme-offset-primary" type="button">Save</button>
                  </form>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">Security Preferences</div>
                <div className="card-body">
                  <h5 className="mb-1">Account Privacy</h5>
                  <p className="small">By setting your account to private, your profile information and posts will not be visible to users outside of your user groups.</p>
                  <form>
                    <div className="form-check">
                      <input className="form-check-input" id="radioPrivacy1" type="radio" name="radioPrivacy" checked="" />
                      <label className="form-check-label" for="radioPrivacy1">Public (posts are available to all users)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" id="radioPrivacy2" type="radio" name="radioPrivacy" />
                      <label className="form-check-label" for="radioPrivacy2">Private (posts are available to only users in your groups)</label>
                    </div>
                  </form>
                  <hr className="my-4" />
                  <h5 className="mb-1">Data Sharing</h5>
                  <p className="small">Sharing usage data can help us to improve our products and better serve our users as they navigation through our application. When you agree to share usage data with us, crash reports and usage analytics will be automatically sent to our development team for investigation.</p>
                  <form>
                    <div className="form-check">
                      <input className="form-check-input" id="radioUsage1" type="radio" name="radioUsage" checked="" />
                      <label className="form-check-label" for="radioUsage1">Yes, share data and crash reports with app developers</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" id="radioUsage2" type="radio" name="radioUsage" />
                      <label className="form-check-label" for="radioUsage2">No, limit my data sharing with app developers</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-header">Two-Factor Authentication</div>
                <div className="card-body">
                  <p>Add another level of security to your account by enabling two-factor authentication. We will send you a text message to verify your login attempts on unrecognized devices and browsers.</p>
                  <form>
                    <div className="form-check">
                      <input className="form-check-input" id="twoFactorOn" type="radio" name="twoFactor" checked="" />
                      <label className="form-check-label" for="twoFactorOn">On</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" id="twoFactorOff" type="radio" name="twoFactor" />
                      <label className="form-check-label" for="twoFactorOff">Off</label>
                    </div>
                    <div className="mt-3">
                      <label className="small mb-1" for="twoFactorSMS">SMS Number</label>
                      <input className="form-control" id="twoFactorSMS" type="tel" placeholder="Enter a phone number" value="555-123-4567" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">Delete Account</div>
                <div className="card-body">
                  <p>Deleting your account is a permanent action and cannot be undone. If you are sure you want to delete your account, select the button below.</p>
                  <button className="btn btn-danger-soft text-danger" type="button">I understand, delete my account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}