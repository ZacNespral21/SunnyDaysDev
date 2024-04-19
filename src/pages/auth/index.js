// React & Core
import React from 'react';
import { isMobile } from 'react-device-detect';

// Assets & Styling
import 'react-international-phone/style.css';

// Components
import NavigationBar from 'components/global/navigation.component';
import OTPLogin from 'components/auth/otp-login.component'

function Login() {
  return <>
    <section className={"vh-90" + (isMobile ? ' bg-blue-custom' : '')}>
      <NavigationBar />
      <OTPLogin />
    </section>
  </>;
}

export default Login;