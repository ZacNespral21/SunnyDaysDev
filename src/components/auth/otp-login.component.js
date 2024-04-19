// React & Core
import React, { useState } from 'react';
import {isMobile} from 'react-device-detect';
import { supaBase } from '@core';
import PhoneInput from 'react-phone-number-input/input'

// Import Assets & Styling
import logo from 'assets/logo-no-background.png';
import 'react-phone-number-input/style.css';

function OTPLogin(){
  const [loading, setLoading] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault()

    setLoading(true)
    // const { error } = await supaBase.auth.signInWithOtp({ email })
    const { error } = await supaBase.auth.signInWithOtp({
      phone: phoneNum,
    })

    if (error) {
      alert(error.message)
    } else {
      window.location.href = "/otp?phone=" + phoneNum;
    }
    setLoading(false)
  }

  const formatPhoneNum = async (e) => {
    setPhoneNum(e);
  }

  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-blue-custom text-white" style={{ borderRadius: (isMobile ? '0rem' : '1rem'), border: (isMobile ? 'none' : 'inherit') }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase mb-4"><img src={logo} className="logo-icon" alt="logo-icon" /></h2>
                  <h4 className="mb-4">Login or Register Easily <br/> Just Use Your Phone Number!</h4>
                  <p className="mb-4">If you dont have an account, don't worry, we'll make one for you and prompt you for more information later.</p>
                  <form className="form-widget" onSubmit={handleLogin}>
                    <div className="form-outline form-white mb-4">
                      <PhoneInput
                        className="form-control form-control-lg"
                        country="US"
                        placeholder="Enter Phone Number"
                        value={phoneNum}
                        onChange={formatPhoneNum} />
                    </div>
                    <button className={'btn btn-outline-light btn-lg px-5'} disabled={loading}>
                      {loading ? <span>Loading</span> : <span>Login or Register</span>}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default OTPLogin;