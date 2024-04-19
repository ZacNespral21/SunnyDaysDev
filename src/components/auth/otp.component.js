import React, { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { supaBase, NavigationBar } from '@core';
import 'assets/styles/otp.scss';

function OTPPassword() {
  const queryParameters = new URLSearchParams(window.location.search)
  const otpPhone = queryParameters.get("phone") || ''
  // const [loading, setLoading] = useState(false)
  const [phoneNumCode, setPhoneNumCode] = useState('')
  const inputRef = useRef();

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      // @ts-ignore
      minutes = parseInt(timer / 60, 10);
      // @ts-ignore
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  window.onload = function () {
    var fiveMinutes = 60 * 5,
      display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  };

  const handleVerify = async (e) => {
    e.preventDefault()

    setLoading(true)
    // const { error } = await supaBase.auth.signInWithOtp({ email })
    const { error } = await supaBase.auth.verifyOtp({
      phone: otpPhone,
      token: phoneNumCode,
      type: 'sms',
    })

    if (error) {
      alert(error.message)
    } else {
      window.location.href = "/account";
    }
    setLoading(false)
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <>
    <section className="vh-90">
      <NavigationBar />
      <div className={"otp-comp container py-5 h-100" + (isMobile ? ' bg-blue-custom' : '')}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-blue-custom text-white" style={{ borderRadius: (isMobile ? '0rem' : '1rem'), border: (isMobile ? 'none' : 'inherit') }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-6 mt-md-4">
                  <p>Enter your one time passcode below <span id="time">05:00</span></p>
                  {/* <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email" />
                    </div> */}
                  {/* <div>Registration closes in <span id="time">:60</span> minutes!</div> */}
                  <form className="form-widget" onSubmit={handleVerify}>
                  <div className="d-flex flex-row mt-5">
                    <input
                      type="number"
                      min="1"
                      max="999999"
                      className="form-control"
                      value={phoneNumCode}
                      required={true}
                      ref={inputRef}
                      onChange={(e) => setPhoneNumCode(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-outline-light btn-lg px-5 mt-5" type="submit">Continue</button>
                  <br />
                  </form>
                </div>
                <div>
                  <p className="mb-0 mt-3">Didn't recieve a passcode? <br /><a href="/login" className="text-white-50 fw-bold mt-3">Try Again</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default OTPPassword;